import React, { Component } from 'react';
import BlackTitle from '../../../common/components/black-title';
import CenterFormLayout from '../../../common/components/center-form-layout';
import CheckboxInput from '../../../common/components/checkbox-input';
import EmptyHolder from '../../../common/components/empty-holder';
import FormText from '../../../common/components/form-text';
import Header from '../../../common/components/header';
import HorizontalLayout from '../../../common/components/horizontal-layout';
import Input from '../../../common/components/input';
import SelectInput from '../../../common/components/select-input';
import SelectOption from '../../../common/components/select-option';
import VerticalLayout from '../../../common/components/vertical-layout';
import HandleError from '../../../error/containers/handle-error';


class CapacidadElectrica extends Component {
  state = {
    seasonValue: '',
    operationValue: '',
    budgetValue: '',
    sourceValue: '',
    quantityvalue: '',
    monthValue: '',
    winterChecked: false,
    summerChecked: false
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    switch (name) {
      case "winter":
        this.setState({
          winterChecked: true,
          summerChecked: false,
          seasonValue: value
        })
        break;
      case "summer":
        this.setState({
          winterChecked: false,
          summerChecked: true,
          seasonValue: value
        })
        break;
      case "operation":
        this.setState({
          operationValue: value
        })
        break;
      case "budget":
        this.setState({
          budgetValue: value
        })
        break;
      case "source":
        this.setState({
          sourceValue: value
        })
        break;
      case "quantity":
        this.setState({
          quantityvalue: value
        })
        break;
      case "month":
        this.setState({
          monthValue: value
        })
        break;
      default:
    }
  }

  storeData = (event) => {
    console.log(this.state.seasonValue)
    console.log(this.state.operationValue)
    console.log(this.state.budgetValue)
    console.log(this.state.sourceValue)
    console.log(this.state.quantityvalue)
    console.log(this.state.monthValue)
    this.setState({
      seasonValue: '',
      operationValue: '',
      budgetValue: '',
      sourceValue: '',
      quantityvalue: '',
      monthValue: '',
      winterChecked: false,
      summerChecked: false
    })
  }

  render() {
    return (
      <HandleError>
        <VerticalLayout>
          <Header>
            Capacidad instalada/sensitividad
          </Header>
          <VerticalLayout>
            <CenterFormLayout>
              <HorizontalLayout>
                <VerticalLayout>
                  <BlackTitle>
                    Estación
                  </BlackTitle>
                  <BlackTitle>
                    Operación:
                  </BlackTitle>
                  <SelectInput
                    name={"operation"}
                    value={this.state.operationValue}
                    onChange={this.handleChange}
                  >
                    <SelectOption value={""}>
                      Seleccione una opción
                    </SelectOption>
                    <SelectOption value={"insumos"}>
                      Insumos
                    </SelectOption>
                    <SelectOption value={"personal"}>
                      Personal
                    </SelectOption>
                    <SelectOption value={"otros costos"}>
                      Otros costos
                    </SelectOption>
                  </SelectInput>
                  <BlackTitle>
                    Presupuesto
                  </BlackTitle>
                  <BlackTitle>
                    Fuente:
                  </BlackTitle>
                  <SelectInput
                    name={"source"}
                    value={this.state.sourceValue}
                    onChange={this.handleChange}
                  >
                    <SelectOption value={""}>
                      Seleccione una opción
                    </SelectOption>
                    <SelectOption value={"hidrica"}>
                      Hídrica
                    </SelectOption>
                    <SelectOption value={"diesel"}>
                      Diesel
                    </SelectOption>
                    <SelectOption value={"gasolina"}>
                      Gasolina
                    </SelectOption>
                    <SelectOption value={"gas"}>
                      Gas
                    </SelectOption>
                  </SelectInput>
                  <BlackTitle>
                    Cantidad
                  </BlackTitle>
                  <BlackTitle>
                    Mes
                  </BlackTitle>
                </VerticalLayout>
                <VerticalLayout>
                  <HorizontalLayout>
                    <CheckboxInput
                      name={"winter"}
                      value={"invierno"}
                      checked={this.state.winterChecked}
                      onChange={this.handleChange}
                    />
                    <FormText>
                      Invierno
                    </FormText>
                  </HorizontalLayout>
                  <EmptyHolder />
                  <EmptyHolder />
                  <EmptyHolder />
                  <Input
                    name={"budget"}
                    value={this.state.budgetValue}
                    onChange={this.handleChange}
                  />
                  <EmptyHolder />
                  <EmptyHolder />
                  <EmptyHolder />
                  <Input
                    name={"quantity"}
                    value={this.state.quantityvalue}
                    onChange={this.handleChange}
                  />
                  <SelectInput
                    name={"month"}
                    value={this.state.monthValue}
                    onChange={this.handleChange}
                  >
                    <SelectOption value={""}>
                      Seleccione un mes
                      </SelectOption>
                    <SelectOption value={"enero"}>
                      Enero
                      </SelectOption>
                    <SelectOption value={"febrero"}>
                      Febrero
                      </SelectOption>
                    <SelectOption value={"Marzo"}>
                      Marzo
                      </SelectOption>
                    <SelectOption value={"abril"}>
                      Abril
                      </SelectOption>
                    <SelectOption value={"mayo"}>
                      Mayo
                      </SelectOption>
                    <SelectOption value={"junio"}>
                      Junio
                      </SelectOption>
                    <SelectOption value={"julio"}>
                      Julio
                      </SelectOption>
                    <SelectOption value={"agosto"}>
                      Agosto
                      </SelectOption>
                    <SelectOption value={"septiembre"}>
                      Septiembre
                      </SelectOption>
                    <SelectOption value={"octubre"}>
                      Octubre
                      </SelectOption>
                    <SelectOption value={"noviembre"}>
                      Noviembre
                      </SelectOption>
                    <SelectOption value={"diciembre"}>
                      Diciembre
                      </SelectOption>
                  </SelectInput>
                </VerticalLayout>
                <VerticalLayout>
                  <HorizontalLayout>
                    <CheckboxInput
                      name={"summer"}
                      value={"verano"}
                      checked={this.state.summerChecked}
                      onChange={this.handleChange}
                    />
                    <FormText>
                      Verano
                    </FormText>
                  </HorizontalLayout>
                </VerticalLayout>
              </HorizontalLayout>
            </CenterFormLayout>
          </VerticalLayout>
        </VerticalLayout>
      </HandleError>
    )
  }
}

export default CapacidadElectrica;