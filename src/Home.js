import Navbar from "./Navbar";
import Header from "./Header";
import Dashboard from "./Dashboard";
import CourseList from "./coursesList";
import Footer from "./footer";
import Featured from "./featured";
import Login from "./login";
const Home = () => {
  return (
    <>
      <div className="homePage">
        <Navbar />
        <Header />
        <Featured />
        <CourseList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
