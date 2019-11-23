import React from "react";
import { Comment, Avatar, Input, Button, Icon } from "antd";
import moment from "moment";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const { TextArea } = Input;

const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </Comment>
);
export default class DetailComment extends React.Component {
  render() {
    return (
      <div className="comment">
        <TextArea rows={4} />
        <Button type="primary" icon="message" style={{
            marginTop:10
        }} size="default">
          Gửi đánh giá
        </Button>
        <div className="comment-item">
          <ExampleComment />
        </div>
        <div className="comment-item">
          <ExampleComment />
        </div>
        <div className="comment-item">
          <ExampleComment />
        </div>
        <div className="comment-item">
          <ExampleComment />
        </div>
        <div className="comment-item">
          <ExampleComment />
        </div>
      </div>
    );
  }
}
