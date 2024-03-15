import { ImageBackground } from "react-native"
import { View, Text } from "react-native"
import { styles } from './style'

export function Slide3() {
    const slide3 = require('../../../assets/bg.png')
    return (
        <ImageBackground style={styles.container} source={slide3}>
            <View style={styles.title}>
                <Text style={styles.title}>EVENTOS ASTRONOMICOS</Text>
            </View>
            <View>
                <Text style={styles.text}>Calendario de eventos astronomicos observaveis</Text>
            </View>
        </ImageBackground>
        
    )
}