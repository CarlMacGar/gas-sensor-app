import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre la aplicación</Text>
      <View
        style={styles.separator}
        lightColor="rgba(255,255,255)"
        darkColor="#eee"
      />
      <View style={styles.modalContainer}>
        <Text style={styles.modalTextIntro}>
          Esta aplicación móvil está diseñada para ayudar a los usuarios a
          monitorear de manera constante el gas y la temperatura en su entorno.
        </Text>
        <View>
          <Text style={styles.modalText}>
            <Text style={styles.bold}>1. Pestaña Principal:</Text> Muestra los
            datos en tiempo real sobre la concentración de gas y temperatura.
            Los valores se actualizan automáticamente para mantener al usuario
            informado sobre la calidad del aire.
          </Text>
          <Text style={styles.modalText}>
            <Text style={styles.bold}>2. Pestaña de Historial:</Text> Permite
            visualizar un registro de todas las notificaciones recibidas,
            incluyendo alertas sobre niveles críticos de gas o temperaturas
            fuera del rango seguro.
          </Text>
          <Text style={styles.modalText}>
            <Text style={styles.bold}>3. Pestaña de Configuración:</Text> Aquí
            los usuarios pueden ajustar los límites de gas y temperatura, así
            como configurar los métodos de notificación, como correos
            electrónicos.
          </Text>
        </View>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  modalContainer: {
    padding: 20,
  },
  modalText: {
    fontSize: 16,
    textAlign: "left",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  modalTextIntro: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
});
