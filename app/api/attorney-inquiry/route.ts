import {NextResponse} from 'next/server'

type AttorneyInquiry = {
  firmName?: unknown
  contactName?: unknown
  email?: unknown
  phone?: unknown
  message?: unknown
  website?: unknown
}

function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as AttorneyInquiry | null
  if (!payload) return NextResponse.json({message: 'Invalid form submission.'}, {status: 400})

  if (text(payload.website)) return NextResponse.json({ok: true})

  const firmName = text(payload.firmName)
  const contactName = text(payload.contactName)
  const email = text(payload.email)
  const phone = text(payload.phone)
  const message = text(payload.message)

  if (!firmName || !contactName || !phone || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({message: 'Please provide valid contact details and a message.'}, {status: 400})
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FORM_FROM
  const to = process.env.CONTACT_FORM_RECIPIENT || 'gbruck@bruckcpa.com'

  if (!apiKey || !from) {
    return NextResponse.json({message: 'Direct form delivery is not configured yet.'}, {status: 503})
  }

  const emailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json'},
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Wills.com attorney inquiry — ${firmName}`,
      text: `Firm: ${firmName}\nContact: ${contactName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    }),
  })

  if (!emailResponse.ok) {
    return NextResponse.json({message: 'We could not send your inquiry right now.'}, {status: 502})
  }

  return NextResponse.json({ok: true})
}
