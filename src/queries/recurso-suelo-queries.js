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
const addRecursoSueloMutation = gql`
  mutation(
    $surveyId: String,
    $seasonValue: String,
    $availabilityValue: String,
    $areaValue: Float,
    $qualityValue: String,
  ){
    addRecursoSuelo(
      id_encuesta: $surveyId,
      estacion: $seasonValue,
      disponibilidad: $availabilityValue,
      area: $areaValue,
      calidad: $qualityValue,
    ){
      id
      id_encuesta
      estacion
      disponibilidad
      area
      calidad
    }
  }
`

const getRecursoSueloQuery = gql`
  {
    recursosSuelo{
      id
      id_encuesta
      estacion
      disponibilidad
      area
      calidad
    }
  }
`

const getRecursoQuery = gql`
  query($id: ID){
    recurso(id: $id){
      id
      id_encuesta
      estacion
      disponibilidad
      area
      calidad
    }
  }
`

export { getRecursoQuery, getEncuestaQuery, getRecursoSueloQuery, addRecursoSueloMutation };

