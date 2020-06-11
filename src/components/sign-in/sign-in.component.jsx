import React, { Component } from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      const userRef = await auth.signInWithEmailAndPassword(email, password);
      console.log("USER REF", userRef);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }

  }

  handleChange = event => {
    console.log(event);
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" value={this.state.email} required handleChange={this.handleChange} type="email" label="email" />
          <FormInput name="password" value={this.state.password} required type="password" handleChange={this.handleChange} label="password" />

          <div className="buttons">
            <CustomButtom type="Submit"  >Sign In</CustomButtom>
            <CustomButtom type="Submit" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButtom>
          </div>

        </form>
      </div>
    )
  }
}

export default SignIn;