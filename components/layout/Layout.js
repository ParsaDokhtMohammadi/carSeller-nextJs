import React from 'react'
import styles from "./Layout.module.css"
import Link from 'next/link'
const Layout = ({children}) => {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>
          <h2>car4Sell</h2>
        </Link>
        <p>choose and buy a car</p>
      </header>
        <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        car4sell next.js project
      </footer>
      
    </>
  )
}

export default Layout