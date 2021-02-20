import Head from 'next/head'
import { COLORS } from '../styles/colors'
import styles from '../styles/Home.module.css'

export default function KnowTheApp() {
  return (
    <div className={styles.container}>
      <h1 style={{color: `${COLORS.primary}`}}> CONHEÇA O APP </h1>
    </div>
  )
}
