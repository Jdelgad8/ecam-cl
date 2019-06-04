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

const addTecnologiaMutation = gql`
  mutation(
    $surveyId: String!,
    $conveyanceValue: String,
    $quantityValue: Int,
    $peopleservedValue: Int,
    $amountOfChargeValue: Int,
    $yearOfProductionValue: Int,
    $motorTypeValue: String,
    $impactValue: String,
  ) {
    addTecnologia(
      id_encuesta: $surveyId,
      medio_transporte: $conveyanceValue,
      cantidad: $quantityValue,
      personas_servidas: $peopleservedValue,
      cantidad_carga: $amountOfChargeValue,
      ano_fabricacion: $yearOfProductionValue,
      tipo_motor: $motorTypeValue,
      impacto: $impactValue,
    ){
      id
      id_encuesta
      medio_transporte
      cantidad
      personas_servidas
      cantidad_carga
      ano_fabricacion
      tipo_motor
      impacto
    }
  }
`

const getTecnologiasQuery = gql`
  {
    tecnologias{
      id
      id_encuesta
      medio_transporte
      cantidad
      personas_servidas
      cantidad_carga
      ano_fabricacion
      tipo_motor
      impacto
    }
  }
`

const getTecnologiaQuery = gql`
  query($id: ID){
    tecnologia(id: $id){
      id
      id_encuesta
      medio_transporte
      cantidad
      personas_servidas
      cantidad_carga
      ano_fabricacion
      tipo_motor
      impacto
    }
  }
`

export { getTecnologiasQuery, getTecnologiaQuery, getEncuestaQuery, addTecnologiaMutation };

