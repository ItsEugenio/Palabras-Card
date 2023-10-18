
import styles from "../css/pageHome.module.css"

export const metadata = {
  title: 'App Cards',
  description: '223730',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        {children}
        </body>
    </html>
  )
}
