import React from 'react';
import {View, SafeAreaView, Text, ScrollView, TextInput, Picker, Button, Alert} from 'react-native';
import styles from '../Styles';

class TableCreate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [],
			rowCount: 20,
			tableData: [],
			pickerDefault: 'Select'
		}
	}

	onCellChange = (i, field, event, type) => {
		if(this.state.tableData[i] === undefined) {
			let data = this.state.tableData;
			let obj = {}

			this.state.columns.map(column => {
				obj[column.name] = ''
			})

			obj[field] = event



			data.push(obj)
			this.setState({tableData: data})
		}
		else {
			let data = this.state.tableData;

			if (type === 'date' && event.length === 2) {
				if(event <= 31) {
					event = event + ' / ';
				}
				else {
					Alert.alert('Invalid Date', 'Please Enter Valid Date')
					event = ''
				}
			}

			if (type === 'date' && event.length === 7) {
				console.log((parseInt(event.slice(5,7))))
				if(parseInt(event.slice(5,7)) <=12) {
					event = event + ' / ';
				}

				else {
					Alert.alert('Invalid Date', 'Please Enter Valid Date')
					event = ''
				}
			}

			data[i][field] = event;

			this.setState({tableData: data})
		}

		if(i === this.state.rowCount) {
			this.setState({rowCount: this.state.rowCount + 1})
		}
	}

	onSubmitPress = (row, column) => {
		console.log(column, this.state.columns.length -2)
		if (column === this.state.columns.length -2) {
			this.TextInput[`${row+1},0`].focus()
			console.log(`last column ${row+1},0`)
		}

		else if (column < this.state.columns.length -1) {
			this.TextInput[`${row},${column + 1}`].focus()
			console.log(`other Column ${row}`,`${column + 1}`)
		}
	} 

	componentDidMount() {
		this.setState({columns: this.props.data, tableData: this.props.tableData})
	}

	render() {
		this.TextInput = []
		return (
			<SafeAreaView style={styles.scrollView}>
				<View style={[styles.row, styles.backgroundeee]} >
					{
						this.state.columns.map(column => {
							if(column.name !== '') {
								return (
									<Text style={[styles.scrollView, styles.bold, styles.fontCenter, styles.padding10]} >{column.name}</Text>
								)
							}
						})
					}
				</View>
				<View style={styles.scrollView} >
					<ScrollView style={styles.scrollView} >
						{
							[...Array(this.state.rowCount)].map((e,id) => {
								return (
									<View style={styles.row} key={id}>
										{
											this.state.columns.map((column, i) => {
												if(column.type === 'multiselect') {
													let pickerItem = column.multiselect.split(',')
													pickerItem.unshift('Select')
													return (
														<View style={[{borderWidth: 1, borderColor: '#ccc', margin: 0, padding: 0}, styles.scrollView]} key={i} >
															<Picker ref={(input) => {this.TextInput[`${id},${i}`] = input;}} onValueChange={(event) => this.onCellChange(id,column.name,event, column.type) } selectedValue={this.state.tableData[id] === undefined ? this.state.pickerDefault : this.state.tableData[id][column.name]} style={styles.scrollView} >
																{
																	pickerItem.map(item => {
																		return (
																			<Picker.Item label = {item} value={item} />
																		)
																	})
																}
															</Picker>
														</View>
													)
												}

												else if (column.type === 'number') {
													return (
														<TextInput returnKeyType={"next"} value={this.state.tableData[id] === undefined ? '' : this.state.tableData[id][column.name]} onChangeText={(event) => this.onCellChange(id,column.name,event, column.type) } style={[styles.scrollView, {height: 50, borderWidth: 1, borderColor: '#ccc'}]} keyboardType='numeric' />
													)
												}

												else if (column.type === 'date' && column.name !== '') {
													return (
														<TextInput returnKeyType={"next"} placeholder='dd / mm / yyyy' maxLength={14} value={this.state.tableData[id] === undefined ? '' : this.state.tableData[id][column.name]} onChangeText={(event) => this.onCellChange(id,column.name,event, column.type) } style={[styles.scrollView, {height: 50, borderWidth: 1, borderColor: '#ccc'}]} keyboardType='numeric'  />
													)
												}
											})
										}
									</View>
								)
							})
						}
					</ScrollView>
					<Button title='Save Table' onPress={() => {this.props.importTable(this.state.tableData); Alert.alert('Saved Successfully', 'All Data were saved Successfully')}} />
				</View>
			</SafeAreaView>
		)
	}
}

export {TableCreate};