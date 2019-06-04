import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../common/components/buttton';
import Header from '../../../common/components/header';
import Input from '../../../common/components/input';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import LoginInputContainer from '../components/login-input-container';

class Login extends Component {
  state = {
    emailValue: '',
    passwordValue: ''
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    switch (name) {
      case "login-email":
        this.setState({
          emailValue: value
        })
        break;
      case "login-password":
        this.setState({
          passwordValue: value
        })
        break;
      default:
    }
  }

  loginUser = (event) => {
    console.log(this.state.emailValue)
    console.log(this.state.passwordValue)
  }

  /*   saveUserData = token => {
      localStorage.setItem(AUTH_TOKEN, token)
    } */

  render() {
    /*     const authToken = localStorage.getItem(AUTH_TOKEN); */
    return (
      <HandleError>
        <VerticalLayout>
          <Header>Login encuestador</Header>
          <LoginInputContainer>
            <Input
              type={"email"}
              name={"login-email"}
              placeholder={"Correo electrónico"}
              autoComplete={"on"}
              onChange={this.handleChange}
            />
            <Input
              type={"password"}
              name={"login-password"}
              placeholder={"Contraseña"}
              autoComplete={"on"}
              onChange={this.handleChange}
            />
            <Link to="/recolectar">
              <Button onClick={this.loginUser}>
                Ingresar
              </Button>
            </Link>
          </LoginInputContainer>
        </VerticalLayout>
      </HandleError>
    )
  }
}

export default Login;