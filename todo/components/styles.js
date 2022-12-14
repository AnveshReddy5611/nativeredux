
import {StyleSheet} from 'react-native'

const styles=StyleSheet.create({
    item:{
        backgroundColor:'lightgreen',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
        alignItems:'center',

    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'

    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    itemsText:{
        maxWidth:'80%'
    },
    circular:{
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5,
    },

});
export default styles;