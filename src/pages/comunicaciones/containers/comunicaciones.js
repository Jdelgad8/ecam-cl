import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BackgroundImage from '../../../common/components/background-image';
import BlackTitle from '../../../common/components/black-title';
import BottomButtons from '../../../common/components/bottom-buttons';
import CenterFormLayout from '../../../common/components/center-form-layout';
import FormText from '../../../common/components/form-text';
import Header from '../../../common/components/header';
import HorizontalLayout from '../../../common/components/horizontal-layout';
import Input from '../../../common/components/input';
import SelectInput from '../../../common/components/select-input';
import TextArea from '../../../common/components/text-area';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import { addComunicacionesMutation, getEncuestaQuery } from '../../../queries/comunicaciones-queries';

class Comunicaciones extends Component {
  state = {
    surveyId: '',
    homeInternetValue: '',
    homeCellphoneValue: '',
    bedroomsValue: '',
    moreValue: ''
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    switch (name) {
      case "survey-id":
        this.setState({
          surveyId: value
        })
        break;
      case "home-internet":
        this.setState({
          homeInternetValue: parseInt(value)
        })
        break;
      case "home-cellphone":
        this.setState({
          homeCellphoneValue: parseInt(value)
        })
        break;
      case "bedrooms":
        this.setState({
          bedroomsValue: parseInt(value)
        })
        break;
      case "more":
        this.setState({
          moreValue: value
        })
        break;
      default:
    }
  }

  storeData = (event) => {
    this.props.addComunicacionesMutation({
      variables: {
        surveyId: this.state.surveyId,
        homeInternetValue: this.state.homeInternetValue,
        homeCellphoneValue: this.state.homeCellphoneValue,
        bedroomsValue: this.state.bedroomsValue,
        moreValue: this.state.moreValue,
      },
    });
    this.setState({
      homeInternetValue: '',
      homeCellphoneValue: '',
      bedroomsValue: '',
      moreValue: ''
    })
  }

  displayEncuestas() {
    var data = this.props.getEncuestaQuery;
    if (data.loading) {
      return (
        <option disabled>
          Cargando encuestas...
        </option>
      );
    } else {
      return data.encuestas.map(encuesta => {
        return (
          <option key={encuesta.id} value={encuesta.id}>
            {encuesta.nombre_encuestado + ' - ' + encuesta.nombre_sitio}
          </option>
        );
      });
    }
  }

  render() {
    return (
      <HandleError>
        <VerticalLayout>
          <Header>
            Comunicaciones
          </Header>
          <BackgroundImage>
            <VerticalLayout>
              <CenterFormLayout>
                <HorizontalLayout>
                  <BlackTitle>
                    Seleccione el encuestado
                </BlackTitle>
                  <SelectInput
                    name={"survey-id"}
                    value={this.state.surveyId}
                    onChange={this.handleChange}
                  >
                    <option>Seleccione una opción</option>
                    {this.displayEncuestas()}
                  </SelectInput>
                </HorizontalLayout>
                <HorizontalLayout>
                  <BlackTitle>
                    Capacidad
                </BlackTitle>
                </HorizontalLayout>
                <HorizontalLayout>
                  <VerticalLayout>
                    <FormText>
                      Internet en casa
                  </FormText>
                    <FormText>
                      Celular en casa
                  </FormText>
                    <FormText>
                      Habitaciones
                  </FormText>
                    <FormText>
                      Más
                  </FormText>
                  </VerticalLayout>
                  <VerticalLayout>
                    <Input
                      name={"home-internet"}
                      value={this.state.homeInternetValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"home-cellphone"}
                      value={this.state.homeCellphoneValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"bedrooms"}
                      value={this.state.bedroomsValue}
                      onChange={this.handleChange}
                    />
                    <TextArea
                      name={"more"}
                      value={this.state.moreValue}
                      onChange={this.handleChange}
                    />
                  </VerticalLayout>
                </HorizontalLayout>
                <BottomButtons onClick={this.storeData} />
              </CenterFormLayout>
            </VerticalLayout>
          </BackgroundImage>
        </VerticalLayout>
      </HandleError>
    )
  }
}

export default compose(
  graphql(addComunicacionesMutation, { name: "addComunicacionesMutation" }),
  graphql(getEncuestaQuery, { name: "getEncuestaQuery" })
)(Comunicaciones);