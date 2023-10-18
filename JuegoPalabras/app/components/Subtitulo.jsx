import React from 'react'
import styles from "../../styles/pageHome.module.css"
export default function Subtitulo({subtitulo}) {
  return (
    <>
    <p className={styles.subtitulo}>{subtitulo}</p>
    </>
  )
}
