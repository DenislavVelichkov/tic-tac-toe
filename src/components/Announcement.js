import React, {useContext, useEffect} from "react";
import {StoreContext} from "../store/Store";

const Announcement = () => {
    const {state} = useContext(StoreContext);
    let winner;

    useEffect(() => {
        winner = state.winner === state.player1.defineAs ? state.player1 : state.player2;
    }, [state])

    return (
        <>
            {state.winner?.name && !state.isDraw && <div className={"announcement"}>The Winner is: {winner.name}!</div>}
            {state.isDraw && (<>
                <div className={"announcement"}>Draw!</div>
                <button>Click to Reset The Game</button>
            </>)}
        </>
    );
}

export default Announcement;