import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

export default function Root(props) {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <a className="blog-logo" href="/">
          <img
            style={{ maxWidth: "40px" }}
            src="https://single-spa.js.org/img/logo-white-bgblue.svg"
            alt="LogRocket Blog"
          />{" "}
          React + single-spa
        </a>
        {/* <Router> */}
        <nav className="nav nav-masthead justify-content-center">
          <a
            className={`nav-link ${location.pathname === "/" && "active"}`}
            href="/"
          >
            Home
          </a>
          <a
            className={`nav-link ${location.pathname === "/about" && "active"}`}
            href="/about"
          >
            About Us
          </a>
          <a
            className={`nav-link ${
              location.pathname === "/contact" && "active"
            }`}
            href="/contact"
          >
            Contact
          </a>
          {/* <Link to="/" className={`nav-link ${location.pathname === "/" && "active"}`}
            href="/">Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === "/about" && "active"}`}
            href="/about">About</Link>
          <Link to="/contact"  className={`nav-link ${
              location.pathname === "/contact" && "active"
            }`}>Contact</Link> */}
        </nav>
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
        {/* </Router> */}
      </div>
    </header>
  );
}