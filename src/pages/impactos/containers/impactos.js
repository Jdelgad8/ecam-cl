import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BackgroundImage from '../../../common/components/background-image';
import BlackTitle from '../../../common/components/black-title';
import BottomButtons from '../../../common/components/bottom-buttons';
import CenterFormLayout from '../../../common/components/center-form-layout';
import CheckboxInput from '../../../common/components/checkbox-input';
import Header from '../../../common/components/header';
import HorizontalLayout from '../../../common/components/horizontal-layout';
import Input from '../../../common/components/input';
import SelectInput from '../../../common/components/select-input';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
//queries
import { addImpactosMutation, getEncuestaQuery } from '../../../queries/impactos-queries';
import ImpactosFormText from '../components/impactos-form-text';



class Impactos extends Component {
  state = {
    surveyId: '',
    impactValue: '',
    industrialMagnitudeValue: '',
    comercialMagnitudeValue: '',
    humanMagnitudeValue: '',
    industrialConsequencesValue: '',
    comercialConsequencesValue: '',
    humanConsequencesValue: '',
    directChecked: false,
    indirectChecked: false
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
      case "direct-impact":
        this.setState({
          directChecked: true,
          indirectChecked: false,
          impactValue: value
        })
        break;
      case "indirect-impact":
        this.setState({
          directChecked: false,
          indirectChecked: true,
          impactValue: value
        })
        break;
      case "industrial-magnitude":
        this.setState({
          industrialMagnitudeValue: value
        })
        break;
      case "comercial-magnitude":
        this.setState({
          comercialMagnitudeValue: value
        })
        break;
      case "human-magnitude":
        this.setState({
          humanMagnitudeValue: value
        })
        break;
      case "industrial-consequences":
        this.setState({
          industrialConsequencesValue: value
        })
        break;
      case "comercial-consequences":
        this.setState({
          comercialConsequencesValue: value
        })
        break;
      case "human-consequences":
        this.setState({
          humanConsequencesValue: value
        })
        break;
      default:
    }
  }

  storeData = (event) => {
    this.props.addImpactosMutation({
      variables: {
        surveyId: this.state.surveyId,
        impactValue: this.state.impactValue,
        industrialMagnitudeValue: this.state.industrialMagnitudeValue,
        industrialConsequencesValue: this.state.industrialConsequencesValue,
        comercialMagnitudeValue: this.state.comercialMagnitudeValue,
        comercialConsequencesValue: this.state.comercialConsequencesValue,
        humanMagnitudeValue: this.state.humanMagnitudeValue,
        humanConsequencesValue: this.state.humanConsequencesValue
      }
    });

    this.setState({
      surveyId: '',
      impactValue: '',
      industrialMagnitudeValue: '',
      comercialMagnitudeValue: '',
      humanMagnitudeValue: '',
      industrialConsequencesValue: '',
      comercialConsequencesValue: '',
      humanConsequencesValue: '',
      directChecked: false,
      indirectChecked: false
    });
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
            Impactos directos e indirectos por actividades humanas
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
                  <CheckboxInput
                    name={"direct-impact"}
                    value={"directos"}
                    checked={this.state.directChecked}
                    onChange={this.handleChange}
                  />
                  <ImpactosFormText>
                    Directos
                </ImpactosFormText>
                  <CheckboxInput
                    name={"indirect-impact"}
                    value={"indirectos"}
                    checked={this.state.indirectChecked}
                    onChange={this.handleChange}
                  />
                  <ImpactosFormText>
                    Indirectos
                </ImpactosFormText>
                </HorizontalLayout>
                <HorizontalLayout>
                  <VerticalLayout>
                    <BlackTitle>
                      Vertimientos industriales:
                  </BlackTitle>
                    <BlackTitle>
                      Vertimientos comerciales:
                  </BlackTitle>
                    <BlackTitle>
                      Vertimientos humanos:
                  </BlackTitle>
                  </VerticalLayout>
                  <VerticalLayout>

                    <HorizontalLayout>
                      <BlackTitle>
                        Magnitud
                    </BlackTitle>
                      <Input
                        name={"industrial-magnitude"}
                        value={this.state.industrialMagnitudeValue}
                        onChange={this.handleChange}
                      />
                    </HorizontalLayout>
                    <HorizontalLayout>
                      <BlackTitle>
                        Magnitud
                    </BlackTitle>
                      <Input
                        name={"comercial-magnitude"}
                        value={this.state.comercialMagnitudeValue}
                        onChange={this.handleChange}
                      />
                    </HorizontalLayout>
                    <HorizontalLayout>
                      <BlackTitle>
                        Magnitud
                    </BlackTitle>
                      <Input
                        name={"human-magnitude"}
                        value={this.state.humanMagnitudeValue}
                        onChange={this.handleChange}
                      />
                    </HorizontalLayout>
                  </VerticalLayout>
                  <VerticalLayout>
                    <HorizontalLayout>
                      <BlackTitle>
                        Consecuencias
                    </BlackTitle>
                      <Input
                        name={"industrial-consequences"}
                        value={this.state.industrialConsequencesValue}
                        onChange={this.handleChange}
                      />
                    </HorizontalLayout>
                    <HorizontalLayout>
                      <BlackTitle>
                        Consecuencias
                    </BlackTitle>
                      <Input
                        name={"comercial-consequences"}
                        value={this.state.comercialConsequencesValue}
                        onChange={this.handleChange}
                      />
                    </HorizontalLayout>
                    <HorizontalLayout>
                      <BlackTitle>
                        Consecuencias
                    </BlackTitle>
                      <Input
                        name={"human-consequences"}
                        value={this.state.humanConsequencesValue}
                        onChange={this.handleChange}
                      />
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
  graphql(addImpactosMutation, { name: "addImpactosMutation" }),
  graphql(getEncuestaQuery, { name: "getEncuestaQuery" })
)(Impactos);