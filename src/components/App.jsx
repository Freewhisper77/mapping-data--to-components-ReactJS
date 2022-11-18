import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//1.Create Entry component instead of [div className="term"]
//2.Use props to replace hardcode data, then we will get 3 <Entry />
//3.Map through the emojipedia array to render Entry components
//3.1 Create a createEntry func
//3.2 emojipedia.map(createEntry) to replace write <Entry /> 3 times

function createEntry(info) {
    return (
        <Entry
            key={info.id}
            emoji={info.emoji}
            name={info.name}
            meaning={info.meaning}
        />
    );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
        <dl className="dictionary">
            {emojipedia.map(createEntry)}
            {emojipedia.map((emojiitem) => (
                <Entry
                    key={emojiitem.id}
                    emoji={emojiitem.emoji}
                    name={emojiitem.name}
                    meaning={emojiitem.meaning}
                />
            ))}
        </dl>
    </div>
  );
}

export default App;
