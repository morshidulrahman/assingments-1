import "./App.css";
import Header from "./component/Header";
import CourseCards from "./component/CourseCards.jsx";
import Navbar from "./component/Navbar.jsx";
import Blog from "./component/Blog.jsx";
import Provide from "./component/Provide.jsx";
import Footer from "./component/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <CourseCards />
      <Provide />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
