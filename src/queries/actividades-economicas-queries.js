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

const addActividadesEconomicasMutation = gql`
  mutation(
    $surveyId: String!,
    $industryValue: String,
    $agricultureValue: String,
    $servicesValue: String,
    $governmentValue: String,
    $agricultureInputValue: String,
    $servicesInputValue: String,
    $governmentInputValue: String,
  ) {
    addActividadesEconomicas(
      id_encuesta: $surveyId,
      industria: $industryValue,
      agricultura_cantidad: $agricultureValue,
      servicios_cantidad: $servicesValue,
      gobierno_cantidad: $governmentValue,
      agricultura_opcion: $agricultureInputValue,
      servicios_opcion: $servicesInputValue,
      gobierno_opcion: $governmentInputValue,
    ){
      id
      id_encuesta
      industria
      agricultura_opcion
      agricultura_cantidad
      servicios_opcion
      servicios_cantidad
      gobierno_opcion
      gobierno_cantidad

    }
  }
`

const getActividadesEconomicasQuery = gql`
  {
    actividadesEconomicas{
      id
      id_encuesta
      industria
      agricultura_opcion
      agricultura_cantidad
      servicios_opcion
      servicios_cantidad
      gobierno_opcion
      gobierno_cantidad
    }
  }
`

const getActividadEconomicaQuery = gql`
  query($id: ID){
    actividadEconomica(id: $id){
      id
      id_encuesta
      industria
      agricultura_opcion
      agricultura_cantidad
      servicios_opcion
      servicios_cantidad
      gobierno_opcion
      gobierno_cantidad
    }
  }

`

export { getActividadesEconomicasQuery, getEncuestaQuery, addActividadesEconomicasMutation, getActividadEconomicaQuery };

