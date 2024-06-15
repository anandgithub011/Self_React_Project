// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import AppName from "./component/AppName";
import AppTitle from "./component/AppTitle";
import AppTime from "./component/AppTime";

function App() {
  return (
    <center>
      <div className="container">
        <AppName></AppName>
        <AppTitle />
        <AppTime />
      </div>
    </center>
  );
}

export default App;
