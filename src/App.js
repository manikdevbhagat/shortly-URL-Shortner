import "./App.css";
import React, { useState } from "react";
import { HeadContainer } from "./Components/Header";
import { BodyContainer } from "./Components/Body";
import { Footer } from "./Components/footer";
import { About } from "./Components/about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [linkList, setLinkList] = useState(new Map());
  const [lastLink, setLastLink] = useState();
  const inputLink = (link) => {
    setLastLink(link);
    const copy = linkList;
    if (copy.has(link)) return;
    copy.set(link, link);
    setLinkList(copy);
    console.log(linkList);
  };
  return (
    <div className="App">
      <Router>
        <HeadContainer />
        <Switch>
          <Route exact path="/">
            <BodyContainer inputLink={inputLink} lastLink={lastLink} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
