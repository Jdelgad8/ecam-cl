import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import ActividadesEconomicas from "./pages/actividades-economicas/containers/actividades-economicas";
import Acueductos from "./pages/acueductos/containers/acueductos";
import Comunicaciones from "./pages/comunicaciones/containers/comunicaciones";
import Educacion from "./pages/educacion/containers/educacion";
import Gather from "./pages/gather/containers/encuesta";
import Impactos from "./pages/impactos/containers/impactos";
import Index from "./pages/index/containers/index";
import Main from "./pages/main/containers/main";
import RecursoSuelo from "./pages/recurso-suelo/containers/recurso-suelo";
import Resultados from "./pages/resultados/containers/resultados";
import Salud from "./pages/salud/containers/salud";
import ServiciosBasicos from "./pages/servicios-basicos/containers/servicios-basicos";
import Tecnologia from "./pages/tecnologia/containers/tecnologia";
import Vias from "./pages/vias/containers/vias";
import Vivienda from "./pages/vivienda/containers/vivienda";

const index = document.getElementById("index");

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: "http://localhost:5000/graphql",
      /* credentials: 'same-origin' */
    }),
  ]),
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div>
        <Route path="/" component={Index} exact />
        {/*         <Route path="/registro" component={SignUp} />
        <Route path="/ingreso" component={Login} /> */}
        <Route path="/recolectar" component={Gather} />
        <Route path="/main" component={Main} />
        <Route path="/impactos" component={Impactos} />
        <Route path="/recurso-suelo" component={RecursoSuelo} />
        <Route path="/acueductos" component={Acueductos} />
        <Route path="/tecnologia" component={Tecnologia} />
        <Route path="/vias" component={Vias} />
        <Route path="/educacion" component={Educacion} />
        <Route path="/comunicaciones" component={Comunicaciones} />
        <Route path="/servicios-basicos" component={ServiciosBasicos} />
        <Route path="/vivienda" component={Vivienda} />
        <Route path="/salud" component={Salud} />
        <Route
          path="/actividades-economicas"
          component={ActividadesEconomicas}
        />
        <Route path="/resultados" component={Resultados} />
      </div>
    </BrowserRouter>
  </ApolloProvider>,
  index
);
