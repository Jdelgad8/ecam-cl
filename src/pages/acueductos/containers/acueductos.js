import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BackgroundImageAgua from '../../../common/components/background-image-agua';
// components
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
import TextArea from '../../../common/components/text-area';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
//queries
import { addAcueductoMutation, getEncuestaQuery } from '../../../queries/agua-queries';
import InputCantidad from '../components/input-cantidad';
import VerticalLayoutRecursoAgua from '../components/vertical-layout-recurso-agua';

class Acueductos extends Component {
  state = {
    surveyId: '',
    operationalFailuresValue: '',
    lossesValue: '',
    damagesValue: '',
    descriptionValue: '',
    seasonValue: '',
    operationValue: '',
    budgetValue: '',
    populationServedValue: '',
    amountOfResourcesValue: '',
    winterChecked: false,
    summerChecked: false,
    seasonRecursoValue: '',
    availabilityValue: '',
    firstQuantityValue: '',
    secondQuantityValue: '',
    thirdQuantityValue: '',
    requiretreatmentValue: '',
    winterRecursoChecked: false,
    summerRecursoChecked: false,
    minChecked: false,
    maxChecked: false,
    yesChecked: false,
    noChecked: false
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
      case "winterRecurso":
        this.setState({
          summerRecursoChecked: false,
          winterRecursoChecked: true,
          seasonRecursoValue: value
        })
        break;
      case "summerRecurso":
        this.setState({
          summerRecursoChecked: true,
          winterRecursoChecked: false,
          seasonRecursoValue: value
        })
        break;
      case "min":
        this.setState({
          maxChecked: false,
          minChecked: true,
          availabilityValue: value
        })
        break;
      case "max":
        this.setState({
          maxChecked: true,
          minChecked: false,
          availabilityValue: value
        })
        break;
      case "first-quantity":
        this.setState({
          firstQuantityValue: parseInt(value)
        })
        break;
      case "require-treatment-yes":
        this.setState({
          yesChecked: true,
          noChecked: false,
          requiretreatmentValue: value
        })
        break;
      case "require-treatment-no":
        this.setState({
          yesChecked: false,
          noChecked: true,
          requiretreatmentValue: value
        })
        break;
      case "operational-failures":
        this.setState({
          operationalFailuresValue: value
        })
        break;
      case "losses":
        this.setState({
          lossesValue: parseInt(value)
        })
        break;
      case "damages":
        this.setState({
          damagesValue: value
        })
        break;
      case "description":
        this.setState({
          descriptionValue: value
        })
        break;
      case "winter":
        this.setState({
          summerChecked: false,
          winterChecked: true,
          seasonValue: value
        })
        break;
      case "summer":
        this.setState({
          summerChecked: true,
          winterChecked: false,
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
          budgetValue: parseInt(value)
        })
        break;
      case "population-served":
        this.setState({
          populationServedValue: parseInt(value)
        })
        break;
      case "amount-of-resources":
        this.setState({
          amountOfResourcesValue: parseInt(value)
        })
        break;
      default:
    }
  }

  storeData = () => {
    this.props.addAcueductoMutation({
      variables: {
        surveyId: this.state.surveyId,
        operationalFailuresValue: this.state.operationalFailuresValue,
        lossesValue: this.state.lossesValue,
        damagesValue: this.state.damagesValue,
        descriptionValue: this.state.descriptionValue,
        seasonValue: this.state.seasonValue,
        operationValue: this.state.operationValue,
        budgetValue: this.state.budgetValue,
        populationServedValue: this.state.populationServedValue,
        amountOfResourcesValue: this.state.amountOfResourcesValue,
        seasonRecursoValue: this.state.seasonRecursoValue,
        availabilityValue: this.state.availabilityValue,
        firstQuantityValue: this.state.firstQuantityValue,
        requiretreatmentValue: this.state.requiretreatmentValue,
      },
    });
    this.setState({
      surveyId: '',
      operationalFailuresValue: '',
      lossesValue: '',
      damagesValue: '',
      descriptionValue: '',
      seasonValue: '',
      operationValue: '',
      budgetValue: '',
      populationServedValue: '',
      amountOfResourcesValue: '',
      winterChecked: false,
      summerChecked: false,
      seasonRecursoValue: '',
      availabilityValue: '',
      firstQuantityValue: '',
      requiretreatmentValue: '',
      winterRecursoChecked: false,
      summerRecursoChecked: false,
      minChecked: false,
      maxChecked: false,
      yesChecked: false,
      noChecked: false
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
        <BackgroundImageAgua>
          <VerticalLayout>
            <Header>
              Recurso agua
          </Header>
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
              <VerticalLayout>
                <HorizontalLayout>
                  <VerticalLayoutRecursoAgua>
                    <BlackTitle>
                      Estación
                    </BlackTitle>
                  </VerticalLayoutRecursoAgua>
                  <VerticalLayoutRecursoAgua>
                    <HorizontalLayout>
                      <CheckboxInput
                        name={"winterRecurso"}
                        value={"invierno"}
                        checked={this.state.winterRecursoChecked}
                        onChange={this.handleChange}
                      />
                      <FormText>
                        Invierno
                      </FormText>
                    </HorizontalLayout>
                  </VerticalLayoutRecursoAgua>
                  <VerticalLayoutRecursoAgua>
                    <HorizontalLayout>
                      <CheckboxInput
                        name={"summerRecurso"}
                        value={"verano"}
                        checked={this.state.summerRecursoChecked}
                        onChange={this.handleChange}
                      />
                      <FormText>
                        Verano
                      </FormText>
                    </HorizontalLayout>
                  </VerticalLayoutRecursoAgua>
                </HorizontalLayout>
                <HorizontalLayout>
                  <VerticalLayoutRecursoAgua>
                    <BlackTitle>
                      Disponibilidad
                    </BlackTitle>
                  </VerticalLayoutRecursoAgua>
                  <VerticalLayoutRecursoAgua>
                    <HorizontalLayout>
                      <CheckboxInput
                        name={"min"}
                        value={"minima"}
                        checked={this.state.minChecked}
                        onChange={this.handleChange}
                      />
                      <FormText>
                        Mínima
                      </FormText>
                    </HorizontalLayout>
                  </VerticalLayoutRecursoAgua>
                  <VerticalLayoutRecursoAgua>
                    <HorizontalLayout>
                      <CheckboxInput
                        name={"max"}
                        value={"maxima"}
                        checked={this.state.maxChecked}
                        onChange={this.handleChange}
                      />
                      <FormText>
                        Máxima
                    </FormText>
                    </HorizontalLayout>
                  </VerticalLayoutRecursoAgua>
                </HorizontalLayout>
                <HorizontalLayout>
                  <VerticalLayoutRecursoAgua>
                    <BlackTitle>
                      Cantidad
                  </BlackTitle>
                  </VerticalLayoutRecursoAgua>
                  <VerticalLayoutRecursoAgua>
                    <InputCantidad
                      name={"first-quantity"}
                      value={this.state.firstQuantityValue}
                      onChange={this.handleChange}
                    />
                  </VerticalLayoutRecursoAgua>
                </HorizontalLayout>
                <HorizontalLayout>
                  <VerticalLayoutRecursoAgua>
                    <BlackTitle>
                      Calidad:
                    </BlackTitle>
                  </VerticalLayoutRecursoAgua>
                </HorizontalLayout>
                <HorizontalLayout>
                  <VerticalLayoutRecursoAgua>
                    <BlackTitle>
                      Requiere tratamiento
                    </BlackTitle>
                  </VerticalLayoutRecursoAgua>
                  <VerticalLayoutRecursoAgua>
                    <HorizontalLayout>
                      <CheckboxInput
                        name={"require-treatment-yes"}
                        value={"si"}
                        checked={this.state.yesChecked}
                        onChange={this.handleChange}
                      />
                      <FormText>
                        Si
                      </FormText>
                    </HorizontalLayout>
                  </VerticalLayoutRecursoAgua>
                  <VerticalLayoutRecursoAgua>
                    <HorizontalLayout>
                      <CheckboxInput
                        name={"require-treatment-no"}
                        value={"no"}
                        checked={this.state.noChecked}
                        onChange={this.handleChange}
                      />
                      <FormText>
                        No
                      </FormText>
                    </HorizontalLayout>
                  </VerticalLayoutRecursoAgua>
                </HorizontalLayout>
                <HorizontalLayout>
                  <VerticalLayoutRecursoAgua />
                </HorizontalLayout>
              </VerticalLayout>
            </CenterFormLayout>
          </VerticalLayout>
          <VerticalLayout>
            <Header>
              Acueductos o sistemas comunitarios de provisión de agua para el consumo humano
            </Header>
            <VerticalLayout>
              <CenterFormLayout>
                <HorizontalLayout>
                  <VerticalLayout>
                    <BlackTitle>
                      Fallos operacionales por impactos de origen
                    </BlackTitle>
                    <BlackTitle>
                      Pérdidas
                    </BlackTitle>
                  </VerticalLayout>
                  <VerticalLayout>
                    <Input
                      name={"operational-failures"}
                      value={this.state.operationalFailuresValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"losses"}
                      value={this.state.lossesValue}
                      onChange={this.handleChange}
                    />
                  </VerticalLayout>
                </HorizontalLayout>
                <HorizontalLayout>
                  <VerticalLayout>
                    <BlackTitle>
                      Daños
                  </BlackTitle>
                    <HorizontalLayout>
                      <SelectInput
                        name={"damages"}
                        value={this.state.damagesValue}
                        onChange={this.handleChange}
                      >
                        <SelectOption value={""}>
                          Seleccione una opción
                        </SelectOption>
                        <SelectOption value={"salud"}>
                          Salud
                        </SelectOption>
                        <SelectOption value={"infraestructura"}>
                          Infraestructura
                        </SelectOption>
                        <SelectOption value={"tecnologia de tratamiento de agua"}>
                          Tecnología de tratamiento de agua
                        </SelectOption>
                      </SelectInput>
                    </HorizontalLayout>
                    <HorizontalLayout>
                      <TextArea
                        name={"description"}
                        value={this.state.descriptionValue}
                        onChange={this.handleChange}
                        placeholder={"Descripción"}
                      />
                    </HorizontalLayout>
                  </VerticalLayout>
                </HorizontalLayout>
              </CenterFormLayout>
              <Header>
                Capacidad instalada/sensitividad
                </Header>
              <CenterFormLayout>
                <HorizontalLayout>
                  <VerticalLayout>
                    <BlackTitle>
                      Estación
                    </BlackTitle>
                    <BlackTitle>
                      Operación
                    </BlackTitle>
                    <HorizontalLayout>
                      <SelectInput
                        name={"operation"}
                        value={this.state.operationValue}
                        onChange={this.handleChange}
                        checked={this.state.summerChecked}
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
                    </HorizontalLayout>
                    <BlackTitle>
                      Presupuesto
                    </BlackTitle>
                    <BlackTitle>
                      Población atendida
                    </BlackTitle>
                    <BlackTitle>
                      Cantidad de recursos
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
                    <Input
                      name={"population-served"}
                      value={this.state.populationServedValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"amount-of-resources"}
                      value={this.state.amountOfResourcesValue}
                      onChange={this.handleChange}
                    />
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
                <BottomButtons onClick={this.storeData} />
              </CenterFormLayout>
            </VerticalLayout>
          </VerticalLayout>
        </BackgroundImageAgua>
      </HandleError>
    )
  }
}

export default compose(
  graphql(addAcueductoMutation, { name: "addAcueductoMutation" }),
  graphql(getEncuestaQuery, { name: "getEncuestaQuery" })
)(Acueductos);