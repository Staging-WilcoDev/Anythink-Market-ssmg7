import { React, useState } from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { ADD_COMMENT } from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (payload) => dispatch({ type: ADD_COMMENT, payload }),
});

const CommentInput = (props) => {
  // constructor() {
  // super();
  // this.state = {
  //   body: "",
  // };

  // this.setBody = (ev) => {
  //   this.setState({ body: ev.target.value });
  // };

  // this.createComment = (ev) => {
  //   ev.preventDefault();
  //   const payload = agent.Comments.create(this.props.slug, {
  //     body: this.state.body,
  //   });
  //   this.setState({ body: "" });
  //   this.props.onSubmit(payload);
  // };
  // }

  const [body, setBody] = useState("");

  const createComment = (ev) => {
    ev.preventDefault();
    const payload = agent.Comments.create(props.slug, {
      body: body,
    });
    setBody("");
    props.onSubmit(payload);
  };

  return (
    <form className="card comment-form m-2" onSubmit={createComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          value={body}
          onChange={(ev) => setBody(ev.target.value)}
          rows="3"
        ></textarea>
      </div>
      <div className="card-footer">
        <img
          src={props.currentUser.image}
          className="user-pic mr-2"
          alt={props.currentUser.username}
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
