import Head from "next/head";
import { COLORS } from "../styles/colors";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Loading from "../components/organisms/loading";

export default function HOME() {
  const router = useRouter();

  const goTo = (route) => {
    router.push(route);
  };

  const routes = [
    { name: "INÍCIO", path: "/inicio" },
    { name: "HISTORIA", path: "/historia" },
    { name: "FAÇA PARTE", path: "/faca-parte" },
    { name: "DOAR", path: "/doar" },
    { name: "NEW SCHOOL", path: "/newschool" },
    { name: "CONHEÇA O APP", path: "/conheca-o-app" },
  ];

  const file = routes.map((route, key) => (
    <h1
      key={key}
      className={styles.title}
      onClick={() => goTo(route.path)}
    >
      {route.name}
    </h1>
  ));

  return <>
  <Loading />
  <div className={styles.container}>{file}</div>
  </>
}
