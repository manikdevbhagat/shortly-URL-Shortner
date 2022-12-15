import "./App.css";
import React, { useState } from "react";
import { HeadContainer } from "./Components/Header";
import { BodyContainer } from "./Components/Body";
import { Footer } from "./Components/footer";

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
      <HeadContainer />
      <BodyContainer inputLink={inputLink} lastLink={lastLink} />
      <Footer />
    </div>
  );
}

export default App;
