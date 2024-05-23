import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";
import Error from "./error";
import Login from "./login";
import React from "react";
import Register from "./Register";
import Cart from "./cart";
import CoursePreview from "./coursePreview";
function App() {
  return (
    <div className="App">
      {/* <MyCourses /> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course-preview" element={<CoursePreview />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
