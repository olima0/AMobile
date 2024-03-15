import { pagesArray } from "./PagesArray";
import { styles } from './styles/style'
import { View, Text, ImageBackground, Image, TouchableHighlight, TouchableOpacity } from "react-native"
import { useState, Dispatch, SetStateAction } from "react";
import { Buttons } from "../../src/components/botoes/botao1/index"
import { ImageText } from '../../src/components/botoes/botao1/ImageText'
export function PagInicial() {
    const bg = require('../assets/bg.png')    
    const [page, setPage] = useState(0)
    return (
        <ImageBackground style={styles.container} source={bg} >
            <View style={styles.background}>
                <ImageText page={page} />
                <Buttons page={page} altera={setPage} /> 
                
            </View>
        </ImageBackground>
    )
}
