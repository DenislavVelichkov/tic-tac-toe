import React, {useContext} from "react";
import Square from "./Square";
import {StoreContext} from "../store/Store";
import {SquareContainer} from "./GameBoards.styles";

const GameBoard = () => {
    const {state} = useContext(StoreContext);
    const squares = [];

    const renderTheBoard = () => {

        if (state.boardSize >= 3) {
            for (let i = 0; i < state.boardSize; i++) {
                squares[i] = new Array(state.boardSize);

                for (let j = 0; j < state.boardSize; j++) {
                    squares[i][j] = {row: i, col: j};
                }
            }
        }

        return (
            <>
                <div className={"toe-row"}>{renderSquares(0)}</div>
                <div className={"toe-row"}>{renderSquares(1)}</div>
                <div className={"toe-row"}>{renderSquares(2)}</div>
            </>
        )

    };

    const renderSquares = (row) => {
        if (squares.length > 0) return squares[row].map((c, index) => <Square coordinates={c} key={index}/>);
    }

    return (<SquareContainer>{renderTheBoard()}</SquareContainer>)
}

export default GameBoard;