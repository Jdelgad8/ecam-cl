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

const addComunicacionesMutation = gql`
  mutation(
    $surveyId: String!,
    $homeInternetValue: Int,
    $homeCellphoneValue: Int,
    $bedroomsValue: Int,
    $moreValue: String
  ) {
    addComunicaciones(
      id_encuesta: $surveyId,
      internet: $homeInternetValue,
      celular: $homeCellphoneValue,
      habitaciones: $bedroomsValue,
      mas: $moreValue,
    ){
      id
      id_encuesta
      internet
      celular
      habitaciones
      mas
    }
  }
`

const getComunicacionesQuery = gql`
  {
    comunicaciones{
      id
      id_encuesta
      internet
      celular
      habitaciones
      mas
    }
  }
`

const getComunicacionQuery = gql`
  query($id: ID){
    comunicacion(id: $id){
      id
      id_encuesta
      internet
      celular
      habitaciones
      mas
    }
  }
`

export { getComunicacionQuery, getComunicacionesQuery, getEncuestaQuery, addComunicacionesMutation };

