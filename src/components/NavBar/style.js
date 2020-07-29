import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  width: 100vw;
  height: 10vh;
  ul {
    width: 80%;
    display: flex;
    list-style: none;
    justify-content: space-around;
  }
`;
