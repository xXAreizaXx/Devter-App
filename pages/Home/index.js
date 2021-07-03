import { colors } from "styles/theme";
import { listenLatestDevits } from "firebase/client";
import { useEffect, useState } from "react";
import Create from "@c/Icons/Create";
import Devit from "components/Devit";
import Head from "next/head";
import Home from "@c/Icons/Home";
import Link from "next/link";
import Search from "@c/Icons/Search";
import useUser from "hooks/useUser";

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    let unsubscribe;
    if (user) {
      unsubscribe = listenLatestDevits(setTimeline);
    }
    return () => unsubscribe && unsubscribe();
  }, [user]);

  return (
    <>
      <Head>
        <title>Inicio | DevTer</title>
      </Head>
      <header>
        <h2>Inicio</h2>
      </header>
      <section>
        {timeline.map(
          ({ createdAt, id, userName, avatar, content, userId, img }) => (
            <Devit
              avatar={avatar}
              createdAt={createdAt}
              id={id}
              img={img}
              key={id}
              content={content}
              userName={userName}
              userId={userId}
            />
          )
        )}
      </section>
      <nav>
        <Link href="/Home">
          <a>
            <Home width={32} height={32} stroke="#09F" />
          </a>
        </Link>
        <Link href="/Search">
          <a>
            <Search width={32} height={32} stroke="#09F" />
          </a>
        </Link>
        <Link href="/Compose/tweet">
          <a>
            <Create width={32} height={32} stroke="#09F" />
          </a>
        </Link>
      </nav>

      <style jsx>{`
        header {
          align-items: center;
          background: #ffffffaa;
          backdrop-filter: blur(5px);
          border-bottom: 1px solid #eee;
          height: 49px;
          display: flex;
          position: sticky;
          top: 0;
          width: 100%;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 15px;
        }

        section {
          flex: 1;
        }

        nav {
          background: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          display: flex;
          height: 49px;
          position: sticky;
          width: 100%;
        }

        nav a {
          align-items: center;
          display: flex;
          flex: 1 1 auto;
          height: 100%;
          justify-content: center;
        }

        nav a:hover {
          background: radial-gradient(#0099ff22 15%, transparent 16%);
          background-size: 180px 180px;
          background-position: center;
        }

        nav a:hover > :global(svg) {
          stroke: ${colors.primary};
        }
      `}</style>
    </>
  );
}
