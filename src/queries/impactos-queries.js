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

const addImpactosMutation = gql`
  mutation(
    $surveyId: String!,
    $impactValue: String,
    $industrialMagnitudeValue: String,
    $industrialConsequencesValue: String,
    $comercialMagnitudeValue: String,
    $comercialConsequencesValue: String,
    $humanMagnitudeValue: String,
    $humanConsequencesValue: String,
  ) {
    addImpactos(
      id_encuesta: $surveyId,
      impactos: $impactValue,
      magnitud_industrial: $industrialMagnitudeValue,
      consecuencias_industrial: $industrialConsequencesValue,
      magnitud_comercial: $comercialMagnitudeValue,
      consecuencias_comercial: $comercialConsequencesValue,
      magnitud_humano: $humanMagnitudeValue,
      consecuencias_humano: $humanConsequencesValue,
    ){
      id
      id_encuesta
      impactos
      magnitud_industrial
      consecuencias_industrial
      magnitud_comercial
      consecuencias_comercial
      magnitud_humano
      consecuencias_humano
    }
  }
`
const getImpactosQuery = gql`
  {
    impactos{
      id
      id_encuesta
      impactos
      magnitud_industrial
      consecuencias_industrial
      magnitud_comercial
      consecuencias_comercial
      magnitud_humano
      consecuencias_humano
    }
  }
`

const getImpactoQuery = gql`
  query($id: ID){
    impacto(id: $id){
      id
      id_encuesta
      impactos
      magnitud_industrial
      consecuencias_industrial
      magnitud_comercial
      consecuencias_comercial
      magnitud_humano
      consecuencias_humano
    }
  }
`

export { getImpactoQuery, addImpactosMutation, getImpactosQuery, getEncuestaQuery };

