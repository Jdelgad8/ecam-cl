import { gql } from 'apollo-boost';

const addEncuestadorMutation = gql`
  mutation(
    $nameValue: String,
    $lastNameValue: String,
    $emailValue: String,
    $passwordValue: String,
  ) {
    addEncuestador(
      nombres: $nameValue,
      apellidos: $lastNameValue,
      correo: $emailValue,
      password: $passwordValue,
    ){
      nombres
      apellidos
      correo
      password
    }
  }
`
const getEncuestadoresQuery = gql`
  {
    encuestadores{
      id
      nombres
      apellidos
      correo
    }
  }
`

const getEncuestadorQuery = gql`
  query($id: ID){
    encuestador(id:$id){
      id
    }
  }
`

export { addEncuestadorMutation, getEncuestadoresQuery, getEncuestadorQuery };

