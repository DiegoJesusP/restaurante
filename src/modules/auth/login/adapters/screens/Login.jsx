import {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Input, Button, Icon, Image} from "@rneui/base";
import Logo from '../../../../../../assets/img/mapache.jpg';
import { isEmpty } from 'lodash';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState('');

  const login = () => {
    if(!isEmpty(email) && !isEmpty(password)){
      //proceso de login
      console.log('Listo para iniciar sesion');
      setShowErrorMessage('');
    }else{
      setShowErrorMessage('Campos obligatorios');
    }
  }

  return (
    <View style={styles.container}>
      <Image 
        source={Logo}
        style={styles.logo}
        containerStyle={styles.logoContainer}
      ></Image>
      <Input
        placeholder="diego@gmail.com"
        onChange={({nativeEvent: {Text}}) => setEmail(Text)}
        label="Correo electronico *"
        labelStyle={styles.label}
        containerStyle={styles.input}
        keyboardType='email-address'
        rightIcon={
          <Icon
            type='material-community'
            name='email'
            color='#ef524a'
          ></Icon>}
        errorMessage={showErrorMessage}
      ></Input>
      <Input
        placeholder="************"
        onChange={({nativeEvent: {Text}}) => setPassword(Text)}
        label="Contraseña *"
        labelStyle={styles.label}
        containerStyle={styles.input}
        secureTextEntry={showPassword}
      rightIcon={
      <Icon 
        color='#ef524a'
        type='material-community' 
        name={showPassword ? 'eye-off-outline': 'eye-outline'}
        onPress={()=> setShowPassword(!showPassword)}
        ></Icon>}
        errorMessage={showErrorMessage}
      ></Input>

      <Button
        containerStyle={styles.btnContainer}
        title='Iniciar sesion'
        onPress={login}
        buttonStyle={styles.btnStyle}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    padding: 16,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'containt',
    marginBottom: 16
  },
  logoContainer:{
    marginBottom:16
  },
  input:{
    marginVertical: 8,
    paddingHorizontal: 30,
  },
  label: {
    color: "#88c040",
    fontSize: 16,
  },
  btnContainer:{
    width: '80%',
  },
  btnStyle:{
    backgroundColor: '#ef524a'
  },
});