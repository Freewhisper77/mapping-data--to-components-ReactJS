import React from "react";
import Entry from "./Entry";

//1.Create Entry component instead of [div className="term"]
//2.Use props to replace hardcode data, then we will get 3 <Entry />
//3.Map through the emojipedia array to render Entry components
//3.1 Create a createEntry func
//3.2 emojipedia.map(createEntry) to replace write <Entry /> 3 times

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
        <dl className="dictionary">
            <Entry />
            <Entry />
            <Entry />
        </dl>
    </div>
  );
}

export default App;
