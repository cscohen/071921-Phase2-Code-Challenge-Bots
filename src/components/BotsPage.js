import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotCard from "./BotCard";

function BotsPage({bots}) {

console.log("test")
console.log(bots)  //start here with your code for step one
      {
        bots.map(bot => <BotCard bot={bot} key={bot.name} img={bot.avatar_url} />)
      }
  return (
    <div>  

      <YourBotArmy />
      <BotCollection/>
    </div>
  )
}

export default BotsPage;
