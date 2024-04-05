import BreakingNews from "./BreakingNews";
import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import Navbar from "./Navbar";
import RightSideNav from "./RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> 
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">
          <h1 className="text-3xl">News Coming Soon</h1>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;