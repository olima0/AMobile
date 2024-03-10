import { ImageBackground } from "react-native";
import { styles } from './style'
import { Text, Image, View, TextInput } from "react-native";

export function Login() {
    const Login = require('../../assets/bg.png')
    return(
        <ImageBackground style={styles.container} source={Login}>
            <View style={styles.title}>
                <Text style={styles.title}>ASTRO</Text>
            </View>
            <View style={styles.email}>
                <Text style={styles.email}>Email</Text>
            </View>
            <View style={styles.box1}>
            <TextInput
                style={{ fontSize: 40, color: 'white' }}
                placeholder=""
            />
            </View>
            <View style={styles.psw}>
                <Text style={styles.psw}>Password</Text>
            </View>
            <View style={styles.box2}>
            <TextInput
                style={{ fontSize: 40, color: 'white' }}
                placeholder=""
            />
            </View>
            <View style={styles.box3}>
                <Text style={styles.textbox}>ACESSAR</Text>
            </View>
        </ImageBackground>
    )
}