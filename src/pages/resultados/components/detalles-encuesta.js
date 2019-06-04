import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import HorizontalLayout from '../../../common/components/horizontal-layout';
import VerticalLayout from '../../../common/components/vertical-layout';
import { getImpactoQueries } from '../../../queries/impactos-queries';

class DetallesEncuesta extends Component {
  mostrarDetallesEncuesta() {
    const { impacto } = this.props.data;
    if (impacto) {
      return (
        <CenterFormLayout>
          <HorizontalLayout>
            <BlackTitle>
              Impactos:
            </BlackTitle>
            <BlackTitle>
              {impacto.impactos}
            </BlackTitle>
          </HorizontalLayout>
          <HorizontalLayout>
            <BlackTitle>
              Magnitud industrial:
            </BlackTitle>
            <BlackTitle>
            </BlackTitle>
            {impacto.magnitud_industrial}
          </HorizontalLayout>
          <HorizontalLayout>
            <BlackTitle>
              Consecuencia industrial:
            </BlackTitle>
            <BlackTitle>
              {impacto.consecuencias_industrial}
            </BlackTitle>
          </HorizontalLayout>
          <HorizontalLayout>
            <BlackTitle>
              Magnitud comercial:
            </BlackTitle>
            <BlackTitle>
              {impacto.magnitud_comercial}
            </BlackTitle>
          </HorizontalLayout>
          <HorizontalLayout>
            <BlackTitle>
              Consecuancia comercial:
            </BlackTitle>
            <BlackTitle>
              {impacto.consecuencias_comercial}
            </BlackTitle>
          </HorizontalLayout>
          <HorizontalLayout>
            <BlackTitle>
              Magnitud humano:
            </BlackTitle>
            <BlackTitle>
              {impacto.magnitud_humano}
            </BlackTitle>
          </HorizontalLayout>
          <HorizontalLayout>
            <BlackTitle>
              Consecuencia humano:
            </BlackTitle>
            <BlackTitle>
              {impacto.consecuencias_humano}
            </BlackTitle>
          </HorizontalLayout>
        </CenterFormLayout>
      )
    } else {
      <CenterFormLayout>
        <BlackTitle>
          Seleccione una categoría...
        </BlackTitle>
      </CenterFormLayout>
    }
  }

  render() {
    return (
      <VerticalLayout>
        {this.mostrarDetallesEncuesta()}
      </VerticalLayout>
    );
  }
}

export default graphql(getImpactoQueries, {
  options: (props) => {
    return {
      variables: {
        id: props.surveyId
      }
    }
  }
})(DetallesEncuesta);