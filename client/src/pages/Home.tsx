import HeroProd from "../components/HeroProd";
import Navbar from "../components/Navbar";
import NewLaunched from "../components/NewLaunched";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <HeroProd />
      <NewLaunched />
    </div>
  );
};

export default Home;
