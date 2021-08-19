import React from "react";
import GameBoard from "./GameBoard";
import Header from "./Header";
import Announcement from "./Announcement"
import {GameContainer} from "./Game.styles";

const Game = () => {

    return (
        <GameContainer>
            <Header/>
            <GameBoard/>
            <Announcement/>
        </GameContainer>
    );
}

export default Game;