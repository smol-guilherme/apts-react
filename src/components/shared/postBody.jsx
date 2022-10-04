import styled from "styled-components";
import { FaPlusCircle, FaCheckCircle, FaStar, FaRegStar } from 'react-icons/fa';
import { formatDate } from "../../utils/dataFormatUtils.js";

export function FooterElement(props) {
  const StarDisplay = () => {
    if(props.likedBy.includes(props.author.authorId)) return <FaStar onClick={(e) => { e.stopPropagation(); console.log('bzz') }} />
    return <FaRegStar onClick={(e) => { e.stopPropagation(); console.log('bzz') }} />
  }

  return(
    <Footer >
      <span>
        <StarDisplay />
        {props.stars} 
      </span>
      <p>
        {props.location.locationName}
      </p>
    </Footer>
  )
}

export function PostElement(props) {
  // console.log(props);
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
    <FooterElement {...props} />
  </Box>);
}

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 85vw;
  border-radius: 8px;
  background-color: #EDEDED;
  color: #454545;
  line-height: 30px;
  font-size: 24px;
  margin-bottom: 2.25vh;
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
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  background-color: #a9ceee;
  border-radius: 8px 8px 0 0;
  z-index: 1;

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