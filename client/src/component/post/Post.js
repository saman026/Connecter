import React, { Component, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import PostForm from "./PostForm";
// import PostFeed from "./PostFeed";
import Spinner from "../layout/Spinner";
import { getPost } from "../../actions/post";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

// class Post extends Component {
//   componentDidMount() {
//     this.props.getPost();
//   }

//   render() {
//     const { post, loading } = this.props.post;
//     let postContent;
//     return loading || post === null ? (
//       (postContent = <Spinner />)
//     ) : (
//       <Fragment>
//         <PostItem post={post} showActions={false} />
//       </Fragment>
//     );
//   }
//   // const Post = ({ getPost, post: { post, loading }, match }) => {
//   //   useEffect(() => {
//   //     getPost(match.params.id);
//   //   }, [getPost]);
// }

// Post.propTypes = {
//   getPost: PropTypes.func.isRequired,
//   post: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   post: state.post,
// });

// export default connect(mapStateToProps, { getPost })(Post);

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/posts' className='btn'>
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
      {/* <CommentForm postId={post._id} /> */}
      <div className='comments'>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>

      <CommentForm postId={post._id} />
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
