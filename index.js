import { Button, Image, Text, View } from "react-native";
import styles from "./styles";

export default function Filme(props){
    return(
        <View style={styles.container}>
            <View style= {styles.ViewImagem}>
                <Image style={styles.img} source={{
                    uri: props.filme.urlimg
                }} />

        
            </View>
            <View style={styles.ViewDados}>
                <Text style={styles.nome}>{props.filme.nome}</Text>
                <Text style={styles.descricao}>{props.filme.descricao}</Text>
                <Button style={styles.btnTrocar} title="Trocar"></Button>
            </View>

        </View>
    );
}