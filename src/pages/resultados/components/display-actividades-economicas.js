import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import { getActividadesEconomicasQuery } from '../../../queries/actividades-economicas-queries';
import '../styles/table.css';

class DisplayActividadesEconomicas extends Component {
  getImpactos() {
    var data = this.props.getActividadesEconomicasQuery;
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
      return data.actividadesEconomicas.map(actividadEconomica => {
        return (
          <tr key={actividadEconomica.id}>
            <td>
              {actividadEconomica.industria}
            </td>
            <td>
              {actividadEconomica.agricultura_cantidad}
            </td>
            <td>
              {actividadEconomica.agricultura_opcion}
            </td>
            <td>
              {actividadEconomica.servicios_cantidad}
            </td>
            <td>
              {actividadEconomica.servicios_opcion}
            </td>
            <td>
              {actividadEconomica.gobierno_cantidad}
            </td>
            <td>
              {actividadEconomica.gobierno_opcion}
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
            Industria
          </th>
          <th>
            Agricultura
          </th>
          <th>
            Opción
          </th>
          <th>
            Servicios
          </th>
          <th>
            Opción
          </th>
          <th>
            Gobierno
          </th>
          <th>
            Opción
          </th>
        </tr>
        {this.getImpactos()}
      </table>
    </CenterFormLayout>;
  }
}

export default compose(
  graphql(getActividadesEconomicasQuery, { name: "getActividadesEconomicasQuery" })
)(DisplayActividadesEconomicas);