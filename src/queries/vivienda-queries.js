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

const addViviendaMutation = gql`
  mutation(
    $surveyId: String!,
    $enviromentalValue: String,
    $socialConflictValue: String,
    $povertyValue: String,
    $otherValue: String,
    $constructionMaterialValue: String,
    $numberOfPeopleValue: Int,
  ) {
    addVivienda(
      id_encuesta: $surveyId,
      ambientales: $enviromentalValue,
      conflicto_social: $socialConflictValue,
      pobreza: $povertyValue,
      otro: $otherValue,
      material_construccion:$constructionMaterialValue,
      numero_personas: $numberOfPeopleValue,
    ){
      id
      id_encuesta
      ambientales
      conflicto_social
      pobreza
      otro
      material_construccion
      numero_personas
    }
  }
`

const getViviendasQuery = gql`
  {
    viviendas{
      id
      id_encuesta
      ambientales
      conflicto_social
      pobreza
      otro
      material_construccion
      numero_personas
    }
  }
`
const getViviendaQuery = gql`
  query($id: ID){
    vivienda(id: $id){
      id
      id_encuesta
      ambientales
      conflicto_social
      pobreza
      otro
      material_construccion
      numero_personas
    }
  }
`

export { getViviendasQuery, getViviendaQuery, getEncuestaQuery, addViviendaMutation };

