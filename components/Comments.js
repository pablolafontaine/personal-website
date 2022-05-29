import React, { Component } from "react";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
    this.theme = props.theme;
  }

  componentDidMount() {
    let comment = document.createElement("script");
    comment.setAttribute("src", "https://utteranc.es/client.js");
    comment.setAttribute("crossorigin", "anonymous");
    comment.setAttribute("async", true);
    comment.setAttribute("repo", "pablolafontaine/personal-website");
    comment.setAttribute("issue-term", "url");
    comment.setAttribute("theme", this.theme);
    this.commentBox.current.appendChild(comment);
  }
  render() {
    return (
      <div id="comments">
        <div ref={this.commentBox} />
      </div>
    );
  }
}
