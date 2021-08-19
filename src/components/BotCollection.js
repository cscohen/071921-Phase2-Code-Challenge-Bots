import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots}) {
  return (
    <div className="ui four column grid">
      <div className="row">
  
        Collection of all bots
        <BotCard bot/>
      </div>
    </div>
  );
}

export default BotCollection;
