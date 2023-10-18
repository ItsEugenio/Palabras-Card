import styles from '../styles/layout.module.css'

export const metadata = {
  title: 'Juego de Palabras',
  description: 'Podras ganar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  )
}
