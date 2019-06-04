import React, { Component } from 'react';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import Header from '../../../common/components/header';
import HorizontalLayout from '../../../common/components/horizontal-layout';
import SelectInput from '../../../common/components/select-input';
import SelectOption from '../../../common/components/select-option';
import VerticalLayout from '../../../common/components/vertical-layout';
import DisplayActividadesEconomicas from '../components/display-actividades-economicas';
import DisplayAcueductos from '../components/display-acueductos';
import DisplayComunicaciones from '../components/display-comunicaciones';
import DisplayEducacion from '../components/display-educacion';
import DisplayPrincipal from '../components/display-principal';
import DisplayRecursoSuelo from '../components/display-recurso-suelo';
import DisplaySalud from '../components/display-salud';
import DisplayServiciosBasicos from '../components/display-servicios-basicos';
import DisplayTecnologia from '../components/display-tecnologia';
import DisplayVias from '../components/display-vias';
import DisplayVivienda from '../components/display-vivienda';
import DisplayImpactos from '../components/displayImpactos';

class Resultados extends Component {
  state = {
    surveyId: '',
  }

  handleCategoriesChange = (event) => {
    const target = event.target;
    const value = target.value
    this.setState({
      categoriesValue: value
    });

  }

  displayDetails() {
    switch (this.state.categoriesValue) {
      case "datos":
        return <DisplayPrincipal />
      case "impactos":
        return <DisplayImpactos />
      case "recurso-suelo":
        return <DisplayRecursoSuelo />
      case "acueductos":
        return <DisplayAcueductos />
      case "tecnologia":
        return <DisplayTecnologia />
      case "vias":
        return <DisplayVias />
      case "educacion":
        return <DisplayEducacion />
      case "comunicaciones":
        return <DisplayComunicaciones />
      case "servicios-basicos":
        return <DisplayServiciosBasicos />
      case "vivienda":
        return <DisplayVivienda />
      case "salud":
        return <DisplaySalud />
      case "actividades-economicas":
        return <DisplayActividadesEconomicas />
      default:
        return <CenterFormLayout>
          <BlackTitle>
            No a seleccionado ninguna categoría
          </BlackTitle>
        </CenterFormLayout>;
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    console.log(this.state.surveyId);
    this.setState({
      surveyId: value,
    });
  }

  displayPreview() {
    const data = this.props.getEncuestaQuery;
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
      <VerticalLayout>
        <Header>
          Resultados Encuestas
          </Header>
        <CenterFormLayout>
          <HorizontalLayout>
            {/* <BlackTitle>
              Seleccione una encuesta
            </BlackTitle>
            <SelectInput
              name={"survey-id"}
              value={this.state.surveyId}
              onChange={this.handleChange}
            >
              <option>Seleccione una opción</option>
              {this.displayPreview()}
            </SelectInput> */}
            <BlackTitle>
              Seleccione una categoría
              </BlackTitle>
            <SelectInput
              name={"categories"}
              value={this.state.categoriesValue}
              onChange={this.handleCategoriesChange}
            >
              <SelectOption
                value={""}
              >
                Seleccione una opción...
                </SelectOption>
              <SelectOption
                value={"datos"}
              >
                Datos principales
                </SelectOption>
              <SelectOption
                value={"impactos"}
              >
                Impactos
                </SelectOption>
              <SelectOption
                value={"recurso-suelo"}
              >
                Recurso suelo
                </SelectOption>
              <SelectOption
                value={"acueductos"}
              >
                Acueductos
                </SelectOption>
              <SelectOption
                value={"tecnologia"}
              >
                Tecnología
                </SelectOption>
              <SelectOption
                value={"vias"}
              >
                Vías
                </SelectOption>
              <SelectOption
                value={"educacion"}
              >
                Educación
                </SelectOption>
              <SelectOption
                value={"comunicaciones"}
              >
                Comunicaciones
                </SelectOption>
              <SelectOption
                value={"servicios-basicos"}
              >
                Servicios básicos
                </SelectOption>
              <SelectOption
                value={"vivienda"}
              >
                Vivienda
                </SelectOption>
              <SelectOption
                value={"salud"}
              >
                Salud
                </SelectOption>
              <SelectOption
                value={"actividades-economicas"}
              >
                Actividades económicas
                </SelectOption>
            </SelectInput>
          </HorizontalLayout>
          <VerticalLayout>
            {this.displayDetails()}
          </VerticalLayout>
          {/* <DetallesEncuesta surveyId={this.state.surveyId} /> */}
        </CenterFormLayout>
      </VerticalLayout>
    );
  }

}

export default Resultados;