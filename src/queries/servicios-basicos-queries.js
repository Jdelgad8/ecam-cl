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

const addServiciosBasicosMutation = gql`
  mutation(
    $surveyId: String!,
    $accesValue: String,
    $servicesValue: String,
    $enviromentalValue: String,
    $socialConflictValue: String,
    $incomeVolatilityValue: String,
    $otherValue: String,
  ) {
    addServiciosBasicos(
      id_encuesta: $surveyId,
      acceso: $accesValue,
      servicios: $servicesValue,
      ambientales: $enviromentalValue,
      conflicto_social: $socialConflictValue,
      volatilidad: $incomeVolatilityValue,
      otro: $otherValue,
    ){
      id
      id_encuesta
      acceso
      servicios
      ambientales
      conflicto_social
      volatilidad
      otro
    }
  }
`

const getServiciosBasicosQuery = gql`
  {
    serviciosBasicos{
      id
      id_encuesta
      acceso
      servicios
      ambientales
      conflicto_social
      volatilidad
      otro
    }
  }
`

const getServicioBasicoQuery = gql`
  query($id: ID){
    servicioBasico(id: $id){
      id
      id_encuesta
      acceso
      servicios
      ambientales
      conflicto_social
      volatilidad
      otro
    }
  }
`

export { getServicioBasicoQuery, getServiciosBasicosQuery, getEncuestaQuery, addServiciosBasicosMutation };

