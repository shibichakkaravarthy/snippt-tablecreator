import  React from 'react';
import ReactNative from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-stack';
import {ColumnCreate, TableCreate} from './Screens';

const AppNavigator = createDrawerNavigator(
	{
		'Create Columns': {
			screen: props => <ColumnCreate importColumns={this.props.importColumns} />
		},
		'Table Create': {
			screen: props => <TableCreate data={this.props.columnData} />,
		},
	},
	{
		initialRouteName: 'Create Columns',
		drawerPosition: 'left',
		drawerType: 'slide',
		unmountInactiveRoutes: true
	}
)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;