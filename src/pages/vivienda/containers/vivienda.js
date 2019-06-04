import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BackgroundImage from '../../../common/components/background-image';
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
import { addViviendaMutation, getEncuestaQuery } from '../../../queries/vivienda-queries';

class Vivienda extends Component {
  state = {
    surveyId: '',
    enviromentalValue: '',
    socialConflictValue: '',
    povertyValue: '',
    otherValue: '',
    constructionMaterialValue: '',
    numberOfPeopleValue: ''
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
      case "poverty":
        this.setState({
          povertyValue: value
        })
        break;
      case "other":
        this.setState({
          otherValue: value
        })
        break;
      case "construction-material":
        this.setState({
          constructionMaterialValue: value
        })
        break;
      case "number-of-people":
        this.setState({
          numberOfPeopleValue: parseInt(value)
        })
        break;
      default:
    }
  }

  storeData = (event) => {
    this.props.addViviendaMutation({
      variables: {
        surveyId: this.state.surveyId,
        enviromentalValue: this.state.enviromentalValue,
        socialConflictValue: this.state.socialConflictValue,
        povertyValue: this.state.povertyValue,
        otherValue: this.state.otherValue,
        constructionMaterialValue: this.state.constructionMaterialValue,
        numberOfPeopleValue: this.state.numberOfPeopleValue,
      },
    });
    this.setState({
      enviromentalValue: '',
      socialConflictValue: '',
      povertyValue: '',
      otherValue: '',
      constructionMaterialValue: '',
      numberOfPeopleValue: ''
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
            Vivienda
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
                    Exposición a impactos en la vivienda
                </BlackTitle>
                </HorizontalLayout>
                <HorizontalLayout>
                  <VerticalLayout>
                    <BlackTitle>
                      Ambientales
                  </BlackTitle>
                    <BlackTitle>
                      Conflicto social
                  </BlackTitle>
                    <BlackTitle>
                      Pobreza
                  </BlackTitle>
                    <BlackTitle>
                      Otro
                  </BlackTitle>
                    <BlackTitle>
                      Capacidad:
                  </BlackTitle>
                    <BlackTitle>
                      Material de construcción
                  </BlackTitle>
                    <BlackTitle>
                      Número de personas
                  </BlackTitle>
                  </VerticalLayout>
                  <VerticalLayout>
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
                      name={"poverty"}
                      value={this.state.povertyValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"other"}
                      value={this.state.otherValue}
                      onChange={this.handleChange}
                    />
                    <EmptyHolder />
                    <Input
                      name={"construction-material"}
                      value={this.state.constructionMaterialValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"number-of-people"}
                      value={this.state.numberOfPeopleValue}
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
  graphql(addViviendaMutation, { name: "addViviendaMutation" }),
  graphql(getEncuestaQuery, { name: "getEncuestaQuery" })
)(Vivienda);