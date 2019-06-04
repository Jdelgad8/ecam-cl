import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import { getViasQuery } from '../../../queries/vias-queries';
import '../styles/table.css';

class DisplayVias extends Component {
  getImpactos() {
    var data = this.props.getViasQuery;
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
      return data.vias.map(via => {
        return (
          <tr key={via.id}>
            <td>
              {via.tipo_via}
            </td>
            <td>
              {via.perdidas_monetarias}
            </td>
            <td>
              {via.tiempo_desplazamiento}
            </td>
            <td>
              {via.costo_desplazamiento}
            </td>
            <td>
              {via.presenta}
            </td>
            <td>
              {via.estacion}
            </td>
            <td>
              {via.operacion}
            </td>
            <td>
              {via.presupuesto}
            </td>
            <td>
              {via.fuente}
            </td>
            <td>
              {via.cantidad}
            </td>
            <td>
              {via.mes}
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
            Tipo vía
          </th>
          <th>
            Pérdidas monetarias
          </th>
          <th>
            Tiempo de desplazamiento
          </th>
          <th>
            Costo de desplazamiento
          </th>
          <th>
            Presenta
          </th>
          <th>
            Estación
          </th>
          <th>
            Operación
          </th>
          <th>
            Presupuesto
          </th>
          <th>
            Fuente
          </th>
          <th>
            Cantidad
          </th>
          <th>
            Mes
          </th>
        </tr>
        {this.getImpactos()}
      </table>
    </CenterFormLayout>;
  }
}

export default compose(
  graphql(getViasQuery, { name: "getViasQuery" })
)(DisplayVias);