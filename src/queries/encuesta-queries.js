import { gql } from 'apollo-boost';

const getEncuestadorQuery = gql`
  {
    encuestadores{
      id
      nombres
      apellidos
    }
  }
`

const addEncuestaMutation = gql`
  mutation(
    $encuestadorId: String!,
    $nameValue: String,
    $siteNameValue: String!,
    $enviromentValue: String!,
    $companyValue: String!,
    $productiveSectorValue: String!,
    $latitudeValue: Float!,
    $longitudeValue: Float!,
    $olcCodeValue: Int,
    $urlValue: String,
    $descriptionValue: String!,
  ) {
    addEncuesta(
      id_encuestador: $encuestadorId,
      nombre_encuestado: $nameValue,
      nombre_sitio: $siteNameValue,
      nicho_ambiente: $enviromentValue,
      empresa: $companyValue,
      sector_productivo: $productiveSectorValue,
      latitud: $latitudeValue,
      longitud: $longitudeValue,
      codigo_olc: $olcCodeValue,
      url: $urlValue,
      descripcion: $descriptionValue,
    ) {
      id
      id_encuestador
      nombre_encuestado
      nombre_sitio
      nicho_ambiente
      empresa
      sector_productivo
      latitud
      longitud
      codigo_olc
      url
      descripcion
    }
  }
`

const getEncuestasQuery = gql`
  {
    encuestas{
      id
      id_encuestador
      nombre_encuestado
      nombre_sitio
      nicho_ambiente
      empresa
      sector_productivo
      latitud
      longitud
      codigo_olc
      url
      descripcion
    }
  }
`


export { getEncuestasQuery, addEncuestaMutation, getEncuestadorQuery };

