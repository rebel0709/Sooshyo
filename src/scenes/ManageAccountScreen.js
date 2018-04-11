import React, {Component} from 'react'
import {View, Text, StatusBar} from 'react-native';
import {Content, Container, Header, Left, Right, Icon, Body, Title, List, ListItem, Text as NBText, Button} from 'native-base'
import {Footer, FooterTab} from 'native-base';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class ManageAccountScreen extends Component{
    static navigationOptions = {
        // headerTitle instead of title
        header:'none'
    };

    constructor(props){
        super(props)

    }

    render(){
        return(
            <Container>
                <Header style={{backgroundColor:'#00aced'}}>
					<Left style={{flex:null}}>
                        <Icon name="md-menu" style={{color:"white"}} onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
					</Left>
                    <Body>
                        <Title style={{color:'white'}}>Manage Account</Title>
                    </Body>
                    <Right style={{flex:null}}/>
				</Header>
                <Content style={{backgroundColor:'#4d16a3'}}>
                    <List >
                        <ListItem>
                            <Left style={{flex:null}}>
                                <FontAwesome name='facebook' size={25} color='white'/>
                            </Left>
                            <Body >
                                <NBText style={{color:'white'}}>Facebook Account</NBText>
                            </Body>
                            <Right style={{flex:null}}>
                                <Button rounded light small>
                                    <NBText>Disconnect</NBText>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left style={{flex:null}}>
                                <FontAwesome name='twitter' size={20} color='white'/>
                            </Left>
                            <Body>
                                <NBText style={{color:'white'}}>Twitter Account</NBText>
                            </Body>
                            <Right style={{flex:null}}>
                                <Button rounded light small>
                                    <NBText>Disconnect</NBText>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left style={{flex:null}}>
                                <FontAwesome name='instagram' size={25} color='white'/>
                            </Left>
                            <Body>
                                <NBText style={{color:'white'}}>Instagram Account</NBText>
                            </Body>
                            <Right style={{flex:null}}>
                                <Button rounded light small>
                                    <NBText>Disconnect</NBText>
                                </Button>
                            </Right>
                        </ListItem>                                        
                    </List>
                </Content>
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