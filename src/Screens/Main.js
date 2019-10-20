import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../Styles.js';

const Main = ({routeChanger}) => {
	return (
		<View style={[styles.scrollView, styles.justifyCenter, styles.alignCenter, {backgroundColor: '#30b7fb'}]} >
			<Text style={[styles.font40, styles.colorWhite]}>Table Creator</Text>
			<Text style={[styles.font24, styles.colorWhite]}>For Snippt</Text>

			<View style={[styles.justifyCenter, styles.alignCenter, {marginTop: 100}]} >
				<Text style={[styles.font18, styles.colorWhite]}>Looks like you don't have a Table yet</Text>
				<Text style={[styles.font24, styles.colorWhite]}>Let's Start with Creating Columns</Text>
			</View>

			<View style={{marginTop: 30}}>
				<Button title='Create Columns' color='#fb7430' onPress={() => routeChanger('columnCreate')} />
			</View>
		</View>
	)
}

export {Main};