import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BackgroundImage from '../../../common/components/background-image';
import BlackTitle from '../../../common/components/black-title';
import BottomButtons from '../../../common/components/bottom-buttons';
import CenterFormLayout from '../../../common/components/center-form-layout';
import Header from '../../../common/components/header';
import HorizontalLayout from '../../../common/components/horizontal-layout';
import Input from '../../../common/components/input';
import SelectInput from '../../../common/components/select-input';
import SelectOption from '../../../common/components/select-option';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import { addTecnologiaMutation, getEncuestaQuery } from '../../../queries/tecnologia-queries';

class Tecnologia extends Component {
  state = {
    surveyId: '',
    conveyanceValue: '',
    quantityValue: '',
    peopleservedValue: '',
    amountOfChargeValue: '',
    yearOfProductionValue: '',
    motorTypeValue: '',
    impactValue: '',
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
      case "conveyance":
        this.setState({
          conveyanceValue: value
        })
        break;
      case "quantity":
        this.setState({
          quantityValue: parseInt(value)
        })
        break;
      case "people-served":
        this.setState({
          peopleservedValue: parseInt(value)
        })
        break;
      case "amount-of-charge":
        this.setState({
          amountOfChargeValue: parseInt(value)
        })
        break;
      case "year-of-production":
        this.setState({
          yearOfProductionValue: parseInt(value)
        })
        break;
      case "motor-type":
        this.setState({
          motorTypeValue: value
        })
        break;
      case "impact":
        this.setState({
          impactValue: value
        })
        break;
      default:
    }
  }

  storeData = (event) => {
    this.props.addTecnologiaMutation({
      variables: {
        surveyId: this.state.surveyId,
        conveyanceValue: this.state.conveyanceValue,
        quantityValue: this.state.quantityValue,
        peopleservedValue: this.state.peopleservedValue,
        amountOfChargeValue: this.state.amountOfChargeValue,
        yearOfProductionValue: this.state.yearOfProductionValue,
        motorTypeValue: this.state.motorTypeValue,
        impactValue: this.state.impactValue,
      },
    });
    this.setState({
      conveyanceValue: '',
      quantityValue: '',
      peopleservedValue: '',
      amountOfChargeValue: '',
      yearOfProductionValue: '',
      motorTypeValue: '',
      impactValue: ''
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
            Tecnologías de mobilidad y producción
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
                  <VerticalLayout>
                    <BlackTitle>
                      Medio de transporte
                  </BlackTitle>
                    <SelectInput
                      name={"conveyance"}
                      value={this.state.conveyanceValue}
                      onChange={this.handleChange}
                    >
                      <SelectOption value={""}>
                        Seleccione una opción
                    </SelectOption>
                      <SelectOption value={"moto"}>
                        Moto
                    </SelectOption>
                      <SelectOption value={"automovil"}>
                        Automóvil
                    </SelectOption>
                      <SelectOption value={"campero"}>
                        Campero
                    </SelectOption>
                      <SelectOption value={"bus-camion"}>
                        Bus o camión
                    </SelectOption>
                      <SelectOption value={"lancha"}>
                        Lancha
                    </SelectOption>
                      <SelectOption value={"ferrocarril"}>
                        Ferrocarril
                    </SelectOption>
                    </SelectInput>
                  </VerticalLayout>
                </HorizontalLayout>
                <HorizontalLayout>
                  <VerticalLayout>
                    <BlackTitle>
                      Cantidad
                  </BlackTitle>
                    <BlackTitle>
                      Personas servidas
                  </BlackTitle>
                    <BlackTitle>
                      Cantidad de carga
                  </BlackTitle>
                    <BlackTitle>
                      Año de fabricación
                  </BlackTitle>
                    <BlackTitle>
                      Tipo de motor
                  </BlackTitle>
                    <BlackTitle>
                      Impacto
                  </BlackTitle>
                  </VerticalLayout>
                  <VerticalLayout>
                    <Input
                      name={"quantity"}
                      value={this.state.quantityValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"people-served"}
                      value={this.state.peopleservedValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"amount-of-charge"}
                      value={this.state.amountOfChargeValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"year-of-production"}
                      value={this.state.yearOfProductionValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"motor-type"}
                      value={this.state.motorTypeValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"impact"}
                      value={this.state.impactValue}
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
  graphql(addTecnologiaMutation, { name: "addTecnologiaMutation" }),
  graphql(getEncuestaQuery, { name: "getEncuestaQuery" })
)(Tecnologia);