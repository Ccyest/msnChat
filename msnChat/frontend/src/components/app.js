import React, { Component } from "react";
import HomePage from "./Homepage";
import ProfilePage from "./ProfilePage";
import SignUpPage from "./SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    );
  }
}
