import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeeFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeeFetch();
  }

  renderItem(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={employee => employee.uid}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employeeList, (val, uid) => {
      return { ...val, uid }; // { shift:'Maonday' , name: "SSDD", uid: "23nfj4r43h" }
  });

  return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
