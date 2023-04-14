import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        height: 180,
        backgroundColor: '#FFDEAD',
        borderRadius: 15,
        
    },
    ViewImagem:{
        width:'30%',
        padding: 10,
    },
    ViewDados:{
        width:'70%',
        padding: 10
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius: 15,
    },
    nome:{
        fontSize:20,
        fontWeight: 'bold',
        textAlign:'center',
    },
    descricao:{
        marginBottom: 10,
        fontSize:10,
    },
    btnTrocar:{
        borderRadius:80,
        bottom:10
    }
});

export default styles;