export async function sendWebhook(formType: string, formData: any, requestId?: string) {
  const isBrowser = typeof window !== 'undefined'
  const payload = {
    formType,
    timestamp: new Date().toISOString(),
    requestId,
    ...formData,
  }

  try {
    if (isBrowser) {
      // Use internal forwarder to avoid CORS and hide external URL
      const response = await fetch('/api/webhook-forward', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const text = await response.text().catch(() => '')
        console.error('Webhook forward failed (client):', response.status, response.statusText, text)
        return { success: false, error: `Forward failed: ${response.status}` }
      }
      return { success: true }
    } else {
      // Server-side: send directly to external webhook
      const webhookUrl = process.env.WEBHOOK_URL
      if (!webhookUrl) {
        console.error('Webhook error: WEBHOOK_URL not configured on server')
        return { success: false, error: 'No webhook URL configured' }
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const text = await response.text().catch(() => '')
        console.error('Webhook error (server):', response.status, response.statusText, text)
        return { success: false, error: `Webhook failed: ${response.status}` }
      }
      return { success: true }
    }
  } catch (error) {
    console.error('Webhook error:', error)
    return { success: false, error: String(error) }
  }
}