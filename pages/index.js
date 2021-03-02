import Head from "next/head";
import React from "react";
import { COLORS } from "../styles/colors";
import styles from "../styles/Home.module.css";
import Header from "../components/organisms/header";
import VideoLoop from "../components/atoms/video-loop";
import Presentation from "../components/organisms/presentation";
import Values from "../components/organisms/values";
import NewSchoolGrafit from "../components/atoms/newschool-grafit";
import BelieveUs from "../components/organisms/believe-us";
import AboutUs from "../components/organisms/about-us";
import Footer from "../components/organisms/footer";
import GoTop from "../components/atoms/go-top";

export default function Home() {
  return (
    <>
      <VideoLoop id="top" />
      <Presentation />
      <NewSchoolGrafit />
      <Values />
      <BelieveUs />
      <AboutUs />
      <a href="#top">
        <GoTop />
      </a>
      <Footer />
    </>
  );
}
