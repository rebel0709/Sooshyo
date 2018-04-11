import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Button, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class InstagramIntro extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../assets/Sooshyo_intro_top_logo.png')} style={{marginTop:30}}/>
                <Image source={require('../assets/instagram_intro_logo.png')}/>
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'white'}}>Like, Comment and interact with what you're following</Text>
                    <Text style={{color:'white'}}>easily and at one platform. And it's completely stealth.</Text>
                    <Text style={{color:'white'}}>Nobody will know you're even online</Text>
                </View>
                <Button rounded iconLeft light style={{alignSelf:'center', paddingHorizontal:20}}>
                    <FontAwesome name='instagram' size={30} color="#7c22b8" style={{marginRight:20}}/>
                    <Text style={{color:'#7c22b8'}}>Connect with Instagram</Text>
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
        backgroundColor:'#7c22b8'
    }
}