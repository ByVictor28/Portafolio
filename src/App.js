import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Portafolio from "./Components/Portafolio/Portafolio";
import { useContext, useState, useMemo } from "react";
import themeContext, { themes } from "./theme";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function App() {
  const [themeSlected, setThemeSlected] = useState(themes.dark);
  const { t } = useTranslation();
  const themeProvider = useMemo(
    () => ({ themeSlected, setThemeSlected }),
    [themeSlected, setThemeSlected]
  );
  const scrollEvent = (e) => {
    const target = e.target;
    console.log("Current scroll position:", target.scrollTop);
  };

  return (
    <>
      <Helmet>
        {/*
    <!-- Primary Meta Tags -->
    */}
        <title>Victor Manuel Delfin Santos ...</title>
        <meta
          name="description"
          content="I am a software engineer who is committed to delivering high-quality results. I love working with a team of talented individuals to achieve goals, and to help my fellow team members."
        />
        <meta name="title" content="Victor Manuel Delfin Santos" />
        <meta
          name="description"
          content="🧩 I am a software engineer who is committed to delivering high-quality results. I love working with a team of talented individuals to achieve goals, and to help my fellow team members.

    🧩 Always looking for an opportunity to continue growing professionally and boost my skills in web or mobile development, and if you have any new challenge or opportunity, do not hesitate to contact me."
        />

        {/*
    <!-- Open Graph / Facebook -->
    */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Victor Manuel Delfin Santos" />
        <meta
          property="og:description"
          content="🧩 I am a software engineer who is committed to delivering high-quality results. I love working with a team of talented individuals to achieve goals, and to help my fellow team members.

    🧩 Always looking for an opportunity to continue growing professionally and boost my skills in web or mobile development, and if you have any new challenge or opportunity, do not hesitate to contact me."
        />

        {/*
    <!-- Twitter -->
    */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Victor Manuel Delfin Santos" />
        <meta
          property="twitter:description"
          content="🧩 I am a software engineer who is committed to delivering high-quality results. I love working with a team of talented individuals to achieve goals, and to help my fellow team members.

    🧩 Always looking for an opportunity to continue growing professionally and boost my skills in web or mobile development, and if you have any new challenge or opportunity, do not hesitate to contact me."
        />
      </Helmet>
      <themeContext.Provider value={themeProvider}>
        <div
          style={{
            color: themeSlected.color,
            background: themeSlected.background,
          }}
          onScroll={(e) => scrollEvent(e)}
        >
          {/* {console.log(themeSlected)} */}
          <Navbar />
          <Hero />
          <div className="container">
            <About />
            <Portafolio />
            <Contact />
          </div>
          <footer>
            <p>Copyright © 2021. Victor Manuel Delfin Santos</p>
            <p>{t(`copyright`)}</p>
          </footer>
        </div>
      </themeContext.Provider>
    </>
  );
}

export default App;
