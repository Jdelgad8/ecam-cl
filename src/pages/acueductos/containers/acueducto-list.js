import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAcueductosQuery } from '../../../queries/agua-queries';



class AcueductosList extends Component {
  displayAcueductos() {
    var data = this.props.data;
    if (data.loading) {
      return (
        <div>
          Cargando datos...
        </div>
      );
    } else {
      if (data.acueductos.length == 0) {
        return null;
      } else {
        return data.acueductos.map(acueducto => {
          return (
            <table key={acueducto.id}>
              <tbody>
                <tr>
                  <td >
                    {acueducto.id}
                  </td>
                  <td >
                    {acueducto.fallos}
                  </td>
                  <td >
                    {acueducto.perdidas}
                  </td>
                  <td >
                    {acueducto.danos}
                  </td>
                  <td >
                    {acueducto.descripcion}
                  </td>
                  <td >
                    {acueducto.estacion}
                  </td>
                  <td >
                    {acueducto.operacion}
                  </td>
                  <td >
                    {acueducto.presupuesto}
                  </td>
                  <td >
                    {acueducto.poblacion_atendida}
                  </td>
                  <td >
                    {acueducto.cantidad_recursos}
                  </td>
                </tr>
              </tbody>
            </table>
          );
        }
        )
      }
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.displayAcueductos()}
          {console.log(this.props)}
        </ul>
      </div>
    );
  }
}

export default graphql(getAcueductosQuery)(AcueductosList)

