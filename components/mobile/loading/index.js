import Head from "next/head";
import styles from "../../../styles/Home.module.css";

export default function Loading() {
  return (
      <div className={styles.container_page}>
        <div className={styles.calda}>
          <div className={styles.body}>
            <div className={styles.eye_container}>
              <div className={styles.eye1}></div>
              <div className={styles.eye2}></div>
            </div>
            <div className={styles.cel}></div>
            <div className={styles.hand1}></div>
            <div className={styles.hand2}></div>
            <div className={styles.orelha1}></div>
            <div className={styles.orelha2}></div>
            <div className={styles.details1}></div>
            <div className={styles.details2}></div>
            <div className={styles.headphone}></div>
            <div className={styles.headphone_detail1}></div>
            <div className={styles.headphone_detail2}></div>
          </div>
        </div>
      </div>
  );
}
