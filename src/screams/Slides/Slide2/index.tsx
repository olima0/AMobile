import { ImageBackground } from "react-native"
import { View, Text } from "react-native"
import { styles } from './style'

export function Slide2() {
    const Slide2 = require('../../../assets/bg.png')
    return (
        <ImageBackground style={styles.container} source={Slide2}>
            <View style={styles.title}>
                <Text style={styles.title}>ASTROFOTOGRAFIA</Text>
            </View>
            <View>
                <Text style={styles.text}>Fotografias de corpos celestes e grandes áreas do céu noturno</Text>
            </View>
        </ImageBackground>
        
    )
}