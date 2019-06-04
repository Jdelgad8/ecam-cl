import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import { getTecnologiasQuery } from '../../../queries/tecnologia-queries';
import '../styles/table.css';

class DisplayTecnologia extends Component {
  getImpactos() {
    var data = this.props.getTecnologiasQuery;
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
      return data.tecnologias.map(tecnologia => {
        return (
          <tr key={tecnologia.id}>
            <td>
              {tecnologia.medio_transporte}
            </td>
            <td>
              {tecnologia.cantidad}
            </td>
            <td>
              {tecnologia.personas_servidas}
            </td>
            <td>
              {tecnologia.cantidad_carga}
            </td>
            <td>
              {tecnologia.ano_fabricacion}
            </td>
            <td>
              {tecnologia.tipo_motor}
            </td>
            <td>
              {tecnologia.impacto}
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
            Medio de transporte
          </th>
          <th>
            Cantidad
          </th>
          <th>
            Personas servidas
          </th>
          <th>
            Cantidad de carga
          </th>
          <th>
            Año de fabricación
          </th>
          <th>
            Tipo de motor
          </th>
          <th>
            Impacto
          </th>
        </tr>
        {this.getImpactos()}
      </table>
    </CenterFormLayout>;
  }
}

export default compose(
  graphql(getTecnologiasQuery, { name: "getTecnologiasQuery" })
)(DisplayTecnologia);