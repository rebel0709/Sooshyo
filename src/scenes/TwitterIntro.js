import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Button, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class TwitterIntro extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../assets/Sooshyo_intro_top_logo.png')} style={{marginTop:30}}/>
                <Image source={require('../assets/twitter_intro_logo.png')}/>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'white'}}>If you have thousands of followers, use this app.</Text>
                    <Text style={{color:'white'}}>reach out to all of your followers who use </Text>
                    <Text style={{color:'white'}}>this app without any extra cost.</Text>
                </View>
                <Button rounded iconLeft light style={{alignSelf:'center', paddingHorizontal:20}}>
                    <FontAwesome name='twitter' size={20} color="#00aced" style={{marginRight:20}}/>
                    <Text style={{color:'#00aced'}}>Connect with Twitter</Text>
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
        backgroundColor:'#00aced'
    }
}