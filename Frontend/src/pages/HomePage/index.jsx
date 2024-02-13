import React from "react";

import EntranceAnimation from "../../components/EntranceAnimation";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SplashAnimation from "../../components/SplashAnimation";
import { fetchData } from "../../firebase/firebase-utils";
import { fetchAllUsers } from "../../utils";

const HomePage = () => {
  // React.useEffect(() => {
  //   window.onbeforeunload = function () {
  //     window.scrollTo(0, 0);
  //   };
  // }, []);

  return (
    <>
      <button onClick={fetchAllUsers}>PO PO</button>
      <EntranceAnimation>
        <SectionOne />
      </EntranceAnimation>
      <SectionTwo />
      <SplashAnimation>
        <SectionThree />
      </SplashAnimation>
      <SplashAnimation>
        <SectionFour />
      </SplashAnimation>
    </>
  );
};

export default HomePage;
