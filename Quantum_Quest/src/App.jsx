import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/Home";
import HeroContent from "./components/HeroContent";
import CourseJumbotron from "./components/CourseJumbotron";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Home>
        <HeroContent></HeroContent>
        <CourseJumbotron>
          <Card></Card>
        </CourseJumbotron>
      </Home>
    </>
  );
};

export default App;
