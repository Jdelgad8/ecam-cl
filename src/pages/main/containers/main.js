import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../common/components/buttton';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import actividades_economicas from '../../../images/covers/actividades-economicas.jpg';
import acueducto from '../../../images/covers/acueducto.jpg';
import comunicaciones from '../../../images/covers/comunicaciones.jpg';
import educacion from '../../../images/covers/educacion.jpg';
import impacto from '../../../images/covers/impacto.jpg';
import recurso_suelo from '../../../images/covers/recurso-suelo.jpg';
import resultados from '../../../images/covers/resultados.jpg';
import salud from '../../../images/covers/salud.jpg';
import servicios_basicos from '../../../images/covers/servicios-basicos.jpg';
import tecnologia from '../../../images/covers/tecnologia.jpg';
import vias from '../../../images/covers/vias.jpg';
import vivienda from '../../../images/covers/vivienda.jpg';
import CategoriesElement from '../components/categories-element';
import CategoriesLayout from '../components/categories-layout';
import CategoriesRow from '../components/categories-row';
import MainLayout from '../components/main-layout';
import Related from '../components/related';

class Main extends Component {

  render() {
    return (
      <HandleError>
        <MainLayout>
          <Related />
          <CategoriesLayout>
            <CategoriesRow>
              <Link to="/impactos" >
                <CategoriesElement src={impacto}>
                  Impactos
                </CategoriesElement>
              </Link>
              <Link to="/recurso-suelo">
                <CategoriesElement src={recurso_suelo}>
                  Recurso suelo
                </CategoriesElement>
              </Link>
              <Link to="/acueductos">
                <CategoriesElement src={acueducto}>
                  Acueductos
                </CategoriesElement>
              </Link>
              <Link to="/tecnologia">
                <CategoriesElement src={tecnologia}>
                  Tecnología
                </CategoriesElement>
              </Link>
            </CategoriesRow>
            <CategoriesRow>
              <Link to="/vias">
                <CategoriesElement src={vias}>
                  Vías
                </CategoriesElement>
              </Link>
              <Link to="/educacion">
                <CategoriesElement src={educacion}>
                  Educación
                </CategoriesElement>
              </Link>
              <Link to="/comunicaciones">
                <CategoriesElement src={comunicaciones}>
                  Comunicaciones
                </CategoriesElement>
              </Link>
              <Link to="/servicios-basicos">
                <CategoriesElement src={servicios_basicos}>
                  Servicios básicos
                </CategoriesElement>
              </Link>
            </CategoriesRow>
            <CategoriesRow>
              <Link to="/vivienda">
                <CategoriesElement src={vivienda}>
                  Vivienda
                </CategoriesElement>
              </Link>
              <Link to="/salud">
                <CategoriesElement src={salud}>
                  Salud
                </CategoriesElement>
              </Link>
              <Link to="/actividades-economicas">
                <CategoriesElement src={actividades_economicas}>
                  Actividades económicas
                  </CategoriesElement>
              </Link>
              <Link to="/resultados">
                <CategoriesElement src={resultados}>
                  Resultados
                  </CategoriesElement>
              </Link>
            </CategoriesRow>
          </CategoriesLayout>
          <VerticalLayout>

            <Button>
              <Link to="/">
                Salir
            </Link>
            </Button>
          </VerticalLayout>
        </MainLayout>
      </HandleError>
    )
  }
}

export default Main;