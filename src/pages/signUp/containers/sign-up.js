import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import Button from '../../../common/components/buttton';
import Header from '../../../common/components/header';
import Input from '../../../common/components/input';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import { addEncuestadorMutation } from '../../../queries/encuestador-queries';
import SignupInputContainer from '../components/signup-input-container';

class SignUp extends Component {

  state = {
    nameValue: '',
    lastNameValue: '',
    emailValue: '',
    passwordValue: ''
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    switch (name) {
      case "signup-name":
        this.setState({
          nameValue: value
        })
        break;
      case "signup-lastname":
        this.setState({
          lastNameValue: value
        })
        break;
      case "signup-email":
        this.setState({
          emailValue: value
        })
        break;
      case "signup-password":
        this.setState({
          passwordValue: value
        })
        break;
      default:
    }
  }


  registerUser = () => {
    this.props.addEncuestadorMutation({
      variables: {
        nameValue: this.state.nameValue,
        lastNameValue: this.state.lastNameValue,
        emailValue: this.state.emailValue,
        passwordValue: this.state.passwordValue,
      },
    });
  }

  render() {

    return (
      <HandleError>
        <VerticalLayout>
          <Header>Registro encuestador</Header>
          <VerticalLayout>
            <SignupInputContainer>
              <Input
                type={"text"}
                name={"signup-name"}
                placeholder={"Nombres"}
                value={this.state.nameValue}
                onChange={this.handleChange}
              />
              <Input
                type={"text"}
                name={"signup-lastname"}
                placeholder={"Apellidos"}
                value={this.state.lastNameValue}
                onChange={this.handleChange}
              />
              <Input
                type={"email"}
                name={"signup-email"}
                placeholder={"Correo electrónico"}
                value={this.state.emailValue}
                onChange={this.handleChange} />
              <Input
                type={"password"}
                name={"signup-password"}
                placeholder={"Contraseña"}
                value={this.state.passwordValue}
                onChange={this.handleChange}
              />
              <SignupInputContainer>
                <Link to="/ingreso">
                  <Button onClick={this.registerUser}>
                    Registrar
                  </Button>
                </Link>
              </SignupInputContainer>
            </SignupInputContainer>
          </VerticalLayout>
        </VerticalLayout>
      </HandleError>
    );
  }
}

export default compose(
  graphql(addEncuestadorMutation, { name: "addEncuestadorMutation" })
)(SignUp);