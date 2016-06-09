/**
 * Created by shatyajeet on 09/06/16.
 */

import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CommentForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      comment: ''
    };
  }
  handleChange (e, type) {
    let updateObject = {};
    updateObject[type] = e.target.value;
    this.setState(updateObject);
  }
  handleSubmit (e) {
    e.preventDefault();
    this.props.handleSubmit(this.state, () => {
      this.setState({
        email: '',
        comment: ''
      });
      this.refs.form.reset();
    });
  }
  render () {
    return (
      <div>
        <form ref="form" autocomplete="off">
          <div>
            <TextField name="email" type="email" floatingLabelText="Enter email" onChange={(e) => this.handleChange(e, 'email')} />
          </div>
          <div>
            <TextField name="comment" multiLine={true} floatingLabelText="Enter comment" onChange={(e) => this.handleChange(e, 'comment')} />
          </div>
          <div>
            <RaisedButton type="submit" label="Primary" primary={true} onClick={(e) => this.handleSubmit(e)} />
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
