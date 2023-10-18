import React from 'react'
import styles from '../../styles/pageHome.module.css'
export default function Titulo({titulo}) {
  return (
    <>
    <h1 className={styles.Titulo}>{titulo}</h1>
    </>
  )
}
