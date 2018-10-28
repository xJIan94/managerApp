import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, TextField } from './common';


class EmployeeForm extends Component {

  renderPickerOptions() {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return weekDays.map(day => {
        return <Picker.Item key={day} label={day} value={day} />;
    });
  }
  
  render() {
    return (
      <View>
        <CardSection>
          <TextField
            label="Name"
            placeholder="James"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <TextField
            label="Phone No"
            placeholder="010-1234567"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}

          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }} >
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            // style={{ flex: 1 }}
          >
            {this.renderPickerOptions()}
          </Picker>
        </CardSection>

      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
