import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BackgroundImageVias from '../../../common/components/background-image-vias';
import BlackTitle from '../../../common/components/black-title';
import BottomButtons from '../../../common/components/bottom-buttons';
import CenterFormLayout from '../../../common/components/center-form-layout';
import EmptyHolder from '../../../common/components/empty-holder';
import Header from '../../../common/components/header';
import HorizontalLayout from '../../../common/components/horizontal-layout';
import Input from '../../../common/components/input';
import SelectInput from '../../../common/components/select-input';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import { addSaludMutation, getEncuestaQuery } from '../../../queries/salud-queries';

class Salud extends Component {
  state = {
    surveyId: '',
    lifeExpectancyValue: '',
    malnutritionValue: '',
    numberOfVisitsValue: '',
    yearValue: '',
    persValue: '',
    impactExpositionValue: '',
    socialConflictValue: '',
    accessToLandValue: '',
    povertyValue: '',
    unemploymentValue: ''
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
      case "life-expectancy":
        this.setState({
          lifeExpectancyValue: value
        })
        break;
      case "malnutrition":
        this.setState({
          malnutritionValue: value
        })
        break;
      case "number-of-visits":
        this.setState({
          numberOfVisitsValue: parseInt(value)
        })
        break;
      case "year":
        this.setState({
          yearValue: parseInt(value)
        })
        break;
      case "pers":
        this.setState({
          persValue: parseInt(value)
        })
        break;
      case "impact-exposition":
        this.setState({
          impactExpositionValue: value
        })
        break;
      case "social-conflict":
        this.setState({
          socialConflictValue: value
        })
        break;
      case "access-to-land":
        this.setState({
          accessToLandValue: value
        })
        break;
      case "poverty":
        this.setState({
          povertyValue: value
        })
        break;
      case "unemployment":
        this.setState({
          unemploymentValue: value
        })
        break;
      default:
    }
  }

  storeData = (event) => {
    this.props.addSaludMutation({
      variables: {
        surveyId: this.state.surveyId,
        lifeExpectancyValue: this.state.lifeExpectancyValue,
        malnutritionValue: this.state.malnutritionValue,
        yearValue: this.state.yearValue,
        persValue: this.state.persValue,
        numberOfVisitsValue: this.state.numberOfVisitsValue,
        impactExpositionValue: this.state.impactExpositionValue,
        socialConflictValue: this.state.socialConflictValue,
        accessToLandValue: this.state.accessToLandValue,
        povertyValue: this.state.povertyValue,
        unemploymentValue: this.state.unemploymentValue,
      },
    });
    this.setState({
      lifeExpectancyValue: '',
      malnutritionValue: '',
      numberOfVisitsValue: '',
      yearValue: '',
      persValue: '',
      impactExpositionValue: '',
      socialConflictValue: '',
      accessToLandValue: '',
      povertyValue: '',
      unemploymentValue: ''
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
            Salud
          </Header>
          <BackgroundImageVias>
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
                    Vulnerabilidad:
                </BlackTitle>
                </HorizontalLayout>
                <HorizontalLayout>
                  <VerticalLayout>
                    <BlackTitle>
                      Esperanza de vida
                  </BlackTitle>
                    <BlackTitle>
                      % de desnutrición
                  </BlackTitle>
                    <BlackTitle>
                      Exposición a impactos sobre la salud:
                  </BlackTitle>
                    <BlackTitle>
                      Número de visitas
                  </BlackTitle>
                    <BlackTitle>
                      Año
                  </BlackTitle>
                    <BlackTitle>
                      Personas
                  </BlackTitle>
                    <BlackTitle>
                      Exposición a impactos
                  </BlackTitle>
                    <BlackTitle>
                      Conflicto social
                  </BlackTitle>
                    <BlackTitle>
                      Acceso a la tierra
                  </BlackTitle>
                    <BlackTitle>
                      Pobreza
                  </BlackTitle>
                    <BlackTitle>
                      Desempleo
                  </BlackTitle>
                  </VerticalLayout>
                  <VerticalLayout>
                    <Input
                      name={"life-expectancy"}
                      value={this.state.lifeExpectancyValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"malnutrition"}
                      value={this.state.malnutritionValue}
                      onChange={this.handleChange}
                    />
                    <EmptyHolder />
                    <Input
                      name={"number-of-visits"}
                      value={this.state.numberOfVisitsValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"year"}
                      value={this.state.yearValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"pers"}
                      value={this.state.persValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"impact-exposition"}
                      value={this.state.impactExpositionValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"social-conflict"}
                      value={this.state.socialConflictValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"access-to-land"}
                      value={this.state.accessToLandValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"poverty"}
                      value={this.state.povertyValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"unemployment"}
                      value={this.state.unemploymentValue}
                      onChange={this.handleChange}
                    />
                  </VerticalLayout>
                </HorizontalLayout>
                <BottomButtons onClick={this.storeData} />
              </CenterFormLayout>
            </VerticalLayout>
          </BackgroundImageVias>
        </VerticalLayout>
      </HandleError>
    )
  }
}

export default compose(
  graphql(addSaludMutation, { name: "addSaludMutation" }),
  graphql(getEncuestaQuery, { name: "getEncuestaQuery" })
)(Salud);