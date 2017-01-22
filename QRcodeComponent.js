import React , { Component } from 'react';
import {
	View,
	Image,
	Text,
} from 'react-native';

import qrcode from './qrcode-generator/qrcode';

class QRcode extends Component{
	render(){
		return (
			<View>
				{
					this.getQRcodeImage.bind(this)()
				}
			</View>
		)
	}

	getQRcodeImage(){

		const { target } = this.props;

		if( !target ){
			return(
				<View></View>
			)
		}

		let generator = qrcode(4, 'M', true);
		generator.addData(target);
		generator.make();
		let base = generator.getBase64Image();

		return (
			<View>
				<Image source={{ uri:base }} style={{ height:230, width:230 }}/>
			</View>
		)
	}
}

export default QRcode;