import './globals.css'

export default function RootLayout({children}: LayoutProps<'/'>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  )
}
