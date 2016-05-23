'use strict';

const React = require('react-native');

const {
	View,
	Text
} = React;

const Camera = require('react-native-camera');
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const QRcodeScanner = React.createClass({
	readed:false,
	componentDidMount:function(){
	},
	getInitialState:function(){
		return {
			torchMode:0
		}
	},
	render:function(){

		return (
			<View style={{ flex:1 }}>
				<Camera style={{ height:Layout.SCREEN_HEIGHT - 20, width:Layout.SCREEN_WIDTH }}
					torchMode = { this.state.torchMode }
					onBarCodeRead = { this.barcodeHandler }
				/>
				<View onTouchEnd = { () => { if( this.state.torchMode == 0 ){ this.trunOnTorch() } else { this.turnOffTorch() } } }>
					<Text>{ () => { return this.state.torchMode == 0 ? 'on' : 'off' } }Hello</Text>
				</View>
			</View>
		)
	},
	barcodeHandler:function( str ){

		if( !this.readed ){
			console.log( JSON.stringify( str ) );
			this.readed = true;
		}
	},
	trunOnTorch:function(){

		this.setState({
			torchMode:1
		})
	},
	turnOffTorch:function(){
		this.setState({
			torchMode:0
		})
	}
})

module.exports = QRcodeScanner;