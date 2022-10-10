import React from "react";
import MapElement from "./MapElement.js";

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overlay: false,
    };
  }

  render() {
    const Render = () => {
      if (!this.state.overlay)
        return (
          <MapElement
            starsCount={this.props.stars}
            liked={this.props.liked}
            handleClick={this.props.handleClick}
            {...this.props}
          />
        );
      return (
        <PostElement
          starsCount={this.props.stars}
          liked={this.props.liked}
          handleClickStar={this.props.handleClickStar}
          handleClick={this.props.handleClick}
          {...this.props}
        />
      );
    };
    return <Render />;
  }
}
