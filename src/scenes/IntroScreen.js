import React, {Component} from 'react'
import {View, Text, StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';

import FacebookIntro from './FacebookIntro';
import TwitterIntro from './TwitterIntro';
import InstagramIntro from './InstagramIntro';

let pageIndex=0;
export default class IntroScreen extends Component{
    static navigationOptions = {
        // headerTitle instead of title
        header:'none'
    };

    constructor(props){
        super(props);        
    }

    render(){
        return(
            <View style={styles.container}>
                <Swiper showsButtons={false} dotStyle={{marginBottom:'1%'}} dotColor='darkgrey' 
                        activeDotColor='white' activeDotStyle={{marginBottom:'1%'}}
                        onIndexChanged={(index)=>{pageIndex=index; console.log("ddd",pageIndex)}}
                        ref={(swiper) => {this.swiper = swiper;}}>
                    <FacebookIntro />
                    <TwitterIntro/>
                    <InstagramIntro />                    
                </Swiper>
                <View style={styles.bottomContainer}>
                    <Text style={{color:'white'}} onPress={()=>this.onSkip()}>Skip</Text>
                    <Text style={{color:'white'}} onPress={()=>this.onNext()}>Next</Text>
                </View>
            </View>
        )
    }

    onSkip(){
        this.props.navigation.navigate('Home');
    }

    onNext(){
        let nextIndex = (pageIndex+1)%3;        
        this.swiper.scrollBy(nextIndex, true)
    }
}

let styles = {
    container:{
        flex:1,
        paddingVertical:20
    },
    bottomContainer:{
        justifyContent:'space-between', 
        flexDirection:'row',
        backgroundColor:'transparent',
        marginTop:'-12%',
        paddingHorizontal:20
    }
}