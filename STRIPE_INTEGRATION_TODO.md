# Stripe Checkout integration TODO

Scenario B applies: no existing Checkout Session creation call or Stripe SDK was found. This change adds only a server-side Checkout endpoint, the SDK dependency, and configuration examples. It does not activate payments or change the public offer/buttons.

## Values to Replace

The following sample values must be configured before going live. The endpoint returns HTTP 503 until the placeholder Price ID is replaced and its required environment variables are set.

**Files containing placeholders:**

- [Checkout endpoint](app/api/create-checkout-session/route.ts)
- [Environment example](.env.example)

| Field                 | Current value                                        | What to set                                                                                                                                                                                                                                     |
| --------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                | `subscription`                                       | Already selected for the site's monthly recurring offer. Keep this for recurring billing; use `payment` only for a one-time product and remove `payment_method_collection` in that case.                                                        |
| `success_url`         | `${domain}/success?session_id={CHECKOUT_SESSION_ID}` | Your actual success page URL. The sample `/success` page does not exist. Keep the literal `{CHECKOUT_SESSION_ID}` template for Stripe substitution.                                                                                             |
| `cancel_url`          | `${domain}`                                          | Your actual cancel/return page URL, such as the attorney offer page.                                                                                                                                                                            |
| `line_items[0].price` | `price_...`                                          | The actual Stripe **Price** ID (not Product ID or Payment Link), from the same sandbox/live environment as the API key. For the founding offer, verify USD 29.99 per month, quantity 1. The $99 tier is not selected or wired by this endpoint. |
| `STRIPE_SECRET_KEY`   | Empty                                                | Set a server-only restricted Stripe API key with the permissions required by Checkout. Start with a separate Stripe sandbox. Keep keys in ignored `.env.local` locally and sensitive environment variables on Vercel; never commit them.        |
| `DOMAIN`              | `http://localhost:3000` in `.env.example`            | Your local app origin for development and the actual HTTPS site origin in production, with no trailing slash. Next.js already loads environment files; copy only these two entries to the appropriate configuration.                            |

`price_...` is deliberately preserved from the Scenario B reference instead of guessing an existing Stripe resource. The guard must remain pointed at the literal `price_...` placeholder when replacing the `priceId` value. No live Stripe resources, subscriptions, or charges were created by this task.

## Configured Parameters

These Checkout Studio parameters are set exactly as requested.

**Files containing these parameters:**

- [Checkout endpoint](app/api/create-checkout-session/route.ts)

| Parameter                    | Value                             |
| ---------------------------- | --------------------------------- |
| `ui_mode`                    | `hosted_page`                     |
| `billing_address_collection` | `auto`                            |
| `phone_number_collection`    | `{enabled: false}`                |
| `automatic_tax`              | `{enabled: false}`                |
| `allow_promotion_codes`      | `false`                           |
| `payment_method_collection`  | `always` (subscription mode only) |
| `submit_type`                | `auto`                            |
| `integration_identifier`     | `hosted_web_0002`                 |
| `origin_context`             | `web`                             |

The installed Stripe Node SDK version is pinned in [package.json](package.json) and [package-lock.json](package-lock.json). It is version 21 or newer, so the requested `hosted_page` value applies. The Stripe client has **no explicit API version argument**, as requested.

## Setup and Next Steps

1. Run `npm ci` to install the pinned dependencies. Configure the Price ID, return URLs, `STRIPE_SECRET_KEY`, and `DOMAIN` above. No publishable key or browser Stripe.js installation is needed for this hosted redirect flow.
2. Use a separate [Stripe sandbox](https://docs.stripe.com/sandboxes) for development. After replacing the sample values, POST to `/api/create-checkout-session` using a normal browser form submission or another server client. The endpoint creates a subscription Checkout Session and returns a **303 redirect** to Stripe's hosted page. A fetch caller must handle redirect/navigation appropriately; no frontend button has been rewired in this scoped task.
3. In sandbox Checkout, test card `4242 4242 4242 4242` with any future expiry and any three-digit CVC. Test authentication with `4000 0025 0000 3155`, and a declined card with `4000 0000 0000 9995`. Never use real card information in tests. Confirm success and cancellation returns, product name, currency, $29.99 amount, and monthly recurrence.
4. **Required before subscription launch:** implement verified, idempotent webhook handling for `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `customer.subscription.*`, `invoice.paid`, and `invoice.payment_failed`. Confirm payment/subscription state before fulfillment; a visit to the success page is not payment verification. Associate Stripe customer/subscription IDs with accepted firms and track renewals, cancellations, and failures. No existing application billing persistence pattern was found, so no datastore, webhook route, or fulfillment implementation was invented here.
5. Connect accepted firms to the configured Checkout flow and supply subscription cancellation/customer management. Keep the first-100-firm acceptance and locked-rate policy in the onboarding process; this endpoint does not enforce program capacity or acceptance.
6. Automatic tax is **disabled**, matching Checkout Studio. Assess applicable tax obligations and registrations before launch. Do not enable Stripe Tax without the necessary configuration and registrations.

### Project structure

- `app/api/create-checkout-session/route.ts` — new POST endpoint, safe unconfigured response, hosted redirect, generic errors.
- `STRIPE_INTEGRATION_TODO.md` — this setup checklist.
- `.env.example` — adds only the server variables this endpoint reads.
- `package.json` / `package-lock.json` — adds the missing Stripe SDK.

No new middleware, authentication system, env loader, database, UI, success page, webhook handler, or resource persistence layer is added.

### Validation

Run `npm run lint` and `npm run type-check`. Until configured, POSTing to the endpoint should return HTTP 503 with `Checkout is not configured yet.` rather than call Stripe or collect payment. Live/sandbox end-to-end payment verification remains pending the values and required subscription lifecycle handling above.

### Resources

- [Create a Checkout Session](https://docs.stripe.com/api/checkout/sessions/create)
- [Subscription webhooks](https://docs.stripe.com/billing/subscriptions/webhooks)
- [Stripe support](https://support.stripe.com)
- [Stripe MCP documentation](https://docs.stripe.com/mcp)
