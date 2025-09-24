import './globals.css'

export const metadata = {
  title: 'DigiLocker - Secure Document Storage',
  description: 'A secure digital document locker for managing your important files',
  keywords: 'digital locker, secure storage, document management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
