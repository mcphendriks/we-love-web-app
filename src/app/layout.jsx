import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/organisms/NavBar';
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'I Love Web App',
  description: 'create a blog post for FDND with next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
      <main className={styles.main}>{children}</main>
      </body>
    </html>

  )
}
