import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 80vh;
  padding-top: 10vh;
  flex-grow: 1;
  /* background-color: #333333; */
  justify-content: center;
  margin: 0 auto;
  color: white;
`

export const Header = styled.div`
  display: flex;
  width: 100vw;
  height: 8vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #70b1e9;
  font-size: 30px;
  box-shadow: 0px 2px 3px 2px #66666650;
  z-index: 1000;
  justify-content: space-between;
  
  div {
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  :nth-child(2) {
    flex-direction: column;
  }
`

export const NewEntry = styled.div`
  position: fixed;
  bottom: 3.25vw;
  right: 2.25vh;
  font-size: 56px;
  color: #70b1e9;
`