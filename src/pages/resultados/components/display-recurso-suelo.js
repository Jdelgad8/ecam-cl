import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import { getRecursoSueloQuery } from '../../../queries/recurso-suelo-queries';
import '../styles/table.css';

class DisplayRecursoSuelo extends Component {
  getRecursoSuelo() {
    var data = this.props.getRecursoSueloQuery;
    if (data.loading) {
      return (
        <CenterFormLayout>
          <BlackTitle>
            Cargando datos...
          </BlackTitle>
        </CenterFormLayout>
      );
    } else {
      return data.recursosSuelo.map(recursoSuelo => {
        return (
          <tr key={recursoSuelo.id}>
            <td>
              {recursoSuelo.estacion}
            </td>
            <td>
              {recursoSuelo.disponibilidad}
            </td>
            <td>
              {recursoSuelo.area}
            </td>
            <td>
              {recursoSuelo.calidad}
            </td>
          </tr>
        );
      })
    }
  }
  render() {
    return <CenterFormLayout>
      <table>
        <tr>
          <th>
            Estación
          </th>
          <th>
            Disponibilidad
          </th>
          <th>
            Área
          </th>
          <th>
            Calidad
          </th>
        </tr>
        {this.getRecursoSuelo()}
      </table>
    </CenterFormLayout>;
  }
}

export default compose(
  graphql(getRecursoSueloQuery, { name: "getRecursoSueloQuery" })
)(DisplayRecursoSuelo);