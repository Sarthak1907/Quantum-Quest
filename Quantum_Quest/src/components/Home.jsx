import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <div className="app_container">
        <Sidebar></Sidebar>
        <div className="content">
          <Header></Header>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Home;
