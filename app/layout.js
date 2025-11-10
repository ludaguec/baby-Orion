import './globals.css'

export const metadata = {
  title: 'Orion - AI Business Intelligence',
  description: 'AI-powered business intelligence assistant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
