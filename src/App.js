import React from "react";
import { Route} from "react-router-dom";
import Home from "./pages/Home.js";
import "./App.css";

function App() {
  return (
    <main>
      <Route path="/" component={Home} />
    </main>
  );
}

export default App;
