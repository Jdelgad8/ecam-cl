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

const addAcueductoMutation = gql`
  mutation(
    $surveyId: String!,
    $seasonRecursoValue: String,
    $availabilityValue: String,
    $firstQuantityValue: Int,
    $requiretreatmentValue: String,
    $operationalFailuresValue: String,
    $lossesValue: Int,
    $damagesValue: String,
    $descriptionValue: String,
    $seasonValue: String,
    $operationValue: String,
    $budgetValue: Int,
    $populationServedValue: Int,
    $amountOfResourcesValue: Int
  ) {
    addAcueducto(
      id_encuesta: $surveyId,
      estacion_recurso: $seasonRecursoValue,
      disponibilidad: $availabilityValue,
      cantidad: $firstQuantityValue,
      requiere_tratamiento: $requiretreatmentValue,
      fallos: $operationalFailuresValue,
      perdidas: $lossesValue,
      danos: $damagesValue,
      descripcion: $descriptionValue,
      estacion: $seasonValue,
      operacion: $operationValue,
      presupuesto: $budgetValue,
      poblacion_atendida: $populationServedValue,
      cantidad_recursos: $amountOfResourcesValue
    ){
      id
      id_encuesta
      estacion_recurso
      disponibilidad
      cantidad
      requiere_tratamiento
      fallos
      perdidas
      danos
      descripcion
      estacion
      operacion
      presupuesto
      poblacion_atendida
      cantidad_recursos
    }
  }
`
const getAcueductosQuery = gql`
  {
    acueductos{
      id
      id_encuesta
      estacion_recurso
      disponibilidad
      cantidad
      requiere_tratamiento
      fallos
      perdidas
      danos
      descripcion
      estacion
      operacion
      presupuesto
      poblacion_atendida
      cantidad_recursos
    }
  }
`

const getAcueductoQuery = gql`
  query($id: ID){
    acueducto(id: $id){
      id
      id_encuesta
      estacion_recurso
      disponibilidad
      cantidad
      requiere_tratamiento
      fallos
      perdidas
      danos
      descripcion
      estacion
      operacion
      presupuesto
      poblacion_atendida
      cantidad_recursos
    }
  }
`

export { getAcueductoQuery, addAcueductoMutation, getAcueductosQuery, getEncuestaQuery };

