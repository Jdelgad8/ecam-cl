import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import BlackTitle from '../../../common/components/black-title';
import Button from '../../../common/components/buttton';
import HorizontalLayout from '../../../common/components/horizontal-layout';
import Image from '../../../common/components/image';
import SelectInput from '../../../common/components/select-input';
import TextArea from '../../../common/components/text-area';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import { addEncuestaMutation, getEncuestadorQuery } from '../../../queries/encuesta-queries';
import GatherBlackTitle from '../components/gather-black-title';
import GatherInput from '../components/gather-input';
import GatherLayout from '../components/gather-layout';
import GatherMiddleInputContainer from '../components/gather-middle-input-container';
import GatherTopInputContainer from '../components/gather-top-input-container';
import URLInput from '../components/url-input';

class Gather extends Component {
  state = {
    encuestadorId: '',
    nameValue: '',
    siteNameValue: '',
    enviromentValue: '',
    companyValue: '',
    productiveSectorValue: '',
    latitudeValue: '',
    longitudeValue: '',
    olcCodeValue: '',
    urlValue: '',
    descriptionValue: '',
    selectedMap: null,
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    switch (name) {
      case "encuestador-id":
        this.setState({
          encuestadorId: value
        })
        break;
      case "gather-sse-name":
        this.setState({
          nameValue: value
        })
        break;
      case "gather-site-name":
        this.setState({
          siteNameValue: value
        })
        break;
      case "gather-enviroment":
        this.setState({
          enviromentValue: value
        })
        break;
      case "gather-company":
        this.setState({
          companyValue: value
        })
        break;
      case "gather-productive-sector":
        this.setState({
          productiveSectorValue: value
        })
        break;
      case "gather-latitude":
        this.setState({
          latitudeValue: parseFloat(value)
        })
        break;
      case "gather-longitude":
        this.setState({
          longitudeValue: parseFloat(value)
        })
        break;
      case "gather-olc-code":
        this.setState({
          olcCodeValue: parseInt(value)
        })
        break;
      case "gather-url-input":
        this.setState({
          urlValue: value
        })
        break;
      case "gather-description":
        this.setState({
          descriptionValue: value
        })
        break;
      case "map-image":
        this.setState({
          selectedMap: target.files[0]
        });
        const fd = new FormData();
        fd.append('image', this.state.selectedMap, this.state.selectedMap.name);
        break;
      default:
    }
  }

  storeData = (event) => {
    this.props.addEncuestaMutation({
      variables: {
        encuestadorId: this.state.encuestadorId,
        nameValue: this.state.nameValue,
        siteNameValue: this.state.siteNameValue,
        enviromentValue: this.state.enviromentValue,
        companyValue: this.state.companyValue,
        productiveSectorValue: this.state.productiveSectorValue,
        latitudeValue: this.state.latitudeValue,
        longitudeValue: this.state.longitudeValue,
        olcCodeValue: this.state.olcCodeValue,
        urlValue: this.state.urlValue,
        descriptionValue: this.state.descriptionValue,
      }
    });
  }

  displayEncuestadores() {
    var data = this.props.getEncuestadorQuery;
    if (data.loading) {
      return (
        <option disabled>
          Cargando encuestadores...
        </option>
      );
    } else {
      return data.encuestadores.map(encuestador => {
        return (
          <option key={encuestador.id} value={encuestador.id}>
            {encuestador.nombres + " " + encuestador.apellidos}
          </option>
        );
      });
    }
  }

  render() {
    console.log(this.props)
    return (
      <HandleError>
        <GatherLayout>
          <HorizontalLayout>
            <BlackTitle>
              Seleccione el encuestador
            </BlackTitle>
            <SelectInput
              name={"encuestador-id"}
              value={this.state.encuestadorId}
              onChange={this.handleChange}
            >
              <option>Seleccione una opción</option>
              {this.displayEncuestadores()}
            </SelectInput>
          </HorizontalLayout>
          <GatherTopInputContainer>
            <GatherInput
              name={"gather-sse-name"}
              placeholder={"Nombre del encuestado"}
              onChange={this.handleChange}
            />
            <GatherInput
              name={"gather-site-name"}
              placeholder={"Nombre del sitio"}
              onChange={this.handleChange}
            />
            <GatherInput
              name={"gather-enviroment"}
              placeholder={"Nicho ambiente"}
              onChange={this.handleChange}
            />
            <GatherInput
              name={"gather-company"}
              placeholder={"Cantidad de empresas"}
              onChange={this.handleChange}
            />
            <GatherInput
              name={"gather-productive-sector"}
              placeholder={"Sector productivo"}
              onChange={this.handleChange}
            />
          </GatherTopInputContainer>
          <GatherMiddleInputContainer>
            <GatherBlackTitle>
              Coordenadas
            </GatherBlackTitle>
            <GatherInput
              name={"gather-latitude"}
              placeholder={"Latitud"}
              onChange={this.handleChange}
            />
            <GatherInput
              name={"gather-longitude"}
              placeholder={"Longitud"}
              onChange={this.handleChange}
            />
            <GatherInput
              name={"gather-olc-code"}
              placeholder={"Código O.L.C"}
              onChange={this.handleChange}
            />
          </GatherMiddleInputContainer>
          <HorizontalLayout>
            <GatherBlackTitle>
              Mapa
            </GatherBlackTitle>
          </HorizontalLayout>
          <HorizontalLayout>
            <VerticalLayout>
              <Image height={214} width={214} />
              {/* <UploadInput
                name={"map-image"}
                onChange={this.handleChange}
              /> */}
            </VerticalLayout>

            <VerticalLayout>
              <URLInput
                type={"URL"}
                name={"gather-url-input"}
                placeholder={"URL"}
                onChange={this.handleChange}
              />
              <TextArea
                type={"text"}
                name={"gather-description"}
                placeholder={"Descripción"}
                onChange={this.handleChange}
              />
            </VerticalLayout>
          </HorizontalLayout>
          {/* <HorizontalLayout>
            <VerticalLayout>
              <HorizontalLayout>
                <GatherBlackTitle>
                  Fotos comunidad
                </GatherBlackTitle>
              </HorizontalLayout>
              <HorizontalLayout>
                <VerticalLayout>
                  <Image height={214} width={214} />
                </VerticalLayout>
                <VerticalLayout>
                  <Image height={214} width={214} />
                </VerticalLayout>
              </HorizontalLayout>
            </VerticalLayout>
            <VerticalLayout>
              <HorizontalLayout>
                <GatherBlackTitle>
                  Fotos originales lugar
                </GatherBlackTitle>
              </HorizontalLayout>
              <HorizontalLayout>
                <VerticalLayout>
                  <Image height={214} width={214} />
                </VerticalLayout>
                <VerticalLayout>
                  <Image height={214} width={214} />
                </VerticalLayout>
                <VerticalLayout>
                  <Image height={214} width={214} />
                </VerticalLayout>
              </HorizontalLayout>
            </VerticalLayout>
          </HorizontalLayout> */}
          <HorizontalLayout>
            <Link to="/main">
              <Button onClick={this.storeData}>
                Siguiente
            </Button>
            </Link>
          </HorizontalLayout>
        </GatherLayout>
      </HandleError>
    )
  }
}

export default compose(
  graphql(addEncuestaMutation, { name: "addEncuestaMutation" }),
  graphql(getEncuestadorQuery, { name: "getEncuestadorQuery" })
)(Gather);