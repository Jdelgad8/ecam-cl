import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import { getViviendasQuery } from '../../../queries/vivienda-queries';
import '../styles/table.css';

class DisplayVivienda extends Component {
  getImpactos() {
    var data = this.props.getViviendasQuery;
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
      return data.viviendas.map(vivienda => {
        return (
          <tr key={vivienda.id}>
            <td>
              {vivienda.ambientales}
            </td>
            <td>
              {vivienda.conflicto_social}
            </td>
            <td>
              {vivienda.pobreza}
            </td>
            <td>
              {vivienda.otro}
            </td>
            <td>
              {vivienda.material_construccion}
            </td>
            <td>
              {vivienda.numero_personas}
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
            Ambientales
          </th>
          <th>
            Conflicto social
          </th>
          <th>
            Pobreza
          </th>
          <th>
            Otro
          </th>
          <th>
            Material construcción
          </th>
          <th>
            # de personas
          </th>
        </tr>
        {this.getImpactos()}
      </table>
    </CenterFormLayout>;
  }
}

export default compose(
  graphql(getViviendasQuery, { name: "getViviendasQuery" })
)(DisplayVivienda);