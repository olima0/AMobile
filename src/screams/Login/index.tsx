import { ImageBackground } from "react-native";
import { styles } from './style'
import { Text, Image, View, TextInput } from "react-native";

export function Login() {
    const Login = require('../../assets/bg.png')
    return (
        <ImageBackground style={styles.container} source={Login}>
            <View style={styles.title}>
                <Text style={styles.titletxt}>ASTRO</Text>
            </View>
            <View style={styles.meio}>
                <View style={styles.box1}>
                    <Text style={styles.email}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                    />
                </View>
                <View style={styles.box2}>
                    <Text style={styles.psw}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                    />
                </View>
            </View>
            <View style={styles.box3}>
                <Text style={styles.textbox}>ACESSAR</Text>
            </View>
        </ImageBackground>
    )
}