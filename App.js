/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';



import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
} from 'react-native';

import {Home, Profile} from './src/screens';
import {HeaderBar} from './src/components';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod 
*/

const App = () => {

	return (
		<SafeAreaView style={{ backgroundColor: '#3jdo30' }}>
			<StatusBar />
			<ScrollView>
				<HeaderBar/>
				{/* <Profile/> */}
				<Home /> 
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
})
export default App;