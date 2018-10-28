import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, CustomModal } from './common';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
      const { name, phone, shift } = this.props;
      this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onSendTextPress() {
    const { name, phone, shift } = this.props;
    Communications.text(phone,`Hi ${name}, Your upcoming shift is on ${shift}`);
  }

  onConfrimAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
    // this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onSendTextPress.bind(this)}>
            Send Time
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: true })}>
            Fire Employee
          </Button>
        </CardSection>

        <CustomModal
          visible={this.state.showModal}
          onAccept={this.onConfrimAccept.bind(this)}
          onDecline={() => this.setState({ showModal: false })}
        >
          Are you sure you want to delete this employee?
        </CustomModal>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
