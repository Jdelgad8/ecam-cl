import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BackgroundImageVias from '../../../common/components/background-image-vias';
import BlackTitle from '../../../common/components/black-title';
import BottomButtons from '../../../common/components/bottom-buttons';
import CenterFormLayout from '../../../common/components/center-form-layout';
import CheckboxInput from '../../../common/components/checkbox-input';
import EmptyHolder from '../../../common/components/empty-holder';
import FormText from '../../../common/components/form-text';
import Header from '../../../common/components/header';
import HorizontalLayout from '../../../common/components/horizontal-layout';
import Input from '../../../common/components/input';
import SelectInput from '../../../common/components/select-input';
import SelectOption from '../../../common/components/select-option';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import { addViasMutation, getEncuestaQuery } from '../../../queries/vias-queries';

class Vias extends Component {
  state = {
    surveyId: '',
    trackTypeValue: '',
    monetaryLossesValue: '',
    travelTimeValue: '',
    travelCostValue: '',
    presentedinValue: '',
    seasonValue: '',
    operationValue: '',
    budgetValue: '',
    sourceValue: '',
    quantityvalue: '',
    monthValue: '',
    winterChecked: false,
    summerChecked: false
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
      case "winter":
        this.setState({
          winterChecked: true,
          summerChecked: false,
          seasonValue: value
        })
        break;
      case "summer":
        this.setState({
          winterChecked: false,
          summerChecked: true,
          seasonValue: value
        })
        break;
      case "operation":
        this.setState({
          operationValue: value
        })
        break;
      case "budget":
        this.setState({
          budgetValue: parseFloat(value)
        })
        break;
      case "source":
        this.setState({
          sourceValue: value
        })
        break;
      case "quantity":
        this.setState({
          quantityvalue: parseInt(value)
        })
        break;
      case "month":
        this.setState({
          monthValue: value
        })
        break;
      case "track-type":
        this.setState({
          trackTypeValue: value
        })
        break;
      case "monetary-losses":
        this.setState({
          monetaryLossesValue: parseFloat(value)
        })
        break;
      case "travel-time":
        this.setState({
          travelTimeValue: value
        })
        break;
      case "travel-cost":
        this.setState({
          travelCostValue: parseFloat(value)
        })
        break;
      case "presented-in":
        this.setState({
          presentedinValue: value
        })
        break;
      default:
    }
  }

  storeData = (event) => {
    this.props.addViasMutation({
      variables: {
        surveyId: this.state.surveyId,
        trackTypeValue: this.state.trackTypeValue,
        monetaryLossesValue: this.state.monetaryLossesValue,
        travelTimeValue: this.state.travelTimeValue,
        travelCostValue: this.state.travelCostValue,
        presentedinValue: this.state.presentedinValue,
        seasonValue: this.state.seasonValue,
        operationValue: this.state.operationValue,
        budgetValue: this.state.budgetValue,
        sourceValue: this.state.sourceValue,
        quantityvalue: this.state.quantityvalue,
        monthValue: this.state.monthValue,
      },
    });
    this.setState({
      trackTypeValue: '',
      monetaryLossesValue: '',
      travelTimeValue: '',
      travelCostValue: '',
      presentedinValue: '',
      seasonValue: '',
      operationValue: '',
      budgetValue: '',
      sourceValue: '',
      quantityvalue: '',
      monthValue: '',
      winterChecked: false,
      summerChecked: false
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
        <BackgroundImageVias>
          <VerticalLayout>
            <Header>
              Vías y medios de acceso físico
          </Header>
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
                <SelectInput
                  name={"track-type"}
                  value={this.state.trackTypeValue}
                  onChange={this.handleChange}
                >
                  <SelectOption value={""}>
                    Seleccione una opción
                </SelectOption>
                  <SelectOption value={"autopista"}>
                    Autopista
                </SelectOption>
                  <SelectOption value={"carretera-regular"}>
                    Carretera regular
                </SelectOption>
                  <SelectOption value={"carretera-veredal"}>
                    Carretera veredal
                </SelectOption>
                  <SelectOption value={"trocha"}>
                    Trocha
                </SelectOption>
                </SelectInput>
                <HorizontalLayout>
                  <VerticalLayout>
                    <BlackTitle>
                      Perdidas monetarias de calidad por condiciones de vía
                  </BlackTitle>
                    <BlackTitle>
                      Tiempo de desplazamiento
                  </BlackTitle>
                    <BlackTitle>
                      Costo de desplazamiento por persona
                  </BlackTitle>
                  </VerticalLayout>
                  <VerticalLayout>
                    <Input
                      name={"monetary-losses"}
                      value={this.state.monetaryLossesValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"travel-time"}
                      value={this.state.travelTimeValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"travel-cost"}
                      value={this.state.travelCostValue}
                      onChange={this.handleChange}
                    />
                  </VerticalLayout>
                </HorizontalLayout>
                <HorizontalLayout>
                  <VerticalLayout>
                    <BlackTitle>
                      Se presenta en:
                  </BlackTitle>
                    <SelectInput
                      name={"presented-in"}
                      value={this.state.presentedinValue}
                      onChange={this.handleChange}
                    >
                      <SelectOption value={""}>
                        Seleccione una opción
                    </SelectOption>
                      <SelectOption value={"ambiental"}>
                        Ambiental
                    </SelectOption>
                      <SelectOption value={"social"}>
                        Social
                    </SelectOption>
                      <SelectOption value={"economico"}>
                        Económico
                    </SelectOption>
                    </SelectInput>
                  </VerticalLayout>
                </HorizontalLayout>
              </CenterFormLayout>
              <Header>
                Capacidad instalada/sensitividad
          </Header>
              <VerticalLayout>
                <CenterFormLayout>
                  <HorizontalLayout>
                    <VerticalLayout>
                      <BlackTitle>
                        Estación
                  </BlackTitle>
                      <BlackTitle>
                        Operación:
                  </BlackTitle>
                      <SelectInput
                        name={"operation"}
                        value={this.state.operationValue}
                        onChange={this.handleChange}
                      >
                        <SelectOption value={""}>
                          Seleccione una opción
                    </SelectOption>
                        <SelectOption value={"insumos"}>
                          Insumos
                    </SelectOption>
                        <SelectOption value={"personal"}>
                          Personal
                    </SelectOption>
                        <SelectOption value={"otros costos"}>
                          Otros costos
                    </SelectOption>
                      </SelectInput>
                      <BlackTitle>
                        Presupuesto
                  </BlackTitle>
                      <BlackTitle>
                        Fuente:
                  </BlackTitle>
                      <SelectInput
                        name={"source"}
                        value={this.state.sourceValue}
                        onChange={this.handleChange}
                      >
                        <SelectOption value={""}>
                          Seleccione una opción
                    </SelectOption>
                        <SelectOption value={"hidrica"}>
                          Hídrica
                    </SelectOption>
                        <SelectOption value={"diesel"}>
                          Diesel
                    </SelectOption>
                        <SelectOption value={"gasolina"}>
                          Gasolina
                    </SelectOption>
                        <SelectOption value={"gas"}>
                          Gas
                    </SelectOption>
                      </SelectInput>
                      <BlackTitle>
                        Cantidad
                  </BlackTitle>
                      <BlackTitle>
                        Mes
                  </BlackTitle>
                    </VerticalLayout>
                    <VerticalLayout>
                      <HorizontalLayout>
                        <CheckboxInput
                          name={"winter"}
                          value={"invierno"}
                          checked={this.state.winterChecked}
                          onChange={this.handleChange}
                        />
                        <FormText>
                          Invierno
                    </FormText>
                      </HorizontalLayout>
                      <EmptyHolder />
                      <EmptyHolder />
                      <EmptyHolder />
                      <Input
                        name={"budget"}
                        value={this.state.budgetValue}
                        onChange={this.handleChange}
                      />
                      <EmptyHolder />
                      <EmptyHolder />
                      <EmptyHolder />
                      <Input
                        name={"quantity"}
                        value={this.state.quantityvalue}
                        onChange={this.handleChange}
                      />
                      <SelectInput
                        name={"month"}
                        value={this.state.monthValue}
                        onChange={this.handleChange}
                      >
                        <SelectOption value={""}>
                          Seleccione un mes
                      </SelectOption>
                        <SelectOption value={"enero"}>
                          Enero
                      </SelectOption>
                        <SelectOption value={"febrero"}>
                          Febrero
                      </SelectOption>
                        <SelectOption value={"Marzo"}>
                          Marzo
                      </SelectOption>
                        <SelectOption value={"abril"}>
                          Abril
                      </SelectOption>
                        <SelectOption value={"mayo"}>
                          Mayo
                      </SelectOption>
                        <SelectOption value={"junio"}>
                          Junio
                      </SelectOption>
                        <SelectOption value={"julio"}>
                          Julio
                      </SelectOption>
                        <SelectOption value={"agosto"}>
                          Agosto
                      </SelectOption>
                        <SelectOption value={"septiembre"}>
                          Septiembre
                      </SelectOption>
                        <SelectOption value={"octubre"}>
                          Octubre
                      </SelectOption>
                        <SelectOption value={"noviembre"}>
                          Noviembre
                      </SelectOption>
                        <SelectOption value={"diciembre"}>
                          Diciembre
                      </SelectOption>
                      </SelectInput>
                    </VerticalLayout>
                    <VerticalLayout>
                      <HorizontalLayout>
                        <CheckboxInput
                          name={"summer"}
                          value={"verano"}
                          checked={this.state.summerChecked}
                          onChange={this.handleChange}
                        />
                        <FormText>
                          Verano
                    </FormText>
                      </HorizontalLayout>
                    </VerticalLayout>
                  </HorizontalLayout>
                </CenterFormLayout>
              </VerticalLayout>
              <BottomButtons onClick={this.storeData} />
            </VerticalLayout>
          </VerticalLayout>
        </BackgroundImageVias>
      </HandleError>
    )
  }
}

export default compose(
  graphql(addViasMutation, { name: "addViasMutation" }),
  graphql(getEncuestaQuery, { name: "getEncuestaQuery" })
)(Vias);