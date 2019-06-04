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
//components
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
//queries
import { addRecursoSueloMutation, getEncuestaQuery } from '../../../queries/recurso-suelo-queries';

class RecursoSuelo extends Component {
  state = {
    surveyId: '',
    seasonValue: '',
    availabilityValue: '',
    areaValue: '',
    qualityValue: '',
    winterChecked: false,
    summerChecked: false,
    minChecked: false,
    maxChecked: false
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
      case "min":
        this.setState({
          minChecked: true,
          maxChecked: false,
          availabilityValue: value
        })
        break;
      case "max":
        this.setState({
          minChecked: false,
          maxChecked: true,
          availabilityValue: value
        })
        break;
      case "area":
        this.setState({
          areaValue: parseInt(value)
        })
        break;
      case "quality":
        this.setState({
          qualityValue: value
        })
        break;
      default:
    }
  }

  storeData = (event) => {
    console.log(this.state.surveyId, typeof this.state.surveyId)
    this.props.addRecursoSueloMutation({
      variables: {
        surveyId: this.state.surveyId,
        seasonValue: this.state.seasonValue,
        availabilityValue: this.state.availabilityValue,
        areaValue: this.state.areaValue,
        qualityValue: this.state.qualityValue,
      }
    });
    this.setState({
      surveyId: '',
      seasonValue: '',
      availabilityValue: '',
      areaValue: '',
      qualityValue: '',
      winterChecked: false,
      summerChecked: false,
      minChecked: false,
      maxChecked: false
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
            Recurso suelo
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
                      Estación
                    </BlackTitle>
                    <BlackTitle>
                      Disponibilidad
                    </BlackTitle>
                    <BlackTitle>
                      Área
                    </BlackTitle>
                    <BlackTitle>
                      Calidad
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
                    <Input
                      name={"area"}
                      value={this.state.areaValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"quality"}
                      value={this.state.qualityValue}
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
  graphql(addRecursoSueloMutation, { name: "addRecursoSueloMutation" }),
  graphql(getEncuestaQuery, { name: "getEncuestaQuery" })
)(RecursoSuelo);