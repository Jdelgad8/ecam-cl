import { gql } from 'apollo-boost';



const loginMutation = gql`
  mutation LoginMutation(
    $emailValue: String!,
    $passwordValue: String!
    ){
      login(
        correo: $emailValue,
        password: $passwordValue
      ) {
        token
      }
    }
`

export { loginMutation };

