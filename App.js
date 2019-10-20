/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import styles from './src/Styles';
import {ColumnCreate, TableCreate, TableView, Main} from './src/Screens';
import {Header} from './src/Components';

const initialState = {};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      columnData: [],
      tableData: [],
      route: 'main',
    }
  }

  routeChanger = (route) => {
    this.setState({route})
  }

  importTable = (table) => {
    this.setState({tableData: table})
  }

  importColumns = (columns) => {
    this.setState({columnData: columns})
  }

  componentDidUpdate() {
    console.log(this.state.tableData)
  }

  render() {
    const {route} = this.state;
    if(route === 'columnCreate') {
      return (
        <View style={styles.scrollView} >
          <Header routeChanger={this.routeChanger} />
          <ColumnCreate importColumns={this.importColumns} columnData={this.state.columnData} />
        </View>
      );
    }

    else if (route === 'tableCreate') {
      return (
        <View style={styles.scrollView} >
          <Header routeChanger={this.routeChanger} />
          <TableCreate data={this.state.columnData} importTable={this.importTable} tableData={this.state.tableData} />
        </View>
      )
    }

    else if (route === 'tableView') {
      return (
        <View style={styles.scrollView} >
          <Header routeChanger={this.routeChanger} />
          <TableView routeChanger={this.routeChanger} columnData={this.state.columnData} tableData={this.state.tableData} />
        </View>
      )
    }

    else if (route === 'main') {
      return (
        <View style={styles.scrollView} >
          <Header routeChanger={this.routeChanger} />
          <Main routeChanger={this.routeChanger}/>
        </View>
      )
    }

  }
}

export default App;
