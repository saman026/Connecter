// import React, { useEffect, Fragment, Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import Spinner from "../layout/Spinner";
// // import PostItem from "./PostItem";
// import { getPosts } from "../../actions/post";

// // const Posts = ({ getPosts, post: { posts, loading } }) => {
// //   useEffect(() => {
// //     getPosts();
// //   }, [getPosts]);

// class Posts extends Component {
//   componentDidMount() {
//     this.props.getPosts();
//   }

//   render() {
//     const { posts, loading } = this.props.post;
//     let postContent;

//     if (posts === null || loading) {
//       postContent = <Spinner />;
//     } else {
//       postContent = <PostFeed posts={posts} />;
//     }

//     return (
//       <div className='feed'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-md-12'>
//               <PostForm />
//               {postContent}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// Posts.propTypes = {
//   getPosts: PropTypes.func.isRequired,
//   post: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   post: state.post,
// });

// export default connect(mapStateToProps, { getPosts })(Posts);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import Spinner from "../layout/Spinner";
import { getPosts } from "../../actions/post";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className='feed'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              {/* <PostForm /> */}
              {postContent}
              <PostForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
