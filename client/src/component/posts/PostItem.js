import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, user, text, name, likes, comments, avatar, date },
  showActions,
}) => (
  <div class='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${user}`}>
        <img class='round-img' src={avatar} alt='' />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p class='my-1'>{text}</p>
      <p class='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>{" "}
        {/* Posted on <Moment format='YYYY/MM/DD'>{post.date} </Moment>{" "} */}
      </p>

      {showActions && (
        <Fragment>
          <button
            onClick={(e) => addLike(_id)}
            type='button'
            class='btn btn-light'
          >
            <i class='fas fa-thumbs-up'></i>
            <span> {likes.length > 0 && <span> {likes.length}</span>}</span>
          </button>
          <button
            onClick={(e) => removeLike(_id)}
            type='button'
            class='btn btn-light'
          >
            <i class='fas fa-thumbs-down'></i>
          </button>
          <Link to={`/posts/${_id}`} class='btn btn-primary'>
            Discussion{" "}
            {comments.length > 0 && (
              <span class='comment-count'>{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={(e) => deletePost(_id)}
              type='button'
              class='btn btn-danger'
            >
              <i class='fas fa-times'></i>
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);
PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import classnames from "classnames";
// import { Link } from "react-router-dom";
// import { deletePost, addLike, removeLike } from "../../actions/post";

// class PostItem extends Component {
//   onDeleteClick(id) {
//     this.props.deletePost(id);
//   }

//   onLikeClick(id) {
//     this.props.addLike(id);
//   }

//   onUnlikeClick(id) {
//     this.props.removeLike(id);
//   }

//   findUserLike(likes) {
//     const { auth } = this.props;
//     if (likes.filter((like) => like.user === auth.user.id).length > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   render() {
//     const { post, auth, showActions } = this.props;

//     return (
//       <div className='post bg-dark p-1 my-1'>
//         {/* <div className='row'> */}
//         <div>
//           <a href='profile.html'>
//             <img className='rounded-img' src={post.avatar} alt='' />
//             <h4>{post.name}</h4>
//           </a>
//           {/* <br /> */}
//           {/* <p className='text-center'>{post.name}</p> */}
//         </div>
//         <div className='col-md-10'>
//           <p className='my-1'>{post.text}</p>
//           <p className='post-date'>
//             Posted on <Moment format='YYYY/MM/DD'>{post.date}</Moment>{" "}
//           </p>
//           {showActions ? (
//             <span>
//               <button
//                 onClick={this.onLikeClick.bind(this, post._id)}
//                 type='button'
//                 className='btn btn-light mr-1'
//               >
//                 <i
//                   className={classnames("fas fa-thumbs-up", {
//                     "text-info": this.findUserLike(post.likes),
//                   })}
//                 />

//                 {post.likes.length > 0 && (
//                   <span className='badge badge-light'>{post.likes.length}</span>
//                 )}
//               </button>
//               <button
//                 onClick={this.onUnlikeClick.bind(this, post._id)}
//                 type='button'
//                 className='btn btn-light mr-1'
//               >
//                 <i className='text-secondary fas fa-thumbs-down' />
//               </button>
//               <Link to={`/post/${post._id}`} className='btn btn-info mr-1'>
//                 Comments{" "}
//                 {post.comments.length > 0 && (
//                   <span className='comment-count'> {post.comments.length}</span>
//                 )}
//               </Link>
//               {post.user === auth.user._id ? (
//                 <button
//                   onClick={this.onDeleteClick.bind(this, post._id)}
//                   type='button'
//                   className='btn btn-danger mr-1'
//                 >
//                   <i className='fas fa-times' />
//                 </button>
//               ) : null}
//             </span>
//           ) : null}
//         </div>
//       </div>
//       // </div>
//     );
//   }
// }

// PostItem.defaultProps = {
//   showActions: true,
// };

// PostItem.propTypes = {
//   deletePost: PropTypes.func.isRequired,
//   addLike: PropTypes.func.isRequired,
//   removeLike: PropTypes.func.isRequired,
//   post: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
//   PostItem
// );
