import React, {createContext, useMemo, useReducer} from "react";
import {ActionTypes} from "./actions";

export const StoreContext = createContext({});

const initialState = {
    player1: {name: "", defineAs: ""},
    player2: {name: "", defineAs: ""},
    boardSize: 0,
    board: Array(3).fill().map(()=>Array(3).fill()),
    activePlayer: "",
    winner: "",
    isDraw: false,
    turns: 1,
}

function storeReducer(state, action) {
    const handler = actionMap[action.type];
    return handler ? handler(state, action.payload) : state;
}

function init() {
    return initialState;
}

const actionMap = {
    [ActionTypes.setBoardSize]: (state, size) => ({...state, boardSize: size}),
    [ActionTypes.setPlayerName]: (state, players) => ({...state, player1: players.player1, player2: players.player2}),
    [ActionTypes.setActivePlayer]: (state, symbol) => ({...state, activePlayer: symbol}),
    [ActionTypes.markCell]: (state, board) => ({...state, board}),
    [ActionTypes.declareWinner]: (state, symbol) => ({...state, winner: symbol}),
    [ActionTypes.setDraw]: (state, bool) => ({...state, isDraw: bool}),
    [ActionTypes.increaseTurnsCount]: (state) => ({...state, turns: state.turns + 1}),
}


const Store = ({children}) => {
    const [state, dispatch] = useReducer(storeReducer, initialState, init);

    const store = useMemo(() =>
            ({
                state,
                dispatch: (action) => dispatch(action),
            })
        , [state, dispatch])

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export default Store;