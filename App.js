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
} from 'react-native';

import {Home, Profile, Credits} from './src/screens';
import {HeaderBar, NavBar} from './src/components';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod 
*/

const App = () => {
	const [page, setPage]= useState('Home')
	return (
		<SafeAreaView style={{ backgroundColor: '#4D5359', flex:1 }}>
			<StatusBar />
			<ScrollView>
				<HeaderBar/>
				<NavBar setPage={(arg)=>{setPage(arg)}}/>
				{page === 'Home'? <Home />:<></>}
				{page === 'Profile'? <Profile />:<></>}
				{page === 'Credits'? <Credits />:<></>}
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;