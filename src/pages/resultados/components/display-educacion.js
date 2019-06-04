import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import { getEducacionesQuery } from '../../../queries/educacion-queries';
import '../styles/table.css';

class DisplayEducacion extends Component {
  getImpactos() {
    var data = this.props.getEducacionesQuery;
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
      return data.educaciones.map(educacion => {
        return (
          <CenterFormLayout>
            <BlackTitle>
              Resultados
            </BlackTitle>
            <table key={educacion.id}>
              <tr >
                <th>
                  Personas
            </th>
                <th>
                  Sin educación
            </th>
                <th>
                  Primaria
            </th>
                <th>
                  Secundaria
            </th>
                <th>
                  Tecnología
            </th>
                <th>
                  Profesional
            </th>
                <th>
                  Especialización
            </th>
                <th>
                  Doctorado
            </th>
              </tr>
              <tr>
                <th>
                  Graduados
            </th>
                <td>
                  {educacion.graduados_eduacion}
                </td>
                <td>
                  {educacion.graduados_primaria}
                </td>
                <td>
                  {educacion.graduados_secundaria}
                </td>
                <td>
                  {educacion.graduados_tecnologia}
                </td>
                <td>
                  {educacion.graduados_profesional}
                </td>
                <td>
                  {educacion.graduados_especializacion}
                </td>
                <td>
                  {educacion.graduados_doctorado}
                </td>
              </tr>
              <tr>
                <th>
                  En curso
          </th>
                <td>
                  {educacion.curso_eduacion}
                </td>
                <td>
                  {educacion.curso_primaria}
                </td>
                <td>
                  {educacion.curso_secundaria}
                </td>
                <td>
                  {educacion.curso_tecnologia}
                </td>
                <td>
                  {educacion.curso_profesional}
                </td>
                <td>
                  {educacion.curso_especializacion}
                </td>
                <td>
                  {educacion.curso_doctorado}
                </td>
              </tr>

              <tr>
                <th>
                  Requerimientos del mercado
                </th>
                <td>
                  {educacion.requerimiento_eduacion}
                </td>
                <td>
                  {educacion.requerimiento_primaria}
                </td>
                <td>
                  {educacion.requerimiento_secundaria}
                </td>
                <td>
                  {educacion.requerimiento_tecnologia}
                </td>
                <td>
                  {educacion.requerimiento_profesional}
                </td>
                <td>
                  {educacion.requerimiento_especializacion}
                </td>
                <td>
                  {educacion.requerimiento_doctorado}
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <th>
                  Capacidad
                </th>
                <th>
                  Escuela
                </th>
                <th>
                  Colegio
                </th>
                <th>
                  Instituto
                </th>
                <th>
                  Universidad
                </th>
              </tr>
              <tr>
                <th>
                  # Centros educactivos
                </th>
                <td>
                  {educacion.centros_escuela}
                </td>
                <td>
                  {educacion.centros_colegio}
                </td>
                <td>
                  {educacion.centros_instituto}
                </td>
                <td>
                  {educacion.centros_universidad}
                </td>
              </tr>
              <tr>
                <th>
                  # Programas
                </th>
                <td>
                  {educacion.programas_escuela}
                </td>
                <td>
                  {educacion.programas_colegio}
                </td>
                <td>
                  {educacion.programas_instituto}
                </td>
                <td>
                  {educacion.programas_universidad}
                </td>
              </tr>
              <tr>
                <th>
                  # Salones
                </th>
                <td>
                  {educacion.salones_escuela}
                </td>
                <td>
                  {educacion.salones_colegio}
                </td>
                <td>
                  {educacion.salones_instituto}
                </td>
                <td>
                  {educacion.salones_universidad}
                </td>
              </tr>
              <tr>
                <th>
                  # Estudiantes
                </th>
                <td>
                  {educacion.estudiantes_escuela}
                </td>
                <td>
                  {educacion.estudiantes_colegio}
                </td>
                <td>
                  {educacion.estudiantes_instituto}
                </td>
                <td>
                  {educacion.estudiantes_universidad}
                </td>
              </tr>
            </table>
          </CenterFormLayout>
        );
      })
    }
  }
  render() {
    return this.getImpactos();
  }
}

export default compose(
  graphql(getEducacionesQuery, { name: "getEducacionesQuery" })
)(DisplayEducacion);