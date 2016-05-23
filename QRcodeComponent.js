'use strict';

const React = require('react-native');

const {
	View,
	Image,
	Text,
} = React;

const qrcode = require('../vendor/qrcode');

const QRcode = React.createClass({
	render:function(){
		return (
			<View>
				{
					this.getQRcodeImage()
				}
			</View>
		)
	},
	getQRcodeImage:function(){

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
})

module.exports = QRcode;