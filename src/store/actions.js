export const ActionTypes = {
    setBoardSize: '[BOARD] Update board.',
    setActivePlayer: '[PLAYER] Set Who is active.',
    setPlayerName: '[PLAYER] Set Player Name.',
    markCell: '[BOARD] Mark Board Cell.',
    declareWinner: '[PLAYER] Declare Winner.',
    setDraw: '[BOARD] The Game Is A Draw.',
    increaseTurnsCount: '[GAME] Increase Turns count.',
};

export const setBoardSize = (size) => ({type: ActionTypes.setBoardSize, payload: size});
export const setPlayerName = (players) => ({type: ActionTypes.setPlayerName, payload: players});
export const setActivePlayer = (symbol) => ({type: ActionTypes.setActivePlayer, payload: symbol});
export const markCell = (attributes) => ({type: ActionTypes.markCell, payload: attributes});
export const declareWinner = (symbol) => ({type: ActionTypes.markCell, payload: symbol});
export const setDraw = (bool) => ({type: ActionTypes.markCell, payload: bool});
export const increaseTurnsCount = () => ({type: ActionTypes.increaseTurnsCount, payload: null});
