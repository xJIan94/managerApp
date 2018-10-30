import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, signUpUser, clearSignUpForm } from '../actions';

import { Card, CardSection, TextField, Button, Spinner } from './common';


class SignUpForm extends Component {

  componentWillMount() {
    this.props.clearSignUpForm();
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.signUpUser({ email, password });
  }

  renderError() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </View>
    );
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Sign Up
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextField
            label="Email"
            placeholder="User@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <TextField
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>


        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  signUpTextStyle: {
    alignSelf: 'center',
    fontSize: 12,
    color: 'blue'
  }
};

const mapStateToProps = state => {
  return {
      email: state.auth.email,
      password: state.auth.password,
      error: state.auth.error,
      loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, signUpUser, clearSignUpForm })(SignUpForm);
