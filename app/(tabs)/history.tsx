import { StyleSheet } from "react-native";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { Text, View } from "@/components/Themed";
import { ScrollView } from "react-native";
import HistoryItem from "@/components/HistoryItem";

import { getHistory } from "@/services/history";

//TODO: Hacerlo dinámico usando el componente de React-Native FlatList

export default function TabTwoScreen() {
  const [history, setHistory] = useState<Object | any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const data = await getHistory(); // Reemplaza con tu función para obtener datos
      setHistory(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []) // No incluyas dependencias si no necesitas reaccionar a cambios externos
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Historial de notificaciones</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        {loading && <Text>Cargando...</Text>}
        {history.map((item: any) => {
          return <HistoryItem key={item.id} data={item} />;
        }, [])}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginTop: 30,
    marginBottom: 15,
    height: 1,
    width: "80%",
  },
});
