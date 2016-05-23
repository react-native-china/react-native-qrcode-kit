'use strict';

import React{
	View,
	Text,
	Component
} from 'react-native';

import Camera from 'react-native-camera';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class QRcodeScanner extends Component({
	constructor(props) {
	  super(props);
	  this.readed = false
	  this.state = {
			torchMode:0
		};
	}

	render(){

		return (
			<View style={{ flex:1 }}>
				<Camera style={{ height:Layout.SCREEN_HEIGHT - 20, width:Layout.SCREEN_WIDTH }}
					torchMode = { this.state.torchMode }
					onBarCodeRead = { this.barcodeHandler.bind(this) }
				/>
				<View onTouchEnd = { 
						() => {
							if( this.state.torchMode == 0 ){ 
								this.trunOnTorch.bind(this) 
							} else { 
								this.turnOffTorch() 
							} 
						} 
					}>
					<Text>{ () => { 
						return this.state.torchMode == 0 ? 'on' : 'off' } 
					}Hello</Text>
				</View>
			</View>
		)
	}

	barcodeHandler( str ){

		if( !this.readed ){
			console.log( JSON.stringify( str ) );
			this.readed = true;
		}
	}

	trunOnTorch(){

		this.setState({
			torchMode:1
		})
	}

	turnOffTorch(){
		this.setState({
			torchMode:0
		})
	}
})

module.exports = QRcodeScanner;