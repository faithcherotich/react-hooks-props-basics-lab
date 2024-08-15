import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
// Importing the user data
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      
      {/* Pass the user data as props to the Home component */}
      <Home name={user.name} city={user.city} color={user.color} />

      {/* Pass bio, github, and linkedin to the About component */}
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
   <Links />
    </div>

  );
}

export default App;
