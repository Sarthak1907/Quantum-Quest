import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Home = ({ children }) => {
  return (
    <>
      <div className="app_container">
        <Sidebar></Sidebar>
        <div className="content">
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Home;
