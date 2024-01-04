import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/SearchDiv/Search";
import Jobs from "./Components/Jobdiv/Jobs";
import Footer from "./Components/FooterDiv/Footer";
import Value from "./Components/ValueDiv/Value";

const App = () => {
  return (
    <div className=" w-[85%] m-auto bg-white">
      <NavBar />
      <Search />
      <Jobs />
      <Value/>
      <Footer />
    </div>
  );
};

export default App;
