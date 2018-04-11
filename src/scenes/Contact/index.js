import React, {Component} from 'react'
import {View, Text, StatusBar, Image} from 'react-native';
import {Content, Container, Header, Left, Right, Icon, Body, Title, List, ListItem, Text as NBText, Button} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Footer, FooterTab, H2, Form, Item, Input, Textarea} from 'native-base';

export default class ContactScreen extends Component{
    render(){
        return(
            <Container>
                <Header style={{backgroundColor:'#00aced'}}>
					<Left style={{flex:null}}>
                        <Icon name="md-menu" style={{color:"white"}} onPress={()=>this.props.navigation.navigate('DrawerOpen')} />
					</Left>
                    <Body>
                        <Title style={{color:'white'}}>Contact Us</Title>
                    </Body>
                    <Right style={{flex:null}}/>
				</Header>
                <Content style={{backgroundColor:'#7c22b8', paddingTop:'5%'}}>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'baseline'}}>
                        <Image source={require('../../assets/message_symbol.png')} style={{width:35, height:35, marginRight:20}}/>
                        <H2 style={{color:'white'}}>Get in touch</H2>
                    </View>
                    <Form style={{marginHorizontal:'10%', marginTop:'10%'}}>
                        <Item rounded style={{backgroundColor:'white', marginVertical:5}}>
                            <Input placeholder='Full Name'/>
                        </Item>
                        <Item rounded style={{backgroundColor:'white', marginVertical:5}}>
                            <Input placeholder='Email Address'/>
                        </Item>
                        <Item rounded style={{backgroundColor:'white', marginVertical:5}}>
                            <Input placeholder='Phone Number'/>
                        </Item>
                        <Textarea rowSpan={5} bordered placeholder="Textarea" style={{backgroundColor:'white', borderRadius:10}}/>
                    </Form>
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