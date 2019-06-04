import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BackgroundImage from '../../../common/components/background-image';
import BlackTitle from '../../../common/components/black-title';
import BottomButtons from '../../../common/components/bottom-buttons';
import CenterFormLayout from '../../../common/components/center-form-layout';
import EmptyHolder from '../../../common/components/empty-holder';
import EmptyHolderSmall from '../../../common/components/empty-holder-small';
import Header from '../../../common/components/header';
import HorizontalLayout from '../../../common/components/horizontal-layout';
import Input from '../../../common/components/input';
import SelectInput from '../../../common/components/select-input';
import SelectOption from '../../../common/components/select-option';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import { addActividadesEconomicasMutation, getEncuestaQuery } from '../../../queries/actividades-economicas-queries';

class ActividadesEconomicas extends Component {
  state = {
    surveyId: '',
    industryValue: '',
    agricultureValue: '',
    servicesValue: '',
    governmentValue: '',
    agricultureInputValue: '',
    servicesInputValue: '',
    governmentInputValue: '',
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
      case "industry":
        this.setState({
          industryValue: value
        })
        break;
      case "agriculture":
        this.setState({
          agricultureValue: value
        })
        break;
      case "services":
        this.setState({
          servicesValue: value
        })
        break;
      case "government":
        this.setState({
          governmentValue: value
        })
        break;
      case "agriculture-input":
        this.setState({
          agricultureInputValue: value
        })
        break;
      case "services-input":
        this.setState({
          servicesInputValue: value
        })
        break;
      case "government-input":
        this.setState({
          governmentInputValue: value
        })
        break;
      default:
    }
  }

  storeData = (event) => {
    this.props.addActividadesEconomicasMutation({
      variables: {
        surveyId: this.state.surveyId,
        industryValue: this.state.industryValue,
        agricultureValue: this.state.agricultureValue,
        servicesValue: this.state.servicesValue,
        governmentValue: this.state.governmentValue,
        agricultureInputValue: this.state.agricultureInputValue,
        servicesInputValue: this.state.servicesInputValue,
        governmentInputValue: this.state.governmentInputValue,
      },
    });
    this.setState({
      industryValue: '',
      agricultureValue: '',
      servicesValue: '',
      governmentValue: '',
      agricultureInputValue: '',
      servicesInputValue: '',
      governmentInputValue: ''
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
            Actividades económicas
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
                      Industria
                  </BlackTitle>
                    <BlackTitle>
                      Agricultura:
                  </BlackTitle>
                    <BlackTitle>
                      Servicios
                  </BlackTitle>
                    <EmptyHolderSmall />
                    <BlackTitle>
                      Impuestos
                  </BlackTitle>
                    <EmptyHolderSmall />
                    <BlackTitle>
                      Gobierno
                  </BlackTitle>
                  </VerticalLayout>
                  <VerticalLayout>
                    <Input
                      name={"industry"}
                      value={this.state.industryValue}
                      onChange={this.handleChange}
                    />
                    <SelectInput
                      name={"agriculture"}
                      value={this.state.agricultureValue}
                      onChange={this.handleChange}
                    >
                      <SelectOption value={""}>
                        Seleccione una opción
                    </SelectOption>
                      <SelectOption value={"cultivos"}>
                        Cultivos
                    </SelectOption>
                      <SelectOption value={"ganaderia"}>
                        Ganadería
                    </SelectOption>
                      <SelectOption value={"psicultura"}>
                        Psicultura
                    </SelectOption>
                      <SelectOption value={"otros"}>
                        Otros...
                    </SelectOption>
                    </SelectInput>
                    <SelectInput
                      name={"services"}
                      value={this.state.servicesValue}
                      onChange={this.handleChange}
                    >
                      <SelectOption value={"null"}>
                        Seleccione una opción...
                    </SelectOption>
                      <optgroup label="Servicios Com.">
                        <SelectOption value={"gastronomia"}>
                          Gastronomía
                      </SelectOption>
                        <SelectOption value={"hoteleria"}>
                          Hotelería
                      </SelectOption>
                        <SelectOption value={"transporte"}>
                          Transporte
                      </SelectOption>
                        <SelectOption value={"ecoturismo"}>
                          Ecoturísmo
                      </SelectOption>
                        <SelectOption value={"otros"}>
                          Otros...
                      </SelectOption>
                      </optgroup>
                      <optgroup label="Servicios públicos">
                        <SelectOption value={"alcantarillado"}>
                          Alcantarillado
                      </SelectOption>
                        <SelectOption value={"recoleccion-basuras"}>
                          Recolección de basuras
                      </SelectOption>
                        <SelectOption value={"electricidad"}>
                          Electricidad
                      </SelectOption>
                      </optgroup>
                    </SelectInput>
                    <EmptyHolder />
                    <EmptyHolder />
                    <EmptyHolderSmall />
                    <SelectInput
                      name={"government"}
                      value={this.state.governmentValue}
                      onChange={this.handleChange}
                    >
                      <SelectOption value={""}>
                        Seleccione una opción
                    </SelectOption>
                      <SelectOption value={"seguridad"}>
                        Seguridad
                    </SelectOption>
                      <SelectOption value={"promocion"}>
                        Promoción
                    </SelectOption>
                      <SelectOption value={"otros"}>
                        Otros...
                    </SelectOption>
                    </SelectInput>
                  </VerticalLayout>
                  <VerticalLayout>
                    <EmptyHolder />
                    <EmptyHolderSmall />
                    <Input
                      name={"agriculture-input"}
                      value={this.state.agricultureInputValue}
                      onChange={this.handleChange}
                    />
                    <Input
                      name={"services-input"}
                      value={this.state.servicesInputValue}
                      onChange={this.handleChange}
                    />
                    <EmptyHolder />
                    <EmptyHolder />
                    <EmptyHolderSmall />
                    <Input
                      name={"government-input"}
                      value={this.state.governmentInputValue}
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
  graphql(addActividadesEconomicasMutation, { name: "addActividadesEconomicasMutation" }),
  graphql(getEncuestaQuery, { name: "getEncuestaQuery" })
)(ActividadesEconomicas);