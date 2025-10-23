import { describe, it, expect } from 'vitest';
import {
  escapeHtml,
  sanitizeForEmail,
  sanitizeEmail,
  sanitizePhone,
  sanitizeUrl,
} from '../sanitize';

describe('sanitize utilities', () => {
  describe('escapeHtml', () => {
    it('should escape HTML special characters', () => {
      expect(escapeHtml('<script>alert("xss")</script>')).toBe(
        '&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;'
      );
    });

    it('should handle empty string', () => {
      expect(escapeHtml('')).toBe('');
    });

    it('should escape ampersands', () => {
      expect(escapeHtml('Tom & Jerry')).toBe('Tom &amp; Jerry');
    });
  });

  describe('sanitizeForEmail', () => {
    it('should remove script tags', () => {
      const input = 'Hello<script>alert("bad")</script>World';
      const result = sanitizeForEmail(input);
      expect(result).not.toContain('<script>');
      expect(result).toContain('HelloWorld');
    });

    it('should remove style tags', () => {
      const input = 'Text<style>body{display:none}</style>More';
      const result = sanitizeForEmail(input);
      expect(result).not.toContain('<style>');
    });

    it('should remove javascript: protocol', () => {
      const input = '<a href="javascript:alert()">Click</a>';
      const result = sanitizeForEmail(input);
      expect(result).not.toContain('javascript:');
    });
  });

  describe('sanitizeEmail', () => {
    it('should validate and normalize email', () => {
      expect(sanitizeEmail('  TEST@EXAMPLE.COM  ')).toBe('test@example.com');
    });

    it('should throw on invalid email', () => {
      expect(() => sanitizeEmail('invalid-email')).toThrow('Invalid email format');
    });

    it('should accept valid emails', () => {
      expect(sanitizeEmail('user+tag@example.co.uk')).toBe('user+tag@example.co.uk');
    });
  });

  describe('sanitizePhone', () => {
    it('should clean phone number', () => {
      expect(sanitizePhone('+91-999-888-7777')).toBe('919998887777');
    });

    it('should throw on invalid length', () => {
      expect(() => sanitizePhone('123')).toThrow('Invalid phone number format');
    });

    it('should accept 10-digit numbers', () => {
      expect(sanitizePhone('9999888777')).toBe('9999888777');
    });

    it('should accept international format', () => {
      expect(sanitizePhone('+919999888777')).toBe('919999888777');
    });
  });

  describe('sanitizeUrl', () => {
    it('should validate https URLs', () => {
      expect(sanitizeUrl('https://example.com')).toBe('https://example.com');
    });

    it('should validate http URLs', () => {
      expect(sanitizeUrl('http://example.com')).toBe('http://example.com');
    });

    it('should throw on invalid protocol', () => {
      expect(() => sanitizeUrl('ftp://example.com')).toThrow('Invalid URL format');
    });

    it('should throw on javascript protocol', () => {
      expect(() => sanitizeUrl('javascript:alert(1)')).toThrow('Invalid URL format');
    });
  });
});
