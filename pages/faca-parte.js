import Head from 'next/head'
import { Title } from '../components/atoms/title'
import { COLORS } from '../styles/colors'
import styles from '../styles/Home.module.css'
import { OurPartnership } from "../components/organisms/our-partnership"

export default function JoinUs() {
  return (
    <div className={styles.container}>
      <h1 style={{color: `${COLORS.primary}`}}> FAÇA PARTE </h1>
      <OurPartnership />
    </div>
  )
}
