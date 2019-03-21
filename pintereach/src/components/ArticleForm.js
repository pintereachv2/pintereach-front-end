import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { createArticle } from '../actions';
import { withRouter } from 'react-router';

class ArticleForm extends Component {
  // todo update state if article prop is passed down
  state = {
    title: '',
    content: '',
    abstract: '',
    category: ''
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
          placeholder="Content"
          onChange={this.handleInputChange}
        />
        <Label for="Abstract">Abstract (opotional)</Label>
        <Input
          className="input"
          value={this.state.abstract}
          name="abstract"
          type="text"
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
        <Button onClick={() => this.handleAddArticle()} type="button">
          Add New Article
        </Button>
      </Form>
    );
  }
}

export default withRouter( ArticleForm)