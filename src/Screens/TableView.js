import React from 'react';
import {ScrollView, View, Text, Button} from 'react-native';
import styles from '../Styles.js';

class TableView extends React.Component {
	constructor() {
		super();
		this.state={
			columns: [],
			tableData: []
		}
	}

	componentDidMount() {
		this.setState({columns: this.props.columnData, tableData: this.props.tableData})
		console.log(this.props)
	}

	render() {
		return (
			<View style={styles.scrollView} >
				<View style={styles.scrollView} >
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
					<ScrollView>
						{
							this.state.tableData.map(row => {
								return (
									<View key={row.name} style={[styles.row]} >
										{
											this.state.columns.map(column => {
												if(column.name !== '') {
													return (
														<Text key={column.name} style={[styles.scrollView, styles.bold, styles.padding10, styles.border]} >{row[column.name]}</Text>
													)
												}
											})
										}
									</View>
								)
							})
						}
					</ScrollView>
					<Button title='Edit Table' onPress={() => this.props.routeChanger('tableCreate')} />
				</View>
			</View>
		)
	}
}

export {TableView};