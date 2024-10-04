import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
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

export default App;
