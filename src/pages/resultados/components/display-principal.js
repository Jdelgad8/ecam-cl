import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import { getEncuestasQuery } from '../../../queries/encuesta-queries';
import '../styles/table.css';

class DisplayPrincipal extends Component {
  getImpactos() {
    var data = this.props.getEncuestasQuery;
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
      return data.encuestas.map(encuesta => {
        return (
          <tr key={encuesta.id}>
            <td>
              {encuesta.nombre_encuestado}
            </td>
            <td>
              {encuesta.nombre_sitio}
            </td>
            <td>
              {encuesta.nicho_ambiente}
            </td>
            <td>
              {encuesta.empresa}
            </td>
            <td>
              {encuesta.sector_productivo}
            </td>
            <td>
              {encuesta.latitud}
            </td>
            <td>
              {encuesta.longitud}
            </td>
            <td>
              {encuesta.codigo_olc}
            </td>
            <td>
              {encuesta.url}
            </td>
            <td>
              {encuesta.descripcion}
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
            Nombre encuestado
          </th>
          <th>
            Nombre sitio
          </th>
          <th>
            Nicho ambiente
          </th>
          <th>
            Empresa
          </th>
          <th>
            Sector productivo
          </th>
          <th>
            Latitud
          </th>
          <th>
            Longitud
          </th>
          <th>
            Código OLC
          </th>
          <th>
            URL
          </th>
          <th>
            Descripción
          </th>
        </tr>
        {this.getImpactos()}
      </table>
    </CenterFormLayout>;
  }
}

export default compose(
  graphql(getEncuestasQuery, { name: "getEncuestasQuery" })
)(DisplayPrincipal);