import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import {size} from 'lodash';
import { useNavigation } from '@react-navigation/native';

import { validateEmail } from '../../utils/helpers';
import { registerUser } from '../../utils/actions';
import Loading from '../Loading';


export default function RegisterForm() {
    
    //Estado que me permite mostrar o no mostrar el password
    const [showPassword, setShowPassword] = useState(false);

    //Estado para guardar los datos del formulario
    //Creamos un solo estado para todo el formulario
    const [formData, setFormData] = useState(defaultFormValues);
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false)

    //Creo una cosntante para usar la navegación
    const navigation = useNavigation();

    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text});
    }

    const doRegisterUser = async() => {
        
        if (!validateData()) {
            return;
        }
        setLoading(true);
        const result = await registerUser(formData.email, formData.password);
        setLoading(false);

        if (!result.statusResponse) {
            setErrorEmail(result.error);
            return;
        } else {
            navigation.navigate("account");
        }
    }

    const validateData = () => {
        setErrorEmail("");
        setErrorPassword("");
        setErrorConfirmPassword("");
        let isValid = true;

        if (!validateEmail(formData.email)) {
            setErrorEmail("Deber de ingresar un email válido");
            isValid = false;
        }

        if (size(formData.password) < 6) {
            setErrorPassword("Debe ingresar una contraseña de al menos 6 caracteres");
            isValid = false;
        }

        if (size(formData.confirmPassword) < 6) {
            setErrorConfirmPassword("Debe ingresar una confirmación de contraseña de al menos 6 caracteres");
            isValid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            setErrorPassword("Las contraseñas deben coincidir");
            setErrorConfirmPassword("Las contraseñas deben coincidir");
            isValid = false;
        }

        return isValid;
    }

    return (
        <View style={styles.form}>
            <Input 
                containerStyle={styles.input}
                placeholder="Ingresa tu email"
                onChange = {(e) => onChange(e, "email")}
                keyboardType = "email-address"
                errorMessage = {errorEmail} 
                defaultValue = {formData.email}
            />
            <Input 
                containerStyle={styles.input}
                placeholder="Ingresa tu contraseña"
                password={true}
                secureTextEntry={!showPassword}
                onChange = {(e) => onChange(e, "password")}
                errorMessage = {errorPassword} 
                defaultValue = {formData.password}
                rightIcon={
                    <Icon
                        type = "material-community"
                        name = { showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle = {styles.icon}
                        onPress = { () => setShowPassword(!showPassword)}
                    />
                }
            />
            <Input 
                containerStyle={styles.input}
                placeholder="Confirma tu contraseña"
                password={true}
                secureTextEntry={!showPassword}
                onChange = {(e) => onChange(e, "confirmPassword")}
                errorMessage = {errorConfirmPassword} 
                defaultValue = {formData.confirmPassword}
                rightIcon={
                    <Icon
                        type = "material-community"
                        name = { showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle = {styles.icon}
                        onPress = { () => setShowPassword(!showPassword)}
                    />
                }
                
            />
            <Button 
                title="Registrar nuevo usuario"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress= {() => doRegisterUser()}
            />
            <Loading 
                isVisible={loading}
                text="Registrando usuario"
            />
        </View>
    )
}

//Usamos una función que almacena los valores de los campos
const defaultFormValues = () => {
    return {
        email: "",
        password: "",
        confirmPassword: ""
    }
}

const styles = StyleSheet.create({

    form: {
        marginTop: 20,
        alignItems: "center"
    },
    input: {
        width: "80%",
    },
    btnContainer: {
        marginTop: 10,
        width: "60%",
        alignSelf: "center"
    },
    btn: {
        backgroundColor: "#521e08"
    },
    icon: {
        color: "#c1c1c1"
    }
})
