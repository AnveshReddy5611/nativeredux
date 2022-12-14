import React,{Component} from 'react'
import {Text, View, Button} from 'react-native'
import {connect} from 'react-redux'
import { increaseBurgerAction, decreaseBurgerAction } from '../Redux/index'

class Screen extends Component{
    render(){
        return(
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <View style={{marginVertical:50}}>
                    <Text>Number Of Burger={this.props.numberOfBurger}</Text>
                    <Button title="Increase Burger" onPress={()=>{this.props.increaseBurger(5)}}></Button>

                </View>
                <View style={{marginVertical:50}}>
                    <Button title="Decrease Burger" onPress={()=>{this.props.decreaseBurger()}}></Button>
                </View>
            </View>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        numberOfBurger:state.numberOfBurger
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        increaseBurger:(parameter)=>{dispatch(increaseBurgerAction(parameter))},
        decreaseBurger:()=>{dispatch(decreaseBurgerAction)}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);