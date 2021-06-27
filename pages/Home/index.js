import AppLyout from "@c/AppLyout";
import Avatar from "@c/Avatar";
import Devit from "@c/Devit";
import { useState, useEffect } from "react";
/* import styles from '../Home/styles.module.css' */

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline);
  }, []);
  return (
    <>
      <AppLyout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map((devit) => {
            return <Devit key={devit.id} {...devit} />;
          })}
        </section>
        <nav></nav>
      </AppLyout>
      <style jsx>{`
        header {
          align-items: center;
          border-bottom: 1px solid #ccc;
          height: 49px;
          position: sticky;
          top: 0;
          width: 100%;
        }

        section {
          padding-top: 60px;
        }

        h2 {
          font-weight: 800;
        }

        nav {
          border-top: 1px solid #ccc;
          bottom: 0;
          height: 49px;
          position: sticky;
          width: 100%;
        }
      `}</style>
    </>
  );
}
