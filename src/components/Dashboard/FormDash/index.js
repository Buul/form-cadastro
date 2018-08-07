import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, DatePicker, Button, Radio, Select, Row, Col } from 'antd';

import style from './style.css';
import { getOrgaoEmiss, submitForm, submitFormReset } from '../../../actions/index';
import CustomModal from '../../../ui_components/CustomModal';

const FormItem = Form.Item;
const Option = Select.Option;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class FormDash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataEmi: '',
      sexo: 'MASCULINO',
      add: false,
      message: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(getOrgaoEmiss());
    this.props.form.validateFields();
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.dataResponse !== nextProp.dataResponse) {
      if (nextProp.dataResponse) {
        this.setState({ add: nextProp.dataResponse, message: "Adicionado com Sucesso!" })
        this.props.form.resetFields();
        this.props.dispatch(submitFormReset(false));
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = {
          rg: values.rg,
          dataEmi: this.state.dataEmi,
          orgaoExp: values.orgaoExp,
          sexo: this.state.sexo,
        }
        this.props.dispatch(submitForm(data));
      }
    });
  }


  handleChange = name => event => {
    switch (name) {
      case 'dataEmi':
        if (event !== null) {
          let date = event._d;
          let dateFomat = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
          this.setState({ [name]: dateFomat });
        } else {
          this.setState({ [name]: "" });
        }
        break;
      case 'sexo':
        this.setState({ [name]: event.target.value });
        break;
      default:
        break;
    }
  };

  handleDatevalidator = (rule, value, callback) => {
    if (value > Date.now()) {
      callback('Data de emissão inválida')
    }
    callback()
  }

  handleOk = () => {
    this.setState({ add: false })
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const rgError = isFieldTouched('rg') && getFieldError('rg');
    const dataEmiError = isFieldTouched('dataEmi') && getFieldError('dataEmi');
    const orgaoExpError = isFieldTouched('orgaoExp') && getFieldError('orgaoExp');

    return (
      <div className={style.component}>
        <Row type="flex" justify="center" align="top">
          <h1>DADOS PESSOAIS</h1>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Row>
              <Col md={{ span: 8, offset: 0 }} xs={{ span: 20, offset: 4 }}>
                <FormItem
                  validateStatus={rgError ? 'error' : ''}
                  help={rgError || ''}
                >
                  {getFieldDecorator('rg', {
                    rules: [
                      { whitespace: true, message: 'RG é inválido' },
                      { required: true, message: 'Número do RG é obrigatório' }
                    ],
                  })(
                    <Input
                      maxLength={15}
                      type="text"
                      name="rg"
                      placeholder="NÚMERO DO RG"
                      className="field"
                      size="large"
                      onChange={this.handleChange('rg')}
                      onKeyDown={(event) => this.setState({ key: event.keyCode || event.charCode })}
                    />
                  )}
                </FormItem>
              </Col>
              <Col md={{ span: 8, offset: 0 }} xs={{ span: 20, offset: 4 }}>
                <FormItem
                  validateStatus={dataEmiError ? 'error' : ''}
                  help={dataEmiError || ''}
                >
                  {getFieldDecorator('dataEmi', {
                    rules: [
                      { validator: this.handleDatevalidator },
                      { required: true, message: "Data de emissão é obrigatória!" }
                    ],
                  })(
                    <DatePicker
                      name="dataEmi"
                      size="large"
                      placeholder="DATA DE EMISSÃO"
                      className="field"
                      format="DD-MM-YYYY"
                      onChange={this.handleChange('dataEmi')}
                    />
                  )}
                </FormItem>
              </Col>
              <Col md={{ span: 8, offset: 0 }} xs={{ span: 20, offset: 4 }}>
                <FormItem
                  validateStatus={orgaoExpError ? 'error' : ''}
                  help={orgaoExpError || ''}
                >
                  {getFieldDecorator('orgaoExp', {
                    rules: [{ required: true, message: "Selecione o Orgão Expedidor" }],
                  })(
                    <Select
                      name="orgaoExp"
                      placeholder="ORGÃO EXPEDIDOR"
                      size="large"
                      className="field"
                      onChange={(value) => this.setState({ orgaoExp: value })}
                      showSearch
                      optionFilterProp="children"
                      notFoundContent="Orgão Emissor não encontrado"
                      filterOption={(input, option) => (
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      )}
                    >
                      {this.props.orgaoEmiss && this.props.orgaoEmiss.map((value, index) => (
                        <Option key={index} value={value.value}>{value.label}</Option>
                      ))}
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row type="flex" justify="space-around" align="middle" className="radio">
              <Col md={8}>
                <Radio.Group buttonStyle="solid" size="large" defaultValue="MASCULINO" onChange={this.handleChange('sexo')}
                >
                  <Radio.Button className="radioItem" value="MASCULINO">MASCULINO</Radio.Button>
                  <Radio.Button value="FEMININO">FEMININO</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
            <Row type="flex" justify="space-around" align="middle">
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  disabled={hasErrors(getFieldsError())}
                >
                  CONTINUAR
               </Button>
              </FormItem>
            </Row>
          </Form>
        </Row>
        <CustomModal
          visible={this.state.add}
          onOk={this.handleOk}
          onCancel={this.handleOk}
          message={this.state.message}
        />
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    orgaoEmiss: state.util.orgaoEmiss,
    dataResponse: state.form.dataResponse
  };
};


//export default connect(mapStateToProps)(FormDash);
export default connect(mapStateToProps)(Form.create()(FormDash));