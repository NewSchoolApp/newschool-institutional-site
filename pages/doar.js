import Head from 'next/head'
import { COLORS } from '../styles/colors'
import styles from '../styles/Home.module.css'

export default function Do() {
  return (
    <div className={styles.container}>
      <h1 style={{color: `${COLORS.primary}`}}> DOAÇÃO </h1>
    </div>
  )
}
