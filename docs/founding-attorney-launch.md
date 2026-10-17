# Founding Attorney Program operations

The public offer lives at `/for-attorneys`. All offer copy, plans, optional HTTPS checkout and booking URLs, application labels, report examples, directory labels, and policy copy can be edited in the **For Attorneys / Advertise** Sanity singleton. Defaults render before the first document is published. Preview uses the site's existing Draft Mode and Sanity Live flow.

## Activate billing and booking

- Configure the correct $29.99 and $99 **monthly recurring** checkout products in your billing provider, with month-to-month cancellation. Put their HTTPS URLs in each plan's `checkoutUrl`. No checkout product, subscription, or payment is created by this repository.
- Review and accept a firm before inviting payment. Maintain an acceptance register with the first 100 firms, accepted date, plan, agreed markets, billing customer/subscription ID, and continuing eligibility for the $29.99 rate. The website does not automatically enforce capacity or grandfathered billing.
- Add an HTTPS booking URL to `callUrl`. Until these URLs exist, buttons go to the application or an explicitly labeled email call request. `RESEND_API_KEY` and `CONTACT_FORM_FROM` enable the existing inquiry delivery handler; `CONTACT_FORM_RECIPIENT` defaults to the existing Wills.com contact address. Missing delivery configuration produces an email fallback, never a success message or lead event.
- Agree coverage, content format, publication timing, and cancellation details in writing before charging. New paid profiles and placements still require editorial onboarding and publication. Unpaid launch listings are not enrolled firms and must not be billed or described as sponsors.

## Credential review procedure

This is a manual operating procedure, not a scheduled verification service or a claim that the launch inventory has passed bar checks.

1. Assign a reviewer. Collect each named attorney's name, bar number, jurisdiction, firm website, office address, contact information, and claimed service area.
2. Look up every attorney in each relevant official bar/licensing directory. Record license/eligibility status, any practice restrictions material to the listing, the source URL, the check date, and reviewer. If names or offices do not match, request clarification and withhold publication.
3. Cross-check the firm identity, physical office, phone, website, and proposed service areas using firm sources and firm confirmation. Do not infer a practice radius from an office ZIP.
4. Review advertising obligations for the relevant jurisdiction before activation. Florida participation requires a specific review of qualifying-provider/directory requirements. Do not advertise bar approval.
5. Obtain firm approval of the profile and disclosures. Paid placements and paid educational content must show **Sponsored** adjacent to the placement. No “best”, “recommended”, ranking endorsement, matching claim, referral compensation, or percentage of fees.
6. Set a review due date 90 days after each check. Review the due list at least weekly, and recheck promptly after any reported change. Withhold or pause listings with unresolved identity or eligibility concerns. Do not add “verified” badges based only on firm-supplied content.
7. Keep the evidence and correction history in the internal acceptance register. Do not publish private compliance notes. Route corrections/removal requests through Contact.

The initial inventory contains four unpaid listings from official firm sources, reviewed October 17, 2026. Source URLs and review dates are visible on the profiles; bar status is explicitly unverified. Edit or suppress them using **Public-source directory listing** documents with the same `id` as `sanity/lib/initialAttorneyListings.ts`. Suppression also removes the launch fallback. ZIP search matches office ZIP exactly; it does not do radius/geographic matching. The four launch ZIPs are 60606, 10038, 90064, and 78701.

## Measurement and sponsor reports

The existing GA4 stream `G-LE0CWC41BG` is preserved, now loaded only on public website routes. `NEXT_PUBLIC_GA4_MEASUREMENT_ID` optionally overrides it. Only one tag is installed. Validate production events in GA4 Realtime/DebugView; account access is required to inspect receipt and settings. Disable automatic history-based page-view collection in Enhanced Measurement because the application sends one `page_view` per route itself. Review Enhanced Measurement form and outbound events to avoid including its separate auto-events in these custom totals.

| Event           | Meaning / parameters                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `page_view`     | Public page views with query/hash removed                                                                                |
| `zip_search`    | Completed directory search, `result_count`; searched ZIP is omitted                                                      |
| `profile_view`  | `profile_id`, `profile_kind` (`public_source` or `sample`)                                                               |
| `website_click` | External firm website click within a profile, `profile_id`                                                               |
| `phone_click`   | Phone link activation; profile ID when within a profile; not a completed call                                            |
| `email_click`   | Email link activation; not confirmed delivery                                                                            |
| `generate_lead` | Only a successful HTTP response after inquiry delivery; `form_id`, `lead_type` (`sponsor_application` or `firm_inquiry`) |
| `program_cta`   | Offer CTA, `placement`, `action`                                                                                         |

Register `profile_id`, `profile_kind`, `lead_type`, and `placement` as event-scoped dimensions in GA4. Mark `generate_lead` as a key event. Filter sample profiles from sponsor reports. Sponsor applications are business development inquiries, **not consumer leads for a listed firm**. No consumer-to-firm lead form or completed-call tracking is installed; those report metrics must remain unavailable until separately instrumented. Firm website and phone-link events can be reported now; never describe them as retained clients. Names, messages, emails, telephone numbers, and searched ZIPs are not custom event parameters. DNT/GPC suppress the custom analytics integration.

The report on the offer page is **illustrative**, not a live dashboard or a promise of results. Reports are assembled manually from GA4; automated monthly report delivery is not installed. Report page views, profile views, external clicks, and available attributed inquiries, with the reporting window and limitations. Do not call local page views advertising impressions.

## Search Console

Add `GOOGLE_SITE_VERIFICATION` with the HTML-tag verification token for the correct URL-prefix property. The site emits the verification meta tag; verification must then be completed inside the owner's Search Console account. A domain property instead requires DNS verification. Submit `https://wills.com/sitemap.xml`, verify canonical host selection, and inspect `/for-attorneys`. Report Search Console impressions/clicks separately from GA4 visitor actions.

## Source references

- [ABA Model Rule 7.2 comment](https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_7_2_advertising/comment_on_rule_7_2/)
- [Google Analytics event setup](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Search Console ownership verification](https://support.google.com/webmasters/answer/9008080)

The published policy text describes the launch's intended operation; it does not constitute a jurisdiction-specific legal compliance determination.
