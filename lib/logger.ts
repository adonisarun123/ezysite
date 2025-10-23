/**
 * Structured logging system
 * Replaces console.log with proper logging infrastructure
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

interface LogContext {
  [key: string]: any;
}

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: LogContext;
  timestamp: string;
  environment: string;
}

class Logger {
  private minLevel: LogLevel;
  private environment: string;

  constructor() {
    this.environment = process.env.NODE_ENV || 'development';
    // In production, only log warnings and errors
    this.minLevel =
      this.environment === 'production' ? LogLevel.WARN : LogLevel.DEBUG;
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.minLevel;
  }

  private formatMessage(entry: LogEntry): string {
    const levelName = LogLevel[entry.level];
    const contextStr = entry.context
      ? `\n${JSON.stringify(entry.context, null, 2)}`
      : '';

    return `[${entry.timestamp}] [${levelName}] ${entry.message}${contextStr}`;
  }

  private log(level: LogLevel, message: string, context?: LogContext): void {
    if (!this.shouldLog(level)) {
      return;
    }

    const entry: LogEntry = {
      level,
      message,
      context,
      timestamp: new Date().toISOString(),
      environment: this.environment,
    };

    const formattedMessage = this.formatMessage(entry);

    // In production, you would send to a logging service here
    // Examples: Sentry, Datadog, LogRocket, etc.
    if (this.environment === 'production') {
      // TODO: Send to external logging service
      // sendToLoggingService(entry);
    }

    // Console output
    switch (level) {
      case LogLevel.DEBUG:
        console.log(formattedMessage);
        break;
      case LogLevel.INFO:
        console.info(formattedMessage);
        break;
      case LogLevel.WARN:
        console.warn(formattedMessage);
        break;
      case LogLevel.ERROR:
        console.error(formattedMessage);
        break;
    }
  }

  /**
   * Debug level logging (development only)
   */
  debug(message: string, context?: LogContext): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  /**
   * Info level logging
   */
  info(message: string, context?: LogContext): void {
    this.log(LogLevel.INFO, message, context);
  }

  /**
   * Warning level logging
   */
  warn(message: string, context?: LogContext): void {
    this.log(LogLevel.WARN, message, context);
  }

  /**
   * Error level logging
   */
  error(message: string, error?: Error | unknown, context?: LogContext): void {
    const errorContext: LogContext = {
      ...context,
      ...(error instanceof Error && {
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack,
        },
      }),
    };

    this.log(LogLevel.ERROR, message, errorContext);

    // In production, send errors to error tracking service
    if (this.environment === 'production' && error instanceof Error) {
      // TODO: Send to error tracking service (Sentry, etc.)
      // Sentry.captureException(error, { extra: context });
    }
  }

  /**
   * Log API request
   */
  apiRequest(
    method: string,
    path: string,
    context?: LogContext
  ): void {
    this.info(`API ${method} ${path}`, context);
  }

  /**
   * Log API response
   */
  apiResponse(
    method: string,
    path: string,
    statusCode: number,
    durationMs?: number,
    context?: LogContext
  ): void {
    const level = statusCode >= 400 ? LogLevel.WARN : LogLevel.INFO;
    const message = `API ${method} ${path} ${statusCode}${
      durationMs ? ` (${durationMs}ms)` : ''
    }`;

    this.log(level, message, context);
  }

  /**
   * Log database query
   */
  dbQuery(
    operation: string,
    table: string,
    durationMs?: number,
    context?: LogContext
  ): void {
    this.debug(`DB ${operation} ${table}${durationMs ? ` (${durationMs}ms)` : ''}`, context);
  }

  /**
   * Log email sent
   */
  emailSent(
    to: string,
    subject: string,
    success: boolean,
    context?: LogContext
  ): void {
    const level = success ? LogLevel.INFO : LogLevel.ERROR;
    const status = success ? 'sent' : 'failed';
    this.log(level, `Email ${status} to ${to}: ${subject}`, context);
  }

  /**
   * Log form submission
   */
  formSubmission(
    formName: string,
    success: boolean,
    context?: LogContext
  ): void {
    const level = success ? LogLevel.INFO : LogLevel.WARN;
    const status = success ? 'submitted' : 'failed';
    this.log(level, `Form ${formName} ${status}`, context);
  }

  /**
   * Log authentication event
   */
  auth(
    event: 'login' | 'logout' | 'failed' | 'unauthorized',
    context?: LogContext
  ): void {
    const level = event === 'failed' || event === 'unauthorized'
      ? LogLevel.WARN
      : LogLevel.INFO;
    this.log(level, `Auth: ${event}`, context);
  }
}

// Export singleton instance
export const logger = new Logger();

// Export convenience methods
export const {
  debug,
  info,
  warn,
  error,
  apiRequest,
  apiResponse,
  dbQuery,
  emailSent,
  formSubmission,
  auth,
} = logger;
