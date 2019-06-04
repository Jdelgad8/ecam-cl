import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import { getSaludesQuery } from '../../../queries/salud-queries';
import '../styles/table.css';

class DisplaySalud extends Component {
  getImpactos() {
    var data = this.props.getSaludesQuery;
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
      return data.saludes.map(salud => {
        return (
          <tr key={salud.id}>
            <td>
              {salud.esperanza_vida}
            </td>
            <td>
              {salud.desnutricion}
            </td>
            <td>
              {salud.numero_visitas}
            </td>
            <td>
              {salud.ano}
            </td>
            <td>
              {salud.personas}
            </td>
            <td>
              {salud.exposicion_impactos}
            </td>
            <td>
              {salud.conflicto_social}
            </td>
            <td>
              {salud.acceso_tierra}
            </td>
            <td>
              {salud.pobreza}
            </td>
            <td>
              {salud.desempleo}
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
            Esperanza de vida
          </th>
          <th>
            Desnutrición
          </th>
          <th>
            # de visitas
          </th>
          <th>
            Año
          </th>
          <th>
            # de Personas
          </th>
          <th>
            Exposición a impactos
          </th>
          <th>
            Conflicto social
          </th>
          <th>
            Acceso a tierra
          </th>
          <th>
            Pobreza
          </th>
          <th>
            Desempleo
          </th>

        </tr>
        {this.getImpactos()}
      </table>
    </CenterFormLayout>;
  }
}

export default compose(
  graphql(getSaludesQuery, { name: "getSaludesQuery" })
)(DisplaySalud);