import React, { useState } from "react";
import IndividualProfile from "./Individual Profile";
import ProfilePage from "./ProfilePage";

export default function HomePage() {
  return (
    <div>
      <div>
      <p>This is the HOOOOME Page</p>
      <p>This is your mother</p>
    </div>
    <div>
        <IndividualProfile></IndividualProfile>
        <IndividualProfile></IndividualProfile>
        <IndividualProfile></IndividualProfile>
      </div>
    </div>
  )
      
}
