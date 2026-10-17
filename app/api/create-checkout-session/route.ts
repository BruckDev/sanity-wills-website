import {NextResponse} from 'next/server'
import Stripe from 'stripe'

export async function POST() {
  const secretKey = process.env.STRIPE_SECRET_KEY
  const domain = process.env.DOMAIN
  // Scenario B sample value: replace with a real recurring Stripe Price ID before enabling.
  const priceId = 'price_...'

  if (!secretKey || !domain || priceId === 'price_...') {
    return NextResponse.json({message: 'Checkout is not configured yet.'}, {status: 503})
  }

  const stripe = new Stripe(secretKey)

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'hosted_page',
      mode: 'subscription',
      billing_address_collection: 'auto',
      phone_number_collection: {enabled: false},
      automatic_tax: {enabled: false},
      allow_promotion_codes: false,
      payment_method_collection: 'always',
      submit_type: 'auto',
      integration_identifier: 'hosted_web_0002',
      origin_context: 'web',
      success_url: `${domain}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domain}`,
      line_items: [{price: priceId, quantity: 1}],
    })

    if (!session.url) {
      return NextResponse.json({message: 'Checkout is unavailable right now.'}, {status: 502})
    }

    return NextResponse.redirect(session.url, 303)
  } catch {
    return NextResponse.json({message: 'Checkout is unavailable right now.'}, {status: 502})
  }
}
