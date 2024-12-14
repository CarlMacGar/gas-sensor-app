import { StyleSheet, Alert, Linking } from "react-native";

import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Text, View } from "@/components/Themed";
import { useState } from "react";

import { setEmail } from "@/services/notificaction";
import { setThresholds } from "@/services/thresholds";

export default function TabTwoScreen() {
  const [gasLimit, setGasLimit] = useState("");
  const [tempLimit, setTempLimit] = useState("");
  const [emailIn, setEmailIn] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (gasLimit === "" || tempLimit === "" || emailIn === "") {
      setError("Por favor, llena todos los campos");

      setTimeout(() => {
        setError("");
      }, 5000);

      return;
    }

    if (isNaN(parseFloat(gasLimit)) || isNaN(parseFloat(tempLimit))) {
      setError("Los límites deben ser números");

      setTimeout(() => {
        setError("");
      }, 5000);

      return;
    }

    //TODO: verify if email is valid using regex

    //TODO: verify if gas and temp limits are valid (0-100) and temp

    const resEmail = await setEmail(emailIn);
    const resThresholds = await setThresholds(tempLimit, gasLimit);

    if (resEmail === 200 && resThresholds === 200) {
      Alert.alert(
        "Configuración guardada",
        "Los límites y el correo han sido guardados correctamente"
      );
      setEmailIn("");
      setGasLimit("");
      setTempLimit("");
    } else {
      Alert.alert("Error", "Hubo un error al guardar la configuración");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Configuración</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={styles.text}>
          En esta sección, podrás ajustar los límites adecuados para los niveles
          de gas y temperatura, así como configurar un correo electrónico para
          recibir notificaciones.
        </Text>
        <Text style={{ color: "red" }}>{error}</Text>
        <InputField
          text={gasLimit}
          setText={setGasLimit}
          label="Límite de gas"
        />
        <InputField
          text={tempLimit}
          setText={setTempLimit}
          label="Límite de temperatura"
        />
        <InputField
          text={emailIn}
          setText={setEmailIn}
          label="Correo para notificaciones"
        />
        <CustomButton title="Enviar" onPress={() => handleSubmit()} />
        <View style={{ flex: 1, margin: 10 }}>
          <Text style={{ fontSize: 15, margin: 5 }}>
            Para ser notificado via Telegram de click en el siguiente enlace:
          </Text>
          <Text
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: 10,
              borderRadius: 5,
              textAlign: "center",
            }}
            onPress={() => {
              Linking.openURL("https://t.me/Gas_sensor_IoT_orsoga_bot");
            }}
          >
            TELEGRAM
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    fontWeight: "normal",
    alignSelf: "center",
    marginHorizontal: 25,
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
