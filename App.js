import {StyleSheet, Text, View } from 'react-native';
import Filme from './src/components/Jogo';

const listaFilmes = [
  {
    nome:"Arco e flecha",
    descricao:"Um lendário arco e flecha abençoado por um espírito da natureza é utilizado por um jovem caçador de recompensas em suas aventuras pelo reino",
    urlimg:"https://i.pinimg.com/550x/35/31/03/353103304ab178fb9cbdb16b4a5f76f2.jpg"
  },
  {
    nome:"Lança de escalarte",
    descricao:"Uma lança ancestral passada por gerações na família de um guerreiro",
    urlimg:"https://i.pinimg.com/550x/76/f1/c8/76f1c8e08dcfc284025037ed7d14b6b3.jpg"
  },
  {
    nome:"Machado desnecessariamente grande",
    descricao:"Um machado forjado pelos deuses, entregue a um grande guerreiro viking que o usou para vencer batalhas sangrentas. ",
    urlimg:"https://3.bp.blogspot.com/-tUFtKMlleRU/WY-R-1rPyVI/AAAAAAAABr0/5-z6myORWy4NWi4tMDnyK_0Fbzqvq8DRgCLcBGAs/s1600/ab37fd160a08cfa33dd755f0ac55dc98--fantasy-weapons-fantasy-rpg.jpg"
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      {listaFilmes.map(filme => <Filme
        filme={filme}/>)}
    </View>
  );
}

function trocarArma(novoArma) {
  var filme = document.getElementById("arco e flecha");
  filme.src = novoArma;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CD853F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold'

  },
  img: {
    width: 50,
    height: 50
  }
});