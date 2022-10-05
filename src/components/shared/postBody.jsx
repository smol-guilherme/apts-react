import styled from "styled-components";
import { FaPlusCircle, FaCheckCircle, FaStar, FaRegStar } from 'react-icons/fa';
import { formatDate } from "../../utils/dataFormatUtils.js";

export function FooterElement(props) {
  const StarDisplay = () => {
    if(props.liked) return <FaStar onClick={(e) => props.handleClickStar(e, props.id) } />
    return <FaRegStar onClick={(e) => props.handleClickStar(e, props.id) } />
  }

  return(
    <Footer >
      <span>
        <StarDisplay handleClickStar={props.handleClickStar} />
        {props.starsCount} 
      </span>
      <p>
        {props.location.locationName}
      </p>
    </Footer>
  )
}

export function PostElement(props) {
  const IconDisplay = () => { 
    if(props.follows) return <FaPlusCircle onClick={(e) => { e.stopPropagation(); console.log('bzz') }} />
  return <FaCheckCircle onClick={(e) => { e.stopPropagation(); console.log('bzz') }} />
}
  const date = formatDate(props.date);
  return(
  <Box onClick={props.handleClick}>
    <Header>
      <div>
        {props.author.username} 
        <IconDisplay />
      </div>
      <p>
        {date}
      </p>
    </Header>
    <Text >{props.description}</Text>
    <FooterElement {...props} starsCount={props.starsCount} handleClickStar={props.handleClickStar}  />
  </Box>);
}

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 32vh;
  max-height: 32vh;
  width: 85vw;
  border-radius: 8px;
  background-color: #EDEDED;
  color: #454545;
  line-height: 30px;
  font-size: 2.8vh;
  margin-bottom: 2.25vh;
  box-shadow: 2px 2px 3px 1px #66666670;

  div {
    padding: 3px 6px;
    box-sizing: border-box;
  }
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 5.5vh;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  background-color: #a9ceee;
  border-radius: 8px 8px 0 0;
  z-index: 1;
  font-size: 2.35vh;

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
  }

  span {
    font-size: 2.75vh;
    color: #eff555;
  }
`

const Footer = styled(Header)`
  bottom: 0;
  border-radius: 0 0 8px 8px;
  background-color: #a9ceee;

  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`

const Text = styled.p`
  display: flex;
  word-spacing: 2px;
  flex-grow: 1;
  padding: 3px 6px;
  overflow-y: scroll;
  overflow-x: none;
`