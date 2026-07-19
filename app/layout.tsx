import './globals.css'
import Script from 'next/script'

export default function RootLayout({children}: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LE0CWC41BG" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LE0CWC41BG');`}
        </Script>
      </body>
    </html>
  )
}
