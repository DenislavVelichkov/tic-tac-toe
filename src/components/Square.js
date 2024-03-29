import React, {useContext, useState} from "react";
import {StoreContext} from "../store/Store";
import {declareWinner, increaseTurnsCount, markCell, setActivePlayer, setDraw} from "../store/actions";

const Square = ({coordinates}) => {
    const [state, setState] = useState({symbol: "", coordinates})
    const context = useContext(StoreContext);

    const markSquare = () => {

        switch (context.state.activePlayer) {
            case "X":
                let updatedBoardX = context.state?.board;
                if (updatedBoardX) updatedBoardX[state.coordinates.row][state.coordinates.col] = "X";

                setState({symbol: "X"})
                context.dispatch(markCell(updatedBoardX))
                checkWinCondition(coordinates, "X")
                context.dispatch(setActivePlayer("O"))
                break;
            case "O":
                let updatedBoardO = context.state?.board;
                if (updatedBoardO) updatedBoardO[state.coordinates.row][state.coordinates.col] = "O";

                setState({symbol: "O"})
                context.dispatch(markCell(updatedBoardO))
                checkWinCondition(coordinates, "O")
                context.dispatch(setActivePlayer("X"))
                break;
            default:
                break;
        }

        context.dispatch(increaseTurnsCount());
        if (context.state.turns === 9) context.dispatch(setDraw(true))
    };

    const checkWinCondition = (coordinates, symbol) => {
        const board = context.state.board;

        checkRows(board, symbol);
        checkColumns(board, symbol);
        checkDiagonals(board, symbol);
    }

    const checkRows = (board, symbol) => {

        for (let row = 0; row < board.length; row++) {
            let symbolCounter = 0;
            for (let col = 0; col < board[row].length; col++) {
                if (board[row][col] === symbol){
                    symbolCounter++;
                }
                if (symbolCounter === board.length) {
                    return context.dispatch(declareWinner(symbol));
                }
            }
        }
    }

    const checkColumns = (board, symbol) => {
        for (let col = 0; col < board.length; col++) {
            let symbolCounter = 0;
            for (let row = 0; row < board[col].length; row++) {
                if (board[row][col] === symbol) {
                    symbolCounter++;
                }
                if (symbolCounter === board.length) {
                    return context.dispatch(declareWinner(symbol));
                }
            }
        }
    }

    const checkDiagonals = (board, symbol) => {
        let symbolCounterDiagA = 0;
        let symbolCounterDiagB = 0;

        for (let row = 0; row < board.length; row++) {
            if (board[row][row] === symbol) symbolCounterDiagA++;
            if (symbolCounterDiagA === board.length) {
                return context.dispatch(declareWinner(symbol));
            }

            if (board[row][board.length - row - 1] === symbol) symbolCounterDiagB++;
            if (symbolCounterDiagB === board.length) {
                return context.dispatch(declareWinner(symbol));
            }
        }
    }

    return <div className={"square"} onClick={markSquare}>{state.symbol}</div>;
}

export default Square;