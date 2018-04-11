import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Button, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class FacebookIntro extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../assets/Sooshyo_intro_top_logo.png')} style={{marginTop:30}}/>
                <Image source={require('../assets/facebook_intro_logo.png')}/>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'white'}}>Connect your Social accounts and enjoy</Text>
                    <Text style={{color:'white'}}>the posts of your favorite pages, miss nothing</Text>
                    <Text style={{color:'white'}}>any more, and Ads-Free</Text>
                </View>
                <Button rounded iconLeft light style={{alignSelf:'center', paddingHorizontal:20}}>
                    <FontAwesome name='facebook' size={20} color="#1976d2" style={{marginRight:20}}/>
                    <Text style={{color:'#425ab4'}}>Connect with Facebook</Text>
                </Button>
            </View>            
        )
    }
}

let styles={
    container:{
        flex:1,
        justifyContent:'space-between',
        paddingBottom:'10%',
        alignItems:'center',        
        backgroundColor:'#1976d2'
    }
}