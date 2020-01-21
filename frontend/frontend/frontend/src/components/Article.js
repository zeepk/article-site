import React, { Component } from "react";
import "./styles/Article.css";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "placeholder",
      created_at: null,
      message: "placeholder"
    };
  }

  render() {
    // this.setState({
    //   title: this.props.title,
    //   created_at: this.props.created_at,
    //   message: this.props.message
    // });
    const dateTime =
      this.props.content.created_at.substring(5, 7) +
      "-" +
      this.props.content.created_at.substring(8, 10) +
      "-" +
      this.props.content.created_at.substring(0, 4);

    return (
      <div className="articleContainer">
        <h3>{this.props.content.title}</h3>
        <p>{dateTime}</p>
        <p>{this.props.content.message}</p>
      </div>
    );
  }
}

export default Article;
