import styled from "styled-components";
import { FaPlusCircle, FaCheckCircle, FaStar, FaRegStar } from 'react-icons/fa';

export function Post(props) {
  const IconDisplay = () => { 
    if(true) return <FaPlusCircle onClick={(e) => { e.stopPropagation(); console.log('bzz') }} />
  return <FaCheckCircle onClick={(e) => { e.stopPropagation(); console.log('bzz') }} />
}
  const StarDisplay = () => {
    if(true) return <FaRegStar onClick={(e) => { e.stopPropagation(); console.log('bzz') }} />
    return <FaStar onClick={(e) => { e.stopPropagation(); console.log('bzz') }} />
  }

  return(
  <Box onClick={props.handleClick}>
    <Header>
      <div>
        {props.username} 
        <IconDisplay />
      </div>
      <p>
        {props.date || '00/00/00 23:59'}
      </p>
    </Header>
    <Text >{props.text}</Text>
    <Footer >
      <StarDisplay />
      {props.info} 
    </Footer>
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
  width: 100%;
  height: 5.5vh;
  position: relative;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  background-color: red;
  border-radius: 8px 8px 0 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    border: 0;
    margin: 0;
  }

  p {
    color: lightgray;
    font-size: 20px;
  }
`

const Footer = styled(Header)`
  bottom: 0;
  justify-content: unset;
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