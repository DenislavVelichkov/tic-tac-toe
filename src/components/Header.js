import React, {useContext, useEffect, useRef} from "react";
import {StoreContext} from "../store/Store";
import {setActivePlayer, setBoardSize, setPlayerName} from "../store/actions";
import {HeaderContainer} from "./Header.styles";

const Header = () => {
    const {state, dispatch} = useContext(StoreContext);
    const player1Ref = useRef();
    const player2Ref = useRef();
    const boardSizeRef = useRef();
    const boardSize = 3;

    const startGame = () => {
        const players = {
            player1: {name: player1Ref.current?.value, defineAs: "X"},
            player2: {name: player2Ref.current?.value, defineAs: "O"}
        }

        dispatch(setPlayerName(players))

        dispatch(setBoardSize(boardSize));

        dispatch(setActivePlayer("X"))
    }

    return (
        <HeaderContainer>
            <label>
                Pick grid size
                <input ref={boardSizeRef} type="number" disabled={true}/>
            </label>
            <label>
                Player 1 Name:
                <input ref={player1Ref} type="text"/>
            </label>
            <label>
                Player 2 Name:
                <input ref={player2Ref} type="text"/>
            </label>
            {!state.isDraw && (<button className={"game-button"} onClick={startGame}>Start</button>)}
            {state.isDraw && (<button className={"game-button"} onClick={startGame}>Restart</button>)}
        </HeaderContainer>
    );
}

export default Header;