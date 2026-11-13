import nodemailer from 'nodemailer'

const recipient = 'gbruck@wills.com'
const maximumBodyBytes = 20_000

export const maxDuration = 30

export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  if (
    request.headers.get('sec-fetch-site') === 'cross-site' ||
    (origin && origin !== new URL(request.url).origin)
  ) {
    return new Response(null, {status: 403})
  }
  if (request.headers.get('content-type')?.split(';')[0] !== 'application/json') {
    return new Response(null, {status: 415})
  }
  if (Number(request.headers.get('content-length')) > maximumBodyBytes) {
    return new Response(null, {status: 413})
  }

  const body = await request.text().catch(() => '')
  if (Buffer.byteLength(body, 'utf8') > maximumBodyBytes) return new Response(null, {status: 413})

  let payload: {email?: unknown; question?: unknown; website?: unknown} | null
  try {
    payload = JSON.parse(body)
  } catch {
    return new Response(null, {status: 400})
  }
  if (!payload || typeof payload !== 'object') return new Response(null, {status: 400})
  if (typeof payload.website === 'string' && payload.website.trim())
    return new Response(null, {status: 204})

  const email = typeof payload.email === 'string' ? payload.email.trim() : ''
  const question = typeof payload.question === 'string' ? payload.question.trim() : ''
  if (
    email.length > 254 ||
    !/^[^\s@,<>]+@[^\s@,<>]+\.[^\s@,<>]+$/.test(email) ||
    !question ||
    question.length > 3000
  ) {
    return new Response(null, {status: 400})
  }

  const password = process.env.VISITOR_QUESTION_GMAIL_APP_PASSWORD?.replace(/\s/g, '')
  if (!password) return new Response(null, {status: 503})

  const sender = process.env.VISITOR_QUESTION_GMAIL_USER?.trim() || recipient
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {user: sender, pass: password},
    connectionTimeout: 7000,
    greetingTimeout: 5000,
    socketTimeout: 10000,
  })

  try {
    await transport.sendMail({
      from: {name: 'Wills.com visitor questions', address: sender},
      to: recipient,
      replyTo: {name: '', address: email},
      subject: 'New visitor question from Wills.com',
      text: `Visitor email: ${email}\n\n${question}`,
    })
    return new Response(null, {status: 204})
  } catch (error) {
    const code = (error as {code?: string}).code
    console.error('Visitor question delivery failed', code)
    return new Response(null, {status: 502})
  }
}
