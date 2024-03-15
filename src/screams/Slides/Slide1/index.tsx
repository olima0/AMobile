import { ImageBackground } from "react-native"
import { View, Text} from "react-native"
import { styles } from './style'
import { useState } from "react";

    export function Slide1() {
    const [page, setPage] = useState(0)
    const slide1 = require('../../../assets/bg.png')
    return (
        <ImageBackground style={styles.container} source={slide1}>
            <View style={styles.title}>
                <Text style={styles.title}>COSMOLOGIA</Text>
            </View>
            <View>
                <Text style={styles.text}>O estudo da origem e da composição do Universo</Text>
            </View>
        </ImageBackground>
        
    )
}
