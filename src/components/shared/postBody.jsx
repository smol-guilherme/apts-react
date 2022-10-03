import styled from "styled-components";
import { FaPlusCircle, FaCheckCircle, FaStar, FaRegStar } from 'react-icons/fa';

export function Post(props) {
  const IconDisplay = () => { 
    if(props.follows) return <FaPlusCircle onClick={(e) => { e.stopPropagation(); console.log('bzz') }} />
  return <FaCheckCircle onClick={(e) => { e.stopPropagation(); console.log('bzz') }} />
}
  const StarDisplay = () => {
    if(props.starred) return <FaRegStar onClick={(e) => { e.stopPropagation(); console.log('bzz') }} />
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
      <span>
        <StarDisplay />
        {props.info} 
      </span>
      <p>
        {props.location || 'Ostrich Cafe'}
      </p>
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
  background-color: #EDEDED;
  color: #454545;
  line-height: 30px;
  font-size: 24px;
  box-shadow: 2px 2px 3px 1px #66666670;

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
  background-color: #a9ceee;
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
    color: #FAFAFA;
    font-size: 20px;
  }

  span {
    font-size: 22px;
    color: #eff555;
  }
`

const Footer = styled(Header)`
  bottom: 0;
  border-radius: 0 0 8px 8px;
  background-color: #a9ceee;
`

const Text = styled.p`
  display: flex;
  word-spacing: 2px;
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: none;
`