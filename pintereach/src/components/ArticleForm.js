import React, { Component } from 'react';
import { Button, Form, Label, Input } from 'reactstrap';
// import { createArticle } from '../actions';
import { withRouter } from 'react-router';
import Loader from 'react-loader-spinner';
import './ArticleForm.css'

class ArticleForm extends Component {
  // todo update state if article prop is passed down
  constructor(props) {
    super(props)
    if (props.article) {
      this.state = props.article
    } else {
      this.state = {
          title: '',
          content: '',
          abstract: '',
          category: '',
      }
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }
    );
  };

  handleAddArticle = _ => {
    this.props.doOnSubmit(this.state)
    /*
    const { title, content, abstract, subject } = this.state;
    this.props.createArticle({ title, content, abstract, subject });
    this.setState({ title: '', content: '', abstract: '', subject: '' });
    */
  };

  render() {
    return (
      <div className="form-continer">
        <Form className="Column-Layout">
          <Label for="Title">Title</Label>
          <Input
            className="input"
            value={this.state.title}
            name="title"
            type="text"
            placeholder="Title"
            onChange={this.handleInputChange}
          />
          <Label for="Content">Content</Label>
          <Input
            className="input"
            value={this.state.content}
            name="content"
            type="text"
            placeholder="Website Url"
            onChange={this.handleInputChange}
          />
          <Label for="Abstract">Abstract (optional)</Label>
          <Input
            className="input"
            value={this.state.abstract}
            name="abstract"
            type="textarea"
            placeholder="Abstract"
            onChange={this.handleInputChange}
          />
          <Label for="category">Category</Label>
          <Input
            className="input"
            value={this.state.category}
            name="category"
            type="text"
            placeholder="Category"
            onChange={this.handleInputChange}
          />
          <Button className={'form-button'} onClick={() => this.handleAddArticle()} type="button">
            {this.props.updating ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              <React.Fragment>{this.props.buttonText}</React.Fragment>
            )}
          </Button>
        </Form>
      </div> 
    );
  }
}

export default withRouter(ArticleForm)