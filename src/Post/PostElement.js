import React from "react";
import { FaPlusCircle, FaCheckCircle, FaStar, FaRegStar } from "react-icons/fa";
import { formatDate } from "../utils/dataFormatUtils.js";
import { Box, Header, Text, Footer } from "../components/shared/postBody.jsx";

export class FooterElement extends React.Component {
  render() {
    const StarDisplay = () => {
      if (this.props.liked)
        return (
          <FaStar
            onClick={(e) => this.props.handleClickStar(e, this.props.id)}
          />
        );
      return (
        <FaRegStar
          onClick={(e) => this.props.handleClickStar(e, this.props.id)}
        />
      );
    };

    return (
      <Footer>
        <span>
          <StarDisplay handleClickStar={this.props.handleClickStar} />
          {this.props.starsCount}
        </span>
        <p>{this.props.location.locationName}</p>
      </Footer>
    );
  }
}

export default class PostElement extends React.Component {
  render() {
    const IconDisplay = () => {
      if (this.props.follows)
        return (
          <FaPlusCircle
            onClick={(e) => {
              e.stopPropagation();
              console.log("bzz");
            }}
          />
        );
      return (
        <FaCheckCircle
          onClick={(e) => {
            e.stopPropagation();
            console.log("bzz");
          }}
        />
      );
    };
    const date = formatDate(this.props.date);
    return (
      <Box onClick={this.props.handleClick}>
        <Header>
          <div>
            {this.props.author.username}
            <IconDisplay />
          </div>
          <p>{date}</p>
        </Header>
        <Text>{this.props.description}</Text>
        <FooterElement
          {...this.props}
          starsCount={this.props.starsCount}
          handleClickStar={this.props.handleClickStar}
        />
      </Box>
    );
  }
}
