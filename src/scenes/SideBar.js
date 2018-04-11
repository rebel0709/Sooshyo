import React, {Component} from 'react';
import {Container, Content, Header, Text as NBText, List, ListItem} from 'native-base';

export default class SideBar extends Component{
    static navigationOptions = {
        // headerTitle instead of title
        header:'none'
    };
    
    render(){
        return(
            <Container>
                <Content style={styles.menu_wrapper}>
                    <Header style={{backgroundColor:'#00aced'}}/>
                    <List >
                        <ListItem onPress={()=>this.props.navigation.navigate('ManageAccounts')}>
                            <NBText style={{color:'white'}}>Manage Account</NBText>
                        </ListItem>
                        <ListItem onPress={()=>this.props.navigation.navigate('About')}>
                            <NBText style={{color:'white'}}>About Sooshyo</NBText>
                        </ListItem>
                        <ListItem onPress={()=>this.props.navigation.navigate('Policy')}>
                            <NBText style={{color:'white'}}>Privacy Policy</NBText>
                        </ListItem>
                        <ListItem onPress={()=>this.props.navigation.navigate('ToS')}>
                            <NBText style={{color:'white'}}>Terms of  Use</NBText>
                        </ListItem>
                        <ListItem onPress={()=>this.props.navigation.navigate('Contact')}>
                            <NBText style={{color:'white'}}>Contact Us</NBText>
                        </ListItem>
                    </List>
                </Content>
			</Container>
        )
    }
}

let styles={
    menu_wrapper:{
        backgroundColor:'#1976d2'
    }
}