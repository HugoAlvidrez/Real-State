import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'left',
      justifyContent: 'center',
    },
    title: {
      fontSize: 50,
      color: '#f3a4e2',
      fontWeight: 'bold'
    },
    title2: {
      fontSize: 50,
      color: '#f3a4e2',
      fontWeight: 'bold',
      marginBottom: 30
    },
    formText: {
      color: '#f3a4e2',
    },
    formText2: {
      color: '#f3a4e2',
      marginTop: 5
    },
    input: {
      height: 40,
      marginVertical: 12,
      borderColor: '#f3a4e2',
      borderWidth: 1,
      padding: 10,
      borderRadius: 100,
      color: '#f3a4e2'
    },
    button: {
      marginTop: 300,
      backgroundColor: '#f3a4e2',
      width: 60,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 60,
    },
    provider: {
      marginTop: 10,
      backgroundColor: '#f3a4e2',
      alignItems: 'left',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 60
    },
    providerText: {
      color: '#fff',
    },
    centerBox: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    link: {
      marginTop: 20,
      paddingLeft: 8,
      color: '#f3a4e2',
      textDecorationLine: 'underline',
      textDecorationColor: '#f3a4e2'
    },
    errorText: {
      color: 'red',
      marginTop: 10,
      textAlign: 'center',
    }, // Error message style for email

    passwordContainer: {
      flex: 1,
      backgroundColor: '#f3a4e2',
      alignItems: 'left',
      justifyContent: 'center',
    },
    passwordTitle: {
      fontSize: 50,
      color: '#fff',
      fontWeight: 'bold'
    },
    passwordFormText: {
      color: '#fff',
    },
    passwordInput: {
      height: 40,
      marginVertical: 12,
      borderColor: '#fff',
      borderWidth: 1,
      padding: 10,
      borderRadius: 100,
      color: '#fff'
    },
    passwordButton: {
      marginTop: 300,
      backgroundColor: '#fff',
      width: 60,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 60,
    },
    passwordLink: {
      marginTop: 20,
      paddingLeft: 8,
      color: '#fff',
      textDecorationLine: 'underline',
      textDecorationColor: '#fff'
    },
    errorTextPassword: {
      color: 'red',
      marginTop: 10,
      textAlign: 'center',
    }, 
});

export default styles;
