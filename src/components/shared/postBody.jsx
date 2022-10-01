import styled from "styled-components";

export function Post(props) {
  // console.log(props);
  return(
  <Box onClick={props.handleClick}>
    <Header >{props.username}</Header>
    <Text >{props.text}</Text>
    <Footer >{props.info}</Footer>
  </Box>);
}

const Box = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  height: 40vh;
  width: 85vw;
  border-radius: 8px;
  background-color: black;
  color: white;
  line-height: 30px;
  font-size: 24px;

  div {
    padding: 3px 6px;
    box-sizing: border-box;
  }
`

const Header = styled.div`
  display: flex;
  height: 5.5vh;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: red;
  border-radius: 8px 8px 0 0;
`

const Footer = styled(Header)`
  bottom: 0;
  border-radius: 0 0 8px 8px;
  background-color: blue;
`

const Text = styled.p`
  display: flex;
  word-spacing: 2px;
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: none;
`