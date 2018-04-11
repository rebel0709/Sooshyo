import React, {Component} from 'react'
import {View, Text, StatusBar} from 'react-native';
import {Content, Container, Header, Left, Right, Icon, Body, Title, List, ListItem, Text as NBText, Button} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Footer, FooterTab} from 'native-base';

export default class Policy extends Component{
    render(){
        return(
            <Container>
                <Header style={{backgroundColor:'#00aced'}}>
					<Left style={{flex:null}}>
                        <Icon name="md-menu" style={{color:"white"}} onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
					</Left>
                    <Body>
                        <Title style={{color:'white'}}>Privacy Policy</Title>
                    </Body>
                    <Right style={{flex:null}}/>
				</Header>
                <Content/>
                <Footer>
                    <FooterTab>
                        <Button full style={{backgroundColor:'#1976d2'}}>
                            <FontAwesome name='facebook' size={25} color="white"/>
                        </Button>
                        <Button full style={{backgroundColor:'#00aced'}} >
                            <FontAwesome name='twitter' size={25} color="white"/>
                        </Button>
                        <Button full style={{backgroundColor:'#7c22b8'}}>
                            <FontAwesome name='instagram' size={25} color="white"/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}