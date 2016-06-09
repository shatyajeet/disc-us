/**
 * Created by shatyajeet on 09/06/16.
 */

import React from 'react';

import styles from '../styles';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const validateState = (stateObj) => {
  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
  let errors = {};
  if (!stateObj.email) {
    errors.email = 'You need to enter an email address';
    errors.present = true;
  } else if (!emailRegex.test(stateObj.email)) {
    errors.email = 'You need to enter a valid email address';
    errors.present = true;
  }
  if (!stateObj.comment) {
    errors.comment = 'You need to enter some comment';
    errors.present = true;
  }

  return errors;
};

class CommentForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      comment: '',
      errors: {
        present: false,
        email: '',
        comment: ''
      }
    };
  }
  handleChange (e, type) {
    let updateObject = {};
    updateObject[type] = e.target.value;
    this.setState(updateObject);
  }
  handleSubmit (e) {
    e.preventDefault();
    const errors = validateState(this.state);
    if (!errors.present) {
      this.props.handleSubmit(this.state, () => {
        this.setState({
          email: '',
          comment: '',
          errors
        });
        this.refs.form.reset();
      });
    } else {
      this.setState({
        errors
      });
    }
  }
  render () {
    return (
      <div style={styles.commentForm}>
        <p>Enter your comment (email is mandatory)</p>
        <form ref="form" autocomplete="off">
          <div>
            <TextField name="email"
                       type="email"
                       floatingLabelText="Enter email"
                       errorText={this.state.errors.email}
                       onChange={(e) => this.handleChange(e, 'email')}
            />
          </div>
          <div>
            <TextField name="comment"
                       fullWidth={true}
                       multiLine={true}
                       floatingLabelText="Enter comment"
                       errorText={this.state.errors.comment}
                       onChange={(e) => this.handleChange(e, 'comment')} />
          </div>
          <div>
            <RaisedButton className="right" type="submit" label="Primary" primary={true} onClick={(e) => this.handleSubmit(e)} />
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
