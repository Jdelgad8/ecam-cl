import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import { getServiciosBasicosQuery } from '../../../queries/servicios-basicos-queries';
import '../styles/table.css';

class DisplayServiciosBasicos extends Component {
  getImpactos() {
    var data = this.props.getServiciosBasicosQuery;
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
      return data.serviciosBasicos.map(servicioBasico => {
        return (
          <tr key={servicioBasico.id}>
            <td>
              {servicioBasico.acceso}
            </td>
            <td>
              {servicioBasico.servicios}
            </td>
            <td>
              {servicioBasico.ambientales}
            </td>
            <td>
              {servicioBasico.conflicto_social}
            </td>
            <td>
              {servicioBasico.volatilidad}
            </td>
            <td>
              {servicioBasico.otro}
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
            Acceso
          </th>
          <th>
            Servicios
          </th>
          <th>
            Ambientales
          </th>
          <th>
            Conflicto social
          </th>
          <th>
            Volatilidad
          </th>
          <th>
            otro
          </th>

        </tr>
        {this.getImpactos()}
      </table>
    </CenterFormLayout>;
  }
}

export default compose(
  graphql(getServiciosBasicosQuery, { name: "getServiciosBasicosQuery" })
)(DisplayServiciosBasicos);