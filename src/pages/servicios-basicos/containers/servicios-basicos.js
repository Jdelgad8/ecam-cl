import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BackgroundImage from '../../../common/components/background-image';
import BlackTitle from '../../../common/components/black-title';
import BottomButtons from '../../../common/components/bottom-buttons';
import CenterFormLayout from '../../../common/components/center-form-layout';
import CheckboxInput from '../../../common/components/checkbox-input';
import FormText from '../../../common/components/form-text';
import Header from '../../../common/components/header';
import HorizontalLayout from '../../../common/components/horizontal-layout';
import Input from '../../../common/components/input';
import SelectInput from '../../../common/components/select-input';
import SelectOption from '../../../common/components/select-option';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import { addServiciosBasicosMutation, getEncuestaQuery } from '../../../queries/servicios-basicos-queries';

class ServiciosBasicos extends Component {
  state = {
    surveyId: '',
    accesValue: '',
    servicesValue: '',
    enviromentalValue: '',
    socialConflictValue: '',
    incomeVolatilityValue: '',
    otherValue: '',
    accesYesChecked: false,
    accesNoChecked: false
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
      case "acces-yes":
        this.setState({
          accesYesChecked: true,
          accesNoChecked: false,
          accesValue: value
        })
        break;
      case "acces-no":
        this.setState({
          accesYesChecked: false,
          accesNoChecked: true,
          accesValue: value
        })
        break;
      case "services":
        this.setState({
          servicesValue: value
        })
        break;
      case "enviromental":
        this.setState({
          enviromentalValue: value
        })
        break;
      case "social-conflict":
        this.setState({
          socialConflictValue: value
        })
        break;
      case "income-volatility":
        this.setState({
          incomeVolatilityValue: value
        })
        break;
      case "other":
        this.setState({
          otherValue: value
        })
        break;
      default:
    }
  }

  storeData = (event) => {
    this.props.addServiciosBasicosMutation({
      variables: {
        surveyId: this.state.surveyId,
        accesValue: this.state.accesValue,
        servicesValue: this.state.servicesValue,
        enviromentalValue: this.state.enviromentalValue,
        socialConflictValue: this.state.socialConflictValue,
        incomeVolatilityValue: this.state.incomeVolatilityValue,
        otherValue: this.state.otherValue,
      },
    });
    this.setState({
      accesValue: '',
      servicesValue: '',
      enviromentalValue: '',
      socialConflictValue: '',
      incomeVolatilityValue: '',
      otherValue: '',
      accesYesChecked: false,
      accesNoChecked: false
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
            Servicios básicos
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
                    Exposición a impactos sobre servicios básicos
                </BlackTitle>
                </HorizontalLayout>
                <HorizontalLayout>
                  <VerticalLayout>
                    <BlackTitle>
                      Acceso
                  </BlackTitle>
                    <BlackTitle>
                      Servicios
                  </BlackTitle>
                    <BlackTitle>
                      Ambientales
                  </BlackTitle>
                    <BlackTitle>
                      Conflicto social
                  </BlackTitle>
                    <BlackTitle>
                      Volatilidad del ingreso
                  </BlackTitle>
                    <BlackTitle>
                      Otro
                  </BlackTitle>
                  </VerticalLayout>
                  <VerticalLayout>
                    <HorizontalLayout>
                      <CheckboxInput
                        name={"acces-yes"}
                        value={"si"}
                        checked={this.state.accesYesChecked}
                        onChange={this.handleChange}
                      />
                      <FormText>
                        Si
                    </FormText>
                    </HorizontalLayout>
                    <HorizontalLayout>
                      <SelectInput
                        name={"services"}
                        value={this.state.servicesValue}
                        onChange={this.handleChange}
                      >
                        <SelectOption value={""}>
                          Seleccione una opción
                      </SelectOption>
                        <SelectOption value={"alcantarillado"}>
                          Alcantarillado
                      </SelectOption>
                        <SelectOption value={"luz"}>
                          Luz
                      </SelectOption>
                        <SelectOption value={"agua"}>
                          Agua
                      </SelectOption>
                      </SelectInput>
                    </HorizontalLayout>
                    <Input
                      name={"enviromental"}
                      value={this.state.enviromentalValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"social-conflict"}
                      value={this.state.socialConflictValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"income-volatility"}
                      value={this.state.incomeVolatilityValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"other"}
                      value={this.state.otherValue}
                      onChange={this.handleChange}
                    />
                  </VerticalLayout>
                  <VerticalLayout>
                    <HorizontalLayout>
                      <CheckboxInput
                        name={"acces-no"}
                        value={"no"}
                        checked={this.state.accesNoChecked}
                        onChange={this.handleChange}
                      />
                      <FormText>
                        No
                    </FormText>
                    </HorizontalLayout>
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
  graphql(addServiciosBasicosMutation, { name: "addServiciosBasicosMutation" }),
  graphql(getEncuestaQuery, { name: "getEncuestaQuery" })
)(ServiciosBasicos);