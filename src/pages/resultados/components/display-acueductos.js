import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import { getAcueductosQuery } from '../../../queries/agua-queries';
import '../styles/table.css';

class DisplayAcueductos extends Component {
  getImpactos() {
    var data = this.props.getAcueductosQuery;
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
      return data.acueductos.map(acueducto => {
        return (
          <tr key={acueducto.id}>
            <td>
              {acueducto.estacion_recurso}
            </td>
            <td>
              {acueducto.disponibilidad}
            </td>
            <td>
              {acueducto.cantidad}
            </td>
            <td>
              {acueducto.requiere_tratamiento}
            </td>
            <td>
              {acueducto.fallos}
            </td>
            <td>
              {acueducto.perdidas}
            </td>
            <td>
              {acueducto.danos}
            </td>
            <td>
              {acueducto.descripcion}
            </td>
            <td>
              {acueducto.estacion}
            </td>
            <td>
              {acueducto.operacion}
            </td>
            <td>
              {acueducto.presupuesto}
            </td>
            <td>
              {acueducto.poblacion_atendida}
            </td>
            <td>
              {acueducto.cantidad_recursos}
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
            Cantidad
          </th>
          <th>
            Tratamiento
          </th>
          <th>
            Fallos
          </th>
          <th>
            Pérdidas
          </th>
          <th>
            Daños
          </th>
          <th>
            Descripción
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
            Población atendida
          </th>
          <th>
            Cantidad recursos
          </th>
        </tr>
        {this.getImpactos()}
      </table>
    </CenterFormLayout>;
  }
}

export default compose(
  graphql(getAcueductosQuery, { name: "getAcueductosQuery" })
)(DisplayAcueductos);