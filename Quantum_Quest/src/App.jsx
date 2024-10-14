import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/Home";
import HeroContent from "./components/HeroContent";
import CourseJumbotron from "./components/CourseJumbotron";
import Card from "./components/Card";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <HeroContent></HeroContent>
              <CourseJumbotron>
                <Card></Card>
              </CourseJumbotron>
            </Home>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </>
  );
};

export default App;
