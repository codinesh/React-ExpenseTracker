import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
import "./../styles/App.css";
import Routes from "./Routes";

interface IHeaderData {
  title: string;
}

const Header: React.FC<IHeaderData> = props => {
  useEffect(() => {
    console.log("Header useEffect");
    return () => {
      console.log("Header useEffect cleanup ");
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="username">{props.title}</p>
      </header>

      <Routes />
    </div>
  );
};

export default Header;
