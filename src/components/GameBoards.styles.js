import styled from "styled-components";

export const SquareContainer = styled.div`
  display: block;
  width: 13%;
  margin: 3rem auto;
  
  .toe-row {
    display: flex;
    justify-content: center;
  }
  
  .square {
    background-color: transparent;
    border: 1px black solid;
    height: 50px;
    flex: 1 1 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      cursor: pointer;
    }
  }
`;