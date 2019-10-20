import React from 'react';
import {View, Text, Modal, Platform, UIManager, LayoutAnimation, TouchableOpacity} from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true)
}

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			toggled: false,
		}
	}

	onToggle = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
		this.setState({toggled: !this.state.toggled})
		console.log(this.state.toggled)
	}

	onRouteChange = (route) => {
		this.props.routeChanger(route)
		this.setState({toggled: !this.state.toggled})
	}

	render() {
		return (
			<View>
				<View style={{elevation: 5, display: 'flex', flexDirection: 'row', padding: 10, alignItems: 'center'}}>
					<TouchableOpacity style={{flex: 1}}><Text onPress={this.onToggle} style={{fontSize: 14, color: '#00b'}}>Menu</Text></TouchableOpacity>
					<Text style={{fontSize: 18, flex: 1, fontWeight: 'bold', textAlign: 'center'}}>Table UI</Text>
					<Text style={{flex: 1}}> </Text>
				</View>

				<View>
					{

						this.state.toggled === true 
						? 
						<View style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
							<TouchableOpacity onPress={() => this.onRouteChange('columnCreate')} ><Text style={{borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 20}} >Create Column</Text></TouchableOpacity>
							<TouchableOpacity onPress={() => this.onRouteChange('tableCreate')} ><Text style={{borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 20}} >Create Table</Text></TouchableOpacity>
							<TouchableOpacity onPress={() => this.onRouteChange('tableView')}><Text style={{borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 20}} >View Table</Text></TouchableOpacity>
						</View> 
						: null
					}
				</View>
			</View>
		)
	}
}

export {Header};