import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BackgroundImageVias from '../../../common/components/background-image-vias';
import BlackTitle from '../../../common/components/black-title';
import BottomButtons from '../../../common/components/bottom-buttons';
import FormText from '../../../common/components/form-text';
import Header from '../../../common/components/header';
import HorizontalLayout from '../../../common/components/horizontal-layout';
import Input from '../../../common/components/input';
import SelectInput from '../../../common/components/select-input';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import { addEducacionMutation, getEncuestaQuery } from '../../../queries/educacion-queries';

class Educacion extends Component {
  state = {
    surveyId: '',
    noEducatedGraduatedPeopleValue: '',
    noEducatedInProgressPeopleValue: '',
    noEducatedMarketRequirementsPeopleValue: '',
    schoolEducativeCenterssCapacityValue: '',
    schoolProgramsCapacityValue: '',
    schoolSalonsCapacityValue: '',
    schoolStudentsCapacityValue: '',
    primaryGraduatedPeopleValue: '',
    primaryInProgressPeopleValue: '',
    primaryMarketRequirementsPeopleValue: '',
    collegeEducativeCentersCapacityValue: '',
    collegeProgramsCapacityValue: '',
    collegeSalonsCapacityValue: '',
    collegeStudentsCapacityValue: '',
    highSchoolGraduatedPeopleValue: '',
    highSchoolInProgressPeopleValue: '',
    highSchoolMarketRequirementsPeopleValue: '',
    instituteEducativeCentersCapacityValue: '',
    instituteProgramsCapacityValue: '',
    instituteSalonsCapacityValue: '',
    instituteStudentsCapacityValue: '',
    tecnologyGraduatedPeopleValue: '',
    tecnologyInProgressPeopleValue: '',
    tecnologyMarketRequirementsPeopleValue: '',
    universityEducativeCentersCapacityValue: '',
    universityProgramsCapacityValue: '',
    universitySalonsCapacityValue: '',
    universityStudentsCapacityValue: '',
    professionalGraduatedPeopleValue: '',
    professionalInProgressPeopleValue: '',
    professionalMarketRequirementPeopleValue: '',
    specializationGraduatedPeopleValue: '',
    specializationInProgressPeopleValue: '',
    specializationMarketRequirementPeopleValue: '',
    doctorateGraduatedPeopleValue: '',
    doctorateInProgressPeopleValue: '',
    doctorateMarketRequirementPeopleValue: '',
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
      case "no-educated-graduated":
        this.setState({
          noEducatedGraduatedPeopleValue: parseInt(value)
        })
        break;
      case "no-educated-in-progress":
        this.setState({
          noEducatedInProgressPeopleValue: parseInt(value)
        })
        break;
      case "no-educated-market-requirements":
        this.setState({
          noEducatedMarketRequirementsPeopleValue: parseInt(value)
        })
        break;
      case "school-educative-centers":
        this.setState({
          schoolEducativeCenterssCapacityValue: parseInt(value)
        })
        break;
      case "school-programs":
        this.setState({
          schoolProgramsCapacityValue: parseInt(value)
        })
        break;
      case "school-salons":
        this.setState({
          schoolSalonsCapacityValue: parseInt(value)
        })
        break;
      case "school-students":
        this.setState({
          schoolStudentsCapacityValue: parseInt(value)
        })
        break;
      case "primary-graduated":
        this.setState({
          primaryGraduatedPeopleValue: parseInt(value)
        })
        break;
      case "primary-in-progress":
        this.setState({
          primaryInProgressPeopleValue: parseInt(value)
        })
        break;
      case "primary-market-requirements":
        this.setState({
          primaryMarketRequirementsPeopleValue: parseInt(value)
        })
        break;
      case "college-educative-centers":
        this.setState({
          collegeEducativeCentersCapacityValue: parseInt(value)
        })
        break;
      case "college-programs":
        this.setState({
          collegeProgramsCapacityValue: parseInt(value)
        })
        break;
      case "college-salons":
        this.setState({
          collegeSalonsCapacityValue: parseInt(value)
        })
        break;
      case "college-students":
        this.setState({
          collegeStudentsCapacityValue: parseInt(value)
        })
        break;
      case "high-school-graduated":
        this.setState({
          highSchoolGraduatedPeopleValue: parseInt(value)
        })
        break;
      case "high-school-in-progress":
        this.setState({
          highSchoolInProgressPeopleValue: parseInt(value)
        })
        break;
      case "high-school-market-requirements":
        this.setState({
          highSchoolMarketRequirementsPeopleValue: parseInt(value)
        })
        break;
      case "institute-educative-centers":
        this.setState({
          instituteEducativeCentersCapacityValue: parseInt(value)
        })
        break;
      case "institute-programs":
        this.setState({
          instituteProgramsCapacityValue: parseInt(value)
        })
        break;
      case "institute-salons":
        this.setState({
          instituteSalonsCapacityValue: parseInt(value)
        })
        break;
      case "institute-students":
        this.setState({
          instituteStudentsCapacityValue: parseInt(value)
        })
        break;
      case "tecnology-graduated":
        this.setState({
          tecnologyGraduatedPeopleValue: parseInt(value)
        })
        break;
      case "tecnology-in-progress":
        this.setState({
          tecnologyInProgressPeopleValue: parseInt(value)
        })
        break;
      case "tecnology-market-requirements":
        this.setState({
          tecnologyMarketRequirementsPeopleValue: parseInt(value)
        })
        break;
      case "university-educative-centers":
        this.setState({
          universityEducativeCentersCapacityValue: parseInt(value)
        })
        break;
      case "university-programs":
        this.setState({
          universityProgramsCapacityValue: parseInt(value)
        })
        break;
      case "university-salons":
        this.setState({
          universitySalonsCapacityValue: parseInt(value)
        })
        break;
      case "university-students":
        this.setState({
          universityStudentsCapacityValue: parseInt(value)
        })
        break;
      case "professional-graduated":
        this.setState({
          professionalGraduatedPeopleValue: parseInt(value)
        })
        break;
      case "professional-in-progress":
        this.setState({
          professionalInProgressPeopleValue: parseInt(value)
        })
        break;
      case "professional-market-requirements":
        this.setState({
          professionalMarketRequirementPeopleValue: parseInt(value)
        })
        break;
      case "specialization-graduated":
        this.setState({
          specializationGraduatedPeopleValue: parseInt(value)
        })
        break;
      case "specialization-in-progress":
        this.setState({
          specializationInProgressPeopleValue: parseInt(value)
        })
        break;
      case "specialization-market-requirements":
        this.setState({
          specializationMarketRequirementPeopleValue: parseInt(value)
        })
        break;
      case "doctorate-graduated":
        this.setState({
          doctorateGraduatedPeopleValue: parseInt(value)
        })
        break;
      case "doctorate-in-progress":
        this.setState({
          doctorateInProgressPeopleValue: parseInt(value)
        })
        break;
      case "doctorate-market-requirements":
        this.setState({
          doctorateMarketRequirementPeopleValue: parseInt(value)
        })
        break;
      default:
    }
  }

  storeData = (event) => {
    this.props.addEducacionMutation({
      variables: {
        surveyId: this.state.surveyId,
        noEducatedGraduatedPeopleValue: this.state.noEducatedGraduatedPeopleValue,
        noEducatedInProgressPeopleValue: this.state.noEducatedInProgressPeopleValue,
        noEducatedMarketRequirementsPeopleValue: this.state.noEducatedMarketRequirementsPeopleValue,
        schoolEducativeCenterssCapacityValue: this.state.schoolEducativeCenterssCapacityValue,
        schoolProgramsCapacityValue: this.state.schoolProgramsCapacityValue,
        schoolSalonsCapacityValue: this.state.schoolSalonsCapacityValue,
        schoolStudentsCapacityValue: this.state.schoolStudentsCapacityValue,
        primaryGraduatedPeopleValue: this.state.primaryGraduatedPeopleValue,
        primaryInProgressPeopleValue: this.state.primaryInProgressPeopleValue,
        primaryMarketRequirementsPeopleValue: this.state.primaryMarketRequirementsPeopleValue,
        collegeEducativeCentersCapacityValue: this.state.collegeEducativeCentersCapacityValue,
        collegeProgramsCapacityValue: this.state.collegeProgramsCapacityValue,
        collegeSalonsCapacityValue: this.state.collegeSalonsCapacityValue,
        collegeStudentsCapacityValue: this.state.collegeStudentsCapacityValue,
        highSchoolGraduatedPeopleValue: this.state.highSchoolGraduatedPeopleValue,
        highSchoolInProgressPeopleValue: this.state.highSchoolInProgressPeopleValue,
        highSchoolMarketRequirementsPeopleValue: this.state.highSchoolMarketRequirementsPeopleValue,
        instituteEducativeCentersCapacityValue: this.state.instituteEducativeCentersCapacityValue,
        instituteProgramsCapacityValue: this.state.instituteProgramsCapacityValue,
        instituteSalonsCapacityValue: this.state.instituteSalonsCapacityValue,
        instituteStudentsCapacityValue: this.state.instituteStudentsCapacityValue,
        tecnologyGraduatedPeopleValue: this.state.tecnologyGraduatedPeopleValue,
        tecnologyInProgressPeopleValue: this.state.tecnologyInProgressPeopleValue,
        tecnologyMarketRequirementsPeopleValue: this.state.tecnologyMarketRequirementsPeopleValue,
        universityEducativeCentersCapacityValue: this.state.universityEducativeCentersCapacityValue,
        universityProgramsCapacityValue: this.state.universityProgramsCapacityValue,
        universitySalonsCapacityValue: this.state.universitySalonsCapacityValue,
        universityStudentsCapacityValue: this.state.universityStudentsCapacityValue,
        professionalGraduatedPeopleValue: this.state.professionalGraduatedPeopleValue,
        professionalInProgressPeopleValue: this.state.professionalInProgressPeopleValue,
        professionalMarketRequirementPeopleValue: this.state.professionalMarketRequirementPeopleValue,
        specializationGraduatedPeopleValue: this.state.specializationGraduatedPeopleValue,
        specializationInProgressPeopleValue: this.state.specializationInProgressPeopleValue,
        specializationMarketRequirementPeopleValue: this.state.specializationMarketRequirementPeopleValue,
        doctorateGraduatedPeopleValue: this.state.doctorateGraduatedPeopleValue,
        doctorateInProgressPeopleValue: this.state.doctorateInProgressPeopleValue,
        doctorateMarketRequirementPeopleValue: this.state.doctorateMarketRequirementPeopleValue
      }
    });
    this.setState({
      noEducatedGraduatedPeopleValue: '',
      noEducatedInProgressPeopleValue: '',
      noEducatedMarketRequirementsPeopleValue: '',
      schoolEducativeCenterssCapacityValue: '',
      schoolProgramsCapacityValue: '',
      schoolSalonsCapacityValue: '',
      schoolStudentsCapacityValue: '',
      primaryGraduatedPeopleValue: '',
      primaryInProgressPeopleValue: '',
      primaryMarketRequirementsPeopleValue: '',
      collegeEducativeCentersCapacityValue: '',
      collegeProgramsCapacityValue: '',
      collegeSalonsCapacityValue: '',
      collegeStudentsCapacityValue: '',
      highSchoolGraduatedPeopleValue: '',
      highSchoolInProgressPeopleValue: '',
      highSchoolMarketRequirementsPeopleValue: '',
      instituteEducativeCentersCapacityValue: '',
      instituteProgramsCapacityValue: '',
      instituteSalonsCapacityValue: '',
      instituteStudentsCapacityValue: '',
      tecnologyGraduatedPeopleValue: '',
      tecnologyInProgressPeopleValue: '',
      tecnologyMarketRequirementsPeopleValue: '',
      universityEducativeCentersCapacityValue: '',
      universityProgramsCapacityValue: '',
      universitySalonsCapacityValue: '',
      universityStudentsCapacityValue: '',
      professionalGraduatedPeopleValue: '',
      professionalInProgressPeopleValue: '',
      professionalMarketRequirementPeopleValue: '',
      specializationGraduatedPeopleValue: '',
      specializationInProgressPeopleValue: '',
      specializationMarketRequirementPeopleValue: '',
      doctorateGraduatedPeopleValue: '',
      doctorateInProgressPeopleValue: '',
      doctorateMarketRequirementPeopleValue: ''
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
              Educación
          </Header>
            <HorizontalLayout>
              <VerticalLayout>
                <BlackTitle>
                  Personas
              </BlackTitle>
                <FormText>
                  Graduados
              </FormText>
                <FormText>
                  En curso
              </FormText>
                <FormText>
                  Requerimientos del mercado
              </FormText>
                <BlackTitle>
                  Capacidad
              </BlackTitle>
                <FormText>
                  # centros educativos
              </FormText>
                <FormText>
                  # programas
              </FormText>
                <FormText>
                  # salones
              </FormText>
                <FormText>
                  # estudiantes
              </FormText>
              </VerticalLayout>
              <VerticalLayout>
                <FormText>
                  Sin educación
              </FormText>
                <Input
                  name={"no-educated-graduated"}
                  value={this.state.noEducatedGraduatedPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"no-educated-in-progress"}
                  value={this.state.noEducatedInProgressPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"no-educated-market-requirements"}
                  value={this.state.noEducatedMarketRequirementsPeopleValue}
                  onChange={this.handleChange}
                />
                <FormText>
                  Escuela
              </FormText>
                <Input
                  name={"school-educative-centers"}
                  value={this.state.schoolEducativeCenterssCapacityValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"school-programs"}
                  value={this.state.schoolProgramsCapacityValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"school-salons"}
                  value={this.state.schoolSalonsCapacityValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"school-students"}
                  value={this.state.schoolStudentsCapacityValue}
                  onChange={this.handleChange}
                />
              </VerticalLayout>
              <VerticalLayout>
                <FormText>
                  Primaria
              </FormText>
                <Input
                  name={"primary-graduated"}
                  value={this.state.primaryGraduatedPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"primary-in-progress"}
                  value={this.state.primaryInProgressPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"primary-market-requirements"}
                  value={this.state.primaryMarketRequirementsPeopleValue}
                  onChange={this.handleChange}
                />
                <FormText>
                  Colegio
              </FormText>
                <Input
                  name={"college-educative-centers"}
                  value={this.state.collegeEducativeCentersCapacityValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"college-programs"}
                  value={this.state.collegeProgramsCapacityValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"college-salons"}
                  value={this.state.collegeSalonsCapacityValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"college-students"}
                  value={this.state.collegeStudentsCapacityValue}
                  onChange={this.handleChange}
                />
              </VerticalLayout>
              <VerticalLayout>
                <FormText>
                  Secundaria
              </FormText>
                <Input
                  name={"high-school-graduated"}
                  value={this.state.highSchoolGraduatedPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"high-school-in-progress"}
                  value={this.state.highSchoolInProgressPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"high-school-market-requirements"}
                  value={this.state.highSchoolMarketRequirementsPeopleValue}
                  onChange={this.handleChange}
                />
                <FormText>
                  Instituto
              </FormText>
                <Input
                  name={"institute-educative-centers"}
                  value={this.state.instituteEducativeCentersCapacityValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"institute-programs"}
                  value={this.state.instituteProgramsCapacityValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"institute-salons"}
                  value={this.state.instituteSalonsCapacityValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"institute-students"}
                  value={this.state.instituteStudentsCapacityValue}
                  onChange={this.handleChange}
                />
              </VerticalLayout>
              <VerticalLayout>
                <FormText>
                  Tecnología
              </FormText>
                <Input
                  name={"tecnology-graduated"}
                  value={this.state.tecnologyGraduatedPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"tecnology-in-progress"}
                  value={this.state.tecnologyInProgressPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"tecnology-market-requirements"}
                  value={this.state.tecnologyMarketRequirementsPeopleValue}
                  onChange={this.handleChange}
                />
                <FormText>
                  Universidad
              </FormText>
                <Input
                  name={"university-educative-centers"}
                  value={this.state.universityEducativeCentersCapacityValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"university-programs"}
                  value={this.state.universityProgramsCapacityValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"university-salons"}
                  value={this.state.universitySalonsCapacityValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"university-students"}
                  value={this.state.universityStudentsCapacityValue}
                  onChange={this.handleChange}
                />
              </VerticalLayout>
              <VerticalLayout>
                <FormText>
                  Profesional
              </FormText>
                <Input
                  name={"professional-graduated"}
                  value={this.state.professionalGraduatedPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"professional-in-progress"}
                  value={this.state.professionalInProgressPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"professional-market-requirements"}
                  value={this.state.professionalMarketRequirementPeopleValue}
                  onChange={this.handleChange}
                />
              </VerticalLayout>
              <VerticalLayout>
                <FormText>
                  Especialización
              </FormText>
                <Input
                  name={"specialization-graduated"}
                  value={this.state.specializationGraduatedPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"specialization-in-progress"}
                  value={this.state.specializationInProgressPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"specialization-market-requirements"}
                  value={this.state.specializationMarketRequirementPeopleValue}
                  onChange={this.handleChange}
                />
              </VerticalLayout>
              <VerticalLayout>
                <FormText>
                  Doctorado
              </FormText>
                <Input
                  name={"doctorate-graduated"}
                  value={this.state.doctorateGraduatedPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"doctorate-in-progress"}
                  value={this.state.doctorateInProgressPeopleValue}
                  onChange={this.handleChange}
                />
                <Input
                  name={"doctorate-market-requirements"}
                  value={this.state.doctorateMarketRequirementPeopleValue}
                  onChange={this.handleChange}
                />
              </VerticalLayout>
            </HorizontalLayout>
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
            <BottomButtons onClick={this.storeData} />
          </VerticalLayout>
        </BackgroundImageVias>
      </HandleError>
    )
  }
}

export default compose(
  graphql(addEducacionMutation, { name: "addEducacionMutation" }),
  graphql(getEncuestaQuery, { name: "getEncuestaQuery" })
)(Educacion);