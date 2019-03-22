import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import HomeNavigation from './HomeNavigation';

export default class Example extends React.Component {
  render() {
    return (
      <>
      <HomeNavigation />
      <Form>
        <FormGroup>
          <Label for="Title">Title</Label>
          <Input type="text" name="title" id="new-article" placeholder="Title of New Article" />
        </FormGroup>
        <FormGroup>
          <Label for="content">Content</Label>
          <Input type="text" name="content" id="new-article content" placeholder="example: www.research-article.org" />
        </FormGroup>
        <FormGroup>
          <Label for="abstract">Article Abstract</Label>
          <Input type="textarea" name="text" id="Example: The purpose of this paper is to explore the effects of ..." />
        </FormGroup>
        <FormGroup>
          <Label for="category">Subject Category</Label>
          <Input type="text" name="content" id="new-article content" placeholder="example: www.research-article.org" />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="file" name="file" id="new-image" />
          <FormText color="muted">
            Click the "Choose File" button and navigate to the file path of the image you would like to upload
          </FormText>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </>
    );
  }
}