import { gql } from 'apollo-boost';

const getEncuestaQuery = gql`
  {
    encuestas{
      id
      nombre_encuestado
      nombre_sitio
    }
  }
`

const addEducacionMutation = gql`
  mutation(
    $surveyId: String!,
    $noEducatedGraduatedPeopleValue: Int,
    $noEducatedInProgressPeopleValue: Int,
    $noEducatedMarketRequirementsPeopleValue: Int,
    $schoolEducativeCenterssCapacityValue: Int,
    $schoolProgramsCapacityValue: Int,
    $schoolSalonsCapacityValue: Int,
    $schoolStudentsCapacityValue: Int,
    $primaryGraduatedPeopleValue: Int,
    $primaryInProgressPeopleValue: Int,
    $primaryMarketRequirementsPeopleValue: Int,
    $collegeEducativeCentersCapacityValue: Int,
    $collegeProgramsCapacityValue: Int,
    $collegeSalonsCapacityValue: Int,
    $collegeStudentsCapacityValue: Int,
    $highSchoolGraduatedPeopleValue: Int,
    $highSchoolInProgressPeopleValue: Int,
    $highSchoolMarketRequirementsPeopleValue: Int,
    $instituteEducativeCentersCapacityValue: Int,
    $instituteProgramsCapacityValue: Int,
    $instituteSalonsCapacityValue: Int,
    $instituteStudentsCapacityValue: Int,
    $tecnologyGraduatedPeopleValue: Int,
    $tecnologyInProgressPeopleValue: Int,
    $tecnologyMarketRequirementsPeopleValue: Int,
    $universityEducativeCentersCapacityValue: Int,
    $universityProgramsCapacityValue: Int,
    $universitySalonsCapacityValue: Int,
    $universityStudentsCapacityValue: Int,
    $professionalGraduatedPeopleValue: Int,
    $professionalInProgressPeopleValue: Int,
    $professionalMarketRequirementPeopleValue: Int,
    $specializationGraduatedPeopleValue: Int,
    $specializationInProgressPeopleValue: Int,
    $specializationMarketRequirementPeopleValue: Int,
    $doctorateGraduatedPeopleValue: Int,
    $doctorateInProgressPeopleValue: Int,
    $doctorateMarketRequirementPeopleValue: Int,
  ) {
    addEducacion(
      id_encuesta: $surveyId,
      graduados_eduacion: $noEducatedGraduatedPeopleValue,
      curso_eduacion: $noEducatedInProgressPeopleValue,
      requerimiento_eduacion: $noEducatedMarketRequirementsPeopleValue,
      centros_escuela: $schoolEducativeCenterssCapacityValue,
      programas_escuela: $schoolProgramsCapacityValue,
      salones_escuela: $schoolSalonsCapacityValue,
      estudiantes_escuela: $schoolStudentsCapacityValue,
      graduados_primaria: $primaryGraduatedPeopleValue,
      curso_primaria: $primaryInProgressPeopleValue,
      requerimiento_primaria: $primaryMarketRequirementsPeopleValue,
      centros_colegio: $collegeEducativeCentersCapacityValue,
      programas_colegio: $collegeProgramsCapacityValue,
      salones_colegio: $collegeSalonsCapacityValue,
      estudiantes_colegio: $collegeStudentsCapacityValue,
      graduados_secundaria: $highSchoolGraduatedPeopleValue,
      curso_secundaria: $highSchoolInProgressPeopleValue,
      requerimiento_secundaria: $highSchoolMarketRequirementsPeopleValue,
      centros_instituto: $instituteEducativeCentersCapacityValue,
      programas_instituto: $instituteProgramsCapacityValue,
      salones_instituto: $instituteSalonsCapacityValue,
      estudiantes_instituto: $instituteStudentsCapacityValue,
      graduados_tecnologia: $tecnologyGraduatedPeopleValue,
      curso_tecnologia: $tecnologyInProgressPeopleValue,
      requerimiento_tecnologia: $tecnologyMarketRequirementsPeopleValue,
      centros_universidad: $universityEducativeCentersCapacityValue,
      programas_universidad: $universityProgramsCapacityValue,
      salones_universidad: $universitySalonsCapacityValue,
      estudiantes_universidad: $universityStudentsCapacityValue,
      graduados_profesional: $professionalGraduatedPeopleValue,
      curso_profesional: $professionalInProgressPeopleValue,
      requerimiento_profesional: $professionalMarketRequirementPeopleValue,
      graduados_especializacion: $specializationGraduatedPeopleValue,
      curso_especializacion: $specializationInProgressPeopleValue,
      requerimiento_especializacion: $specializationMarketRequirementPeopleValue,
      graduados_doctorado: $doctorateGraduatedPeopleValue,
      curso_doctorado: $doctorateInProgressPeopleValue,
      requerimiento_doctorado: $doctorateMarketRequirementPeopleValue,
    ){
      id
      id_encuesta
      graduados_eduacion
      curso_eduacion
      requerimiento_eduacion
      centros_escuela
      programas_escuela
      salones_escuela
      estudiantes_escuela
      graduados_primaria
      curso_primaria
      requerimiento_primaria
      centros_colegio
      programas_colegio
      salones_colegio
      estudiantes_colegio
      graduados_secundaria
      curso_secundaria
      requerimiento_secundaria
      centros_instituto
      programas_instituto
      salones_instituto
      estudiantes_instituto
      graduados_tecnologia
      curso_tecnologia
      requerimiento_tecnologia
      centros_universidad
      programas_universidad
      salones_universidad
      estudiantes_universidad
      graduados_profesional
      curso_profesional
      requerimiento_profesional
      graduados_especializacion
      curso_especializacion
      requerimiento_especializacion
      graduados_doctorado
      curso_doctorado
      requerimiento_doctorado
    }
  }
`

const getEducacionesQuery = gql`
  {
    educaciones{
      id
      id_encuesta
      graduados_eduacion
      curso_eduacion
      requerimiento_eduacion
      centros_escuela
      programas_escuela
      salones_escuela
      estudiantes_escuela
      graduados_primaria
      curso_primaria
      requerimiento_primaria
      centros_colegio
      programas_colegio
      salones_colegio
      estudiantes_colegio
      graduados_secundaria
      curso_secundaria
      requerimiento_secundaria
      centros_instituto
      programas_instituto
      salones_instituto
      estudiantes_instituto
      graduados_tecnologia
      curso_tecnologia
      requerimiento_tecnologia
      centros_universidad
      programas_universidad
      salones_universidad
      estudiantes_universidad
      graduados_profesional
      curso_profesional
      requerimiento_profesional
      graduados_especializacion
      curso_especializacion
      requerimiento_especializacion
      graduados_doctorado
      curso_doctorado
      requerimiento_doctorado
    }
  }
`

const getEducacionQuery = gql`
  query($id: ID){
    educacion(id: $id){
      id
      id_encuesta
      graduados_eduacion
      curso_eduacion
      requerimiento_eduacion
      centros_escuela
      programas_escuela
      salones_escuela
      estudiantes_escuela
      graduados_primaria
      curso_primaria
      requerimiento_primaria
      centros_colegio
      programas_colegio
      salones_colegio
      estudiantes_colegio
      graduados_secundaria
      curso_secundaria
      requerimiento_secundaria
      centros_instituto
      programas_instituto
      salones_instituto
      estudiantes_instituto
      graduados_tecnologia
      curso_tecnologia
      requerimiento_tecnologia
      centros_universidad
      programas_universidad
      salones_universidad
      estudiantes_universidad
      graduados_profesional
      curso_profesional
      requerimiento_profesional
      graduados_especializacion
      curso_especializacion
      requerimiento_especializacion
      graduados_doctorado
      curso_doctorado
      requerimiento_doctorado
    }
  }
`

export { getEducacionesQuery, getEducacionQuery, getEncuestaQuery, addEducacionMutation };

