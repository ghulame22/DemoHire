import './globals.css'


export const metadata = {
  title: 'DemoHire',
  description: 'Hires best for best Tech Jobs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
