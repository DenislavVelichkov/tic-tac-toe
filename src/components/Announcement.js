import React, {useContext, useEffect, useState} from "react";
import {StoreContext} from "../store/Store";

const Announcement = () => {
    const {state} = useContext(StoreContext);
    const [localState, setLocalState] = useState("")


    useEffect(() => {
       let winner = state.winner === state.player1.defineAs ? state.player1.name : state.player2.name;
       setLocalState(winner);
    }, [state.winner])
    const renderWinner = (symbol) => {
        return <div className={"announcement"}>The Winner is: {symbol}!</div>
    }
    return (
        <>
            {localState !== "" && renderWinner(localState)}
            {state.isDraw && (<>
                <div className={"announcement"}>Draw!</div>
                <button>Click to Reset The Game</button>
            </>)}
        </>
    );
}

export default Announcement;