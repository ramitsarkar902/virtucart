import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HeroProd from "../components/HeroProd";
import Navbar from "../components/Navbar";
import NewLaunched from "../components/NewLaunched";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div className="w-full">
      <ScrollToTop />
      <Navbar />
      <div className="w-full h-[100vh]">
        <Parallax pages={2} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={0}
            speed={2.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HeroProd />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={2}
            style={{ backgroundColor: "#fefefe" }}
          />

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <HeroProd />
          </ParallaxLayer>
        </Parallax>
      </div>
      <NewLaunched />
    </div>
  );
};

export default Home;
