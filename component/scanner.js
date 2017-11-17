
import React, { Component } from 'react' ;
import PropTypes from 'prop-types' ;
import { Platform, StyleSheet, View, Text } from 'react-native' ;

import Camera from 'react-native-camera' ;


export default class Scanner extends Component {

    static propTypes = {
        onCodeRead : PropTypes.func,
    } ;

    onCodeRead = result => {
        const {type, data} = result ;
        const {onCodeRead} = this.props ;
        console.log(result) ;
        onCodeRead && onCodeRead(type, data) ;
    } ;

    render () {
        const {style={}} = this.props ;

        const rootStyle = StyleSheet.flatten([styles.camera, style]) ;

        return (
            <Camera onBarCodeRead={ this.onCodeRead } style={ rootStyle }>
                <View style={ styles.rectangleContainer }>
                    <View style={ styles.rectangle }></View>
                </View>
            </Camera>
        ) ;
    }

} ;

const styles = StyleSheet.create({
    camera : {
        width  : '100%',
        height : 256,
    },
    rectangleContainer : {
        flex  : 1,
        alignItems : 'center',
        justifyContent  : 'center',
        backgroundColor : 'transparent',
    },
    rectangle : {
        height : 200,
        width  : 200,
        borderWidth : 2,
        borderColor : '#00FF00',
        backgroundColor : 'transparent',
    },
}) ;
