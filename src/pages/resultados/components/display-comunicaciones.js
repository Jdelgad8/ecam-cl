import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import { getComunicacionesQuery } from '../../../queries/comunicaciones-queries';
import '../styles/table.css';

class DisplayComunicaciones extends Component {
  getImpactos() {
    var data = this.props.getComunicacionesQuery;
    console.log(data);
    if (data.loading) {
      return (
        <CenterFormLayout>
          <BlackTitle>
            Cargando datos...
          </BlackTitle>
        </CenterFormLayout>
      );
    } else {
      return data.comunicaciones.map(comunicacion => {
        return (
          <tr key={comunicacion.id}>
            <td>
              {comunicacion.internet}
            </td>
            <td>
              {comunicacion.celular}
            </td>
            <td>
              {comunicacion.habitaciones}
            </td>
            <td>
              {comunicacion.mas}
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
            Internet
          </th>
          <th>
            Celular
          </th>
          <th>
            Habitaciones
          </th>
          <th>
            Más
          </th>

        </tr>
        {this.getImpactos()}
      </table>
    </CenterFormLayout>;
  }
}

export default compose(
  graphql(getComunicacionesQuery, { name: "getComunicacionesQuery" })
)(DisplayComunicaciones);