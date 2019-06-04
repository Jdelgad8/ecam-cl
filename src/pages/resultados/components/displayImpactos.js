import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import { getImpactosQuery } from '../../../queries/impactos-queries';
import '../styles/table.css';

class DisplayImpactos extends Component {
  getImpactos() {
    var data = this.props.getImpactosQuery;
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
      return data.impactos.map(impacto => {
        return (
          <tr key={impacto.id}>
            <td>
              {impacto.impactos}
            </td>
            <td>
              {impacto.magnitud_industrial}
            </td>
            <td>
              {impacto.consecuencias_industrial}
            </td>
            <td>
              {impacto.magnitud_comercial}
            </td>
            <td>
              {impacto.consecuencias_comercial}
            </td>
            <td>
              {impacto.magnitud_humano}
            </td>
            <td>
              {impacto.consecuencias_humano}
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
            Impactos
          </th>
          <th>
            Magnitud industriales
          </th>
          <th>
            Magnitud comerciales
          </th>
          <th>
            Magnitud humanos
          </th>
          <th>
            Consecuencias industriales
          </th>
          <th>
            Consecuencias comerciales
          </th>
          <th>
            Consecuencias humanos
          </th>
        </tr>
        {this.getImpactos()}
      </table>
    </CenterFormLayout>;
  }
}

export default compose(
  graphql(getImpactosQuery, { name: "getImpactosQuery" })
)(DisplayImpactos);