import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import "../styles/globals.css";
import "styles/notion.css";

function MyApp({ Component, pageProps }) {
  const [shouldSeeOutdatedAlert, setShouldSeeOutdatedAlert] = useState(false);

  const closeAlert = () => {
    localStorage.setItem("seen-outdated-alert", "true");
    setShouldSeeOutdatedAlert(false);
  };

  // setup page-change indicators
  const router = useRouter();
  useEffect(() => {
    const start = () => NProgress.start();
    const done = () => NProgress.done();

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", done);
    router.events.on("routeChangeError", done);
  }, []);

  useEffect(() => {
    const seenOutdatedAlert = localStorage.getItem("seen-outdated-alert");
    if (seenOutdatedAlert === null) {
      // not yet seen the outdated alert. show it
      setShouldSeeOutdatedAlert(true);
    }
  }, []);

  return (
    <>
      {shouldSeeOutdatedAlert && <OutdatedAlert onClose={closeAlert} />}
      <Component {...pageProps} />
    </>
  );
}

function OutdatedAlert({ onClose }) {
  return (
    <>
      {/* <Head>
        <link rel="stylesheet" href="nprogress.css" />
      </Head> */}
      <div className="bg-red-500 text-black text-center p-2">
        <span>
          Sorry, the information here is{" "}
          <b>
            outdated<i>-ish</i>
          </b>{" "}
          😬 but I'm fixing that up 😪.
        </span>
        <span className="p-2" />
        <span
          className="inline-flex items-center gap-1 text-white px-2 border rounded font-extrabold cursor-pointer hover:shadow-lg hover:bg-white hover:text-black"
          onClick={onClose}
        >
          X
        </span>
      </div>
    </>
  );
}

export default MyApp;
