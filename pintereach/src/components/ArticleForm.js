// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { createArticle } from '../actions';

// class ArticleForm extends Component {
//   state = {
//     title: '',
//     content: '',
//     abstract: '',
//     subject: ''
//   };

//   handleInputChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleAddArticle = _ => {
//     const { title, content, abstract, subject } = this.state;
//     this.props.createArticle({ title, content, abstract, subject });
//     this.setState({ title: '', content: '', abstract: '', subject: '' });
//   };

//   render() {
//     return (
//       <Form className="Column-Layout">
//         <Label for="Title">Title</Label>
//         <Input
//           className="input"
//           value={this.state.title}
//           name="title"
//           type="text"
//           placeholder="Title"
//           onChange={this.handleInputChange}
//         />
//         <Label for="Content">Content</Label>
//         <Input
//           className="input"
//           value={this.state.content}
//           name="content"
//           type="text"
//           placeholder="Content"
//           onChange={this.handleInputChange}
//         />
//         <Label for="Abstract">Abstract (opotional)</Label>
//         <Input
//           className="input"
//           value={this.state.abstract}
//           name="abstract"
//           type="text"
//           placeholder="Abstract"
//           onChange={this.handleInputChange}
//         />
//         <Label for="Subject">Subject</Label>
//         <Input
//           className="input"
//           value={this.state.subject}
//           name="subject"
//           type="text"
//           placeholder="Subject"
//           onChange={this.handleInputChange}
//         />
//         <Button onClick={() => this.handleAddArticle()} type="button">
//           Add New Article
//         </Button>
//       </Form>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     error: state.error,
//     creatingFriend: state.creatingFriend
//   };
// };

// export default connect(mapStateToProps, { createArticle })(ArticleForm);