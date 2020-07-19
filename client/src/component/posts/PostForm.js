import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addPost } from "../../actions/post";
// import e from "express";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  return (
    <div class='post-form'>
      <div class='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form
        class='form my-1'
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <input type='submit' class='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
// class PostForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//       errors: {},
//     };

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   componentWillReceiveProps(newProps) {
//     if (newProps.errors) {
//       this.setState({ errors: newProps.errors });
//     }
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const { user } = this.props.auth;

//     const newPost = {
//       text: this.state.text,
//       name: user.name,
//       avatar: user.avatar,
//     };

//     this.props.addPost(newPost);
//     this.setState({ text: "" });
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   render() {
//     const { errors } = this.state;

//     return (
//       <div className='post-form mb-3'>
//         <div className='card card-info text-center'>
//           <div className='card-header bg-info text-white text-center'>
//             Say Somthing...
//           </div>
//           <div className='card-body col-12'>
//             <form onSubmit={this.onSubmit}>
//               <div className='form-group'>
//                 <TextAreaFieldGroup
//                   placeholder='Create a post'
//                   name='text'
//                   value={this.state.text}
//                   onChange={this.onChange}
//                   error={errors.text}
//                 />
//               </div>
//               <button type='submit' className='btn btn-dark '>
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// PostForm.propTypes = {
//   addPost: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
// });

// export default connect(mapStateToProps, { addPost })(PostForm);
