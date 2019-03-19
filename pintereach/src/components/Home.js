// import React, { Component } from 'reactn';
// // import './App.css';
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle } from 'reactstrap';

// import SelectedArticle from './SelectedArticle';
// import { connect } from 'react-redux';
// import { deleteArticle, updateSingleArticle, toggleShowUpdate } from '../actions';
// import UpdateArticleForm from './UpdateArticleForm';

// class Home extends Component {
//   handleDeleteArticle = () => {
//     const { id } = this.props.articleSelected;
//     this.props.deleteArticle(id);
//   };

//   handleShowArticle = friend => {
//     this.props.updateSingleFriend(friend);
//   };

//   toggleShowUpdate = () => {
//     this.props.toggleShowUpdate();
//   };
//   render() {
//     return (
//       <div className="Article-Container">
//         <div className="Article-List">
//           {this.props.articles.map(article => {
//             return (
//               <Card onClick={() => this.handleShowArticle(article)} key={article.id}>
//                 <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
//                 <CardBody>
//                   <CardTitle>{article.title}</CardTitle>
//                   <CardSubtitle>{article.content}</CardSubtitle>
//                   <CardText>{article.abstract}</CardText>
//                 </CardBody>
//               </Card>
//             );
//           })}
//         </div>
//         {Object.keys(this.props.articleSelected).length > 0 ? (
//           <SelectedArticle
//             handleShowArticle={this.handleShowArticle}
//             toggleShowUpdate={this.toggleShowUpdate}
//             handleDeleteArticle={this.handleDeleteArticle}
//             selected={this.props.articleSelected}
//           />
//         ) : null}
//         {this.props.showUpdate ? (
//           <UpdateArticleForm article={this.props.articleSelected} />
//         ) : null}
//         {this.props.deletingArticles ? (
//           <h2>Deleted that article</h2>
//         ) : null}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     deletingArticles: state.articleReducer.deletingArticles,
//     error: state.articleReducer.error,
//     showUpdate: state.singleArticleReducer.showUpdate,
//     articleSelected: state.singleArticleReducer.articleSelected
//   };
// };

// export default connect(mapStateToProps, {
//   deleteArticle,
//   updateSingleArticle,
//   toggleShowUpdate
// })(Home);