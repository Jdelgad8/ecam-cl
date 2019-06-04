import React, { Component } from 'react';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import CheckboxInput from '../../../common/components/checkbox-input';
import FormText from '../../../common/components/form-text';
import Header from '../../../common/components/header';
import HorizontalLayout from '../../../common/components/horizontal-layout';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';
import InputCantidad from '../components/input-cantidad';
import VerticalLayoutRecursoAgua from '../components/vertical-layout-recurso-agua';

class RecursoAgua extends Component {
  state = {
    seasonRecursoValue: '',
    availabilityValue: '',
    firstQuantityValue: '',
    secondQuantityValue: '',
    thirdQuantityValue: '',
    requiretreatmentValue: '',
    treatmentValue: '',
    winterRecursoChecked: false,
    summerRecursoChecked: false,
    minChecked: false,
    maxChecked: false,
    yesChecked: false,
    noChecked: false
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    switch (name) {
      case "winterRecurso":
        this.setState({
          summerRecursoChecked: false,
          winterRecursoChecked: true,
          seasonRecursoValue: value
        })
        break;
      case "summerRecurso":
        this.setState({
          summerRecursoChecked: true,
          winterRecursoChecked: false,
          seasonRecursoValue: value
        })
        break;
      case "min":
        this.setState({
          maxChecked: false,
          minChecked: true,
          availabilityValue: value
        })
        break;
      case "max":
        this.setState({
          maxChecked: true,
          minChecked: false,
          availabilityValue: value
        })
        break;
      case "first-quantity":
        this.setState({
          firstQuantityValue: value
        })
        break;
      case "second-quantity":
        this.setState({
          secondQuantityValue: value
        })
        break;
      case "third-quantity":
        this.setState({
          thirdQuantityValue: value
        })
        break;
      case "require-treatment-yes":
        this.setState({
          yesChecked: true,
          noChecked: false,
          requiretreatmentValue: value
        })
        break;
      case "require-treatment-no":
        this.setState({
          yesChecked: false,
          noChecked: true,
          requiretreatmentValue: value
        })
        break;
      case "treatment":
        this.setState({
          treatmentValue: value
        })
        break;
      default:
    }
  }

  storeData = (event) => {
    console.log(this.state.seasonRecursoValue)
    console.log(this.state.availabilityValue)
    console.log(this.state.firstQuantityValue)
    console.log(this.state.secondQuantityValue)
    console.log(this.state.thirdQuantityValue)
    console.log(this.state.requiretreatmentValue)
    console.log(this.state.treatmentValue)
    this.setState({
      seasonRecursoValue: '',
      availabilityValue: '',
      firstQuantityValue: '',
      secondQuantityValue: '',
      thirdQuantityValue: '',
      requiretreatmentValue: '',
      treatmentValue: '',
      winterRecursoChecked: false,
      summerRecursoChecked: false,
      minChecked: false,
      maxChecked: false,
      yesChecked: false,
      noChecked: false
    })

  }

  render() {
    return (
      <HandleError>
        <VerticalLayout>
          <Header>
            Recurso agua
          </Header>
          <CenterFormLayout>
            <VerticalLayout>
              <HorizontalLayout>
                <VerticalLayoutRecursoAgua>
                  <BlackTitle>
                    Estación
                    </BlackTitle>
                </VerticalLayoutRecursoAgua>
                <VerticalLayoutRecursoAgua>
                  <HorizontalLayout>
                    <CheckboxInput
                      name={"winterRecurso"}
                      value={"invierno"}
                      checked={this.state.winterRecursoChecked}
                      onChange={this.handleChange}
                    />
                    <FormText>
                      Invierno
                      </FormText>
                  </HorizontalLayout>
                </VerticalLayoutRecursoAgua>
                <VerticalLayoutRecursoAgua>
                  <HorizontalLayout>
                    <CheckboxInput
                      name={"summerRecurso"}
                      value={"verano"}
                      checked={this.state.summerRecursoChecked}
                      onChange={this.handleChange}
                    />
                    <FormText>
                      Verano
                      </FormText>
                  </HorizontalLayout>
                </VerticalLayoutRecursoAgua>
              </HorizontalLayout>
              <HorizontalLayout>
                <VerticalLayoutRecursoAgua>
                  <BlackTitle>
                    Disponibilidad
                    </BlackTitle>
                </VerticalLayoutRecursoAgua>
                <VerticalLayoutRecursoAgua>
                  <HorizontalLayout>
                    <CheckboxInput
                      name={"min"}
                      value={"minima"}
                      checked={this.state.minChecked}
                      onChange={this.handleChange}
                    />
                    <FormText>
                      Mínima
                      </FormText>
                  </HorizontalLayout>
                </VerticalLayoutRecursoAgua>
                <VerticalLayoutRecursoAgua>
                  <HorizontalLayout>
                    <CheckboxInput
                      name={"max"}
                      value={"maxima"}
                      checked={this.state.maxChecked}
                      onChange={this.handleChange}
                    />
                    <FormText>
                      Máxima
                      </FormText>
                  </HorizontalLayout>
                </VerticalLayoutRecursoAgua>
              </HorizontalLayout>
              <HorizontalLayout>
                <VerticalLayoutRecursoAgua>
                  <BlackTitle>
                    Cantidad
                    </BlackTitle>
                </VerticalLayoutRecursoAgua>
                <VerticalLayoutRecursoAgua>
                  <InputCantidad
                    name={"first-quantity"}
                    value={this.state.firstQuantityValue}
                    onChange={this.handleChange}
                  />
                </VerticalLayoutRecursoAgua>
                <VerticalLayoutRecursoAgua>
                  <InputCantidad
                    name={"second-quantity"}
                    value={this.state.secondQuantityValue}
                    onChange={this.handleChange}
                  />
                </VerticalLayoutRecursoAgua>
                <VerticalLayoutRecursoAgua>
                  <InputCantidad
                    name={"third-quantity"}
                    value={this.state.thirdQuantityValue}
                    onChange={this.handleChange}
                  />
                </VerticalLayoutRecursoAgua>
              </HorizontalLayout>
              <HorizontalLayout>
                <VerticalLayoutRecursoAgua>
                  <BlackTitle>
                    Calidad:
                    </BlackTitle>
                </VerticalLayoutRecursoAgua>
              </HorizontalLayout>
              <HorizontalLayout>
                <VerticalLayoutRecursoAgua>
                  <BlackTitle>
                    Requiere tratamiento
                    </BlackTitle>
                </VerticalLayoutRecursoAgua>
                <VerticalLayoutRecursoAgua>
                  <HorizontalLayout>
                    <CheckboxInput
                      name={"require-treatment-yes"}
                      value={"si"}
                      checked={this.state.yesChecked}
                      onChange={this.handleChange}
                    />
                    <FormText>
                      Si
                      </FormText>
                  </HorizontalLayout>
                </VerticalLayoutRecursoAgua>
                <VerticalLayoutRecursoAgua>
                  <HorizontalLayout>
                    <CheckboxInput
                      name={"require-treatment-no"}
                      value={"no"}
                      checked={this.state.noChecked}
                      onChange={this.handleChange}
                    />
                    <FormText>
                      No
                      </FormText>
                  </HorizontalLayout>
                </VerticalLayoutRecursoAgua>
              </HorizontalLayout>
              <HorizontalLayout>
                <VerticalLayoutRecursoAgua />
                <VerticalLayoutRecursoAgua>
                  <InputCantidad
                    name={"treatment"}
                    value={this.state.treatmentValue}
                    onChange={this.handleChange}
                  />
                </VerticalLayoutRecursoAgua>
              </HorizontalLayout>
            </VerticalLayout>
          </CenterFormLayout>
        </VerticalLayout>
      </HandleError>
    )
  }
}

export default RecursoAgua;