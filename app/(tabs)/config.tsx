import { StyleSheet } from 'react-native';

import InputField from '@/components/InputField';
import CustomButton from '@/components/CustomButton';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.text}>En esta sección, podrás ajustar los límites adecuados para los niveles de gas y temperatura, así como configurar un correo electrónico para recibir notificaciones.</Text>
      <InputField label='Límite de gas'/>
      <InputField label='Límite de temperatura'/>
      <InputField label='Correo para notificaciones'/>
      <CustomButton title='Enviar' onPress={() => console.log("Hola")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    fontWeight: 'normal',
    alignSelf:'center',
    marginHorizontal: 25,
    marginBottom:20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});