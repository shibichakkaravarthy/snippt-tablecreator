import React from 'react';
import {View, Text, ScrollView, Button, TextInput, Picker, Alert} from 'react-native';
import styles from '../Styles';

class ColumnCreate extends React.Component {
	constructor() {
		super();
		this.state = {
			rows: [1],
			columnData: [{name: '', type: 'number', multiselect: ''}],
			currentName: '',
			currentType: '',
		}
	}

	rowAdd = () => {
		let row = this.state.rows;
		let data = this.state.columnData;

		data.push({name: '', type: 'date', multiselect: ''})
		row.push(1)
		this.setState({rows: row})
	}

	onFieldChange = (field, i, event) => {
		data= this.state.columnData;

		if(data.length === i+1) {
			this.rowAdd()
		}

		data[i][field] = event
		
		this.setState({columnData: data})
	}

	onMultiSelect = (i) => {
		if(this.state.columnData[i].type === 'multiselect') {
			return (
				<TextInput placeholder='Values' value={this.state.columnData[i].multiselect} onChangeText={(value) => this.onFieldChange('multiselect', i, value)} style={[{width: 100, height: 40, borderWidth: 1, borderColor: '#ccc'}, styles.scrollView, styles.margin10]} />
			)
		}
	}

	componentDidMount() {
		console.log(this.props.columnData)
		this.props.columnData.length !== 0 ? this.setState({columnData: this.props.columnData}) : null
	}

	render() {
		let rows = this.state.columnData.map((r,i) => {
			return (
				<View style={[styles.row, styles.scrollView, styles.justifySpaceAround]} key={i} >
					<TextInput placeholder='Column Name' value={this.state.columnData[i].name} onChangeText={(value) => this.onFieldChange('name', i, value)} style={[{width: 100, height: 40, borderWidth: 1, borderColor: '#ccc'}, styles.scrollView, styles.margin10]} />
					<Picker style={[styles.scrollView, styles.margin10]} selectedValue={this.state.columnData[i].type} onValueChange={(value) => this.onFieldChange('type', i, value)} >
					<Picker.Item value='number' label = 'Number' />
					<Picker.Item value='date' label = 'Date' />
					<Picker.Item value='multiselect' label = 'Multi Select' />
					</Picker>
					<View style={[styles.scrollView, styles.margin10]}>
						{
							this.onMultiSelect(i)
						}
					</View>
				</View>
			)
		})

		return (
			<ScrollView style={styles.scrollView} >
				<View style={[styles.scrollView, styles.row,styles.padding10, styles.backgroundeee]} >
					<Text style={[styles.scrollView, styles.bold]} >Column Name</Text>
					<Text style={[styles.scrollView, styles.bold]} >Column Type</Text>
					<Text style={[styles.scrollView, styles.bold]} > </Text>
				</View>
				{
					rows
				}
				<Button title='Save Columns' onPress={() => {this.props.importColumns(this.state.columnData); Alert.alert('Saved Successfully', 'All Data were saved Successfully')}} />
			</ScrollView>
		)
	}
}

export {ColumnCreate};