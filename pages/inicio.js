import Head from 'next/head'
import { COLORS } from '../styles/colors'
import styles from '../styles/Home.module.css'
import Header from '../components/organisms/header'
import VideoLoop from '../components/atoms/video-loop'
import Presentation from '../components/organisms/presentation'
import Values from '../components/organisms/values'

export default function Home() {
  return (
    <>
    <VideoLoop />
    <Presentation />
    {/* <NewSchoolGrafit /> */}
    <Values />
    </>
  )
}
