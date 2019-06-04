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

const addViasMutation = gql`
  mutation(
    $surveyId: String!,
    $trackTypeValue: String,
    $monetaryLossesValue: Float,
    $travelTimeValue: String,
    $travelCostValue: Float,
    $presentedinValue: String,
    $seasonValue: String,
    $operationValue: String,
    $budgetValue: Float,
    $sourceValue: String,
    $quantityvalue: Int,
    $monthValue: String,
  ) {
    addVias(
      id_encuesta: $surveyId,
      tipo_via: $trackTypeValue,
      perdidas_monetarias: $monetaryLossesValue,
      tiempo_desplazamiento: $travelTimeValue,
      costo_desplazamiento: $travelCostValue,
      presenta: $presentedinValue,
      estacion: $seasonValue,
      operacion: $operationValue,
      presupuesto: $budgetValue,
      fuente: $sourceValue,
      cantidad: $quantityvalue,
      mes: $monthValue,
    ){
      id
      id_encuesta
      tipo_via
      perdidas_monetarias
      tiempo_desplazamiento
      costo_desplazamiento
      presenta
      estacion
      operacion
      presupuesto
      fuente
      cantidad
      mes
    }
  }
`

const getViasQuery = gql`
  {
    vias{
      id
      id_encuesta
      tipo_via
      perdidas_monetarias
      tiempo_desplazamiento
      costo_desplazamiento
      presenta
      estacion
      operacion
      presupuesto
      fuente
      cantidad
      mes
    }
  }
`

const getViaQuery = gql`
  query($id: ID){
    via(id: $id){
      id
      id_encuesta
      tipo_via
      perdidas_monetarias
      tiempo_desplazamiento
      costo_desplazamiento
      presenta
      estacion
      operacion
      presupuesto
      fuente
      cantidad
      mes
    }
  }
`

export { getViaQuery, getViasQuery, getEncuestaQuery, addViasMutation };

