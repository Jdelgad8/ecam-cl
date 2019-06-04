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

const addSaludMutation = gql`
  mutation(
    $surveyId: String!,
    $lifeExpectancyValue: String,
    $malnutritionValue: String,
    $numberOfVisitsValue: Int,
    $yearValue: Int,
    $persValue: Int,
    $impactExpositionValue: String,
    $socialConflictValue: String,
    $accessToLandValue: String,
    $povertyValue: String,
    $unemploymentValue: String
  ) {
    addSalud(
      id_encuesta: $surveyId,
      esperanza_vida: $lifeExpectancyValue,
      desnutricion: $malnutritionValue,
      numero_visitas: $numberOfVisitsValue,
      ano: $yearValue,
      personas: $persValue,
      exposicion_impactos: $impactExpositionValue,
      conflicto_social: $socialConflictValue,
      acceso_tierra: $accessToLandValue,
      pobreza: $povertyValue,
      desempleo: $unemploymentValue
    ){
      id
      id_encuesta
      esperanza_vida
      desnutricion
      numero_visitas
      ano
      personas
      exposicion_impactos
      conflicto_social
      acceso_tierra
      pobreza
      desempleo
    }
  }
`

const getSaludesQuery = gql`
  {
    saludes{
      id
      id_encuesta
      esperanza_vida
      desnutricion
      numero_visitas
      ano
      personas
      exposicion_impactos
      conflicto_social
      acceso_tierra
      pobreza
      desempleo
    }
  }
`

const getSaludQuery = gql`
  query($id: ID){
    salud(id: $id){
      id
      id_encuesta
      esperanza_vida
      desnutricion
      numero_visitas
      ano
      personas
      exposicion_impactos
      conflicto_social
      acceso_tierra
      pobreza
      desempleo
    }
  }
`

export { getSaludQuery, getSaludesQuery, getEncuestaQuery, addSaludMutation };

