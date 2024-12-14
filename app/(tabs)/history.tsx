import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import HistoryItem from '@/components/HistoryItem';

//TODO: Hacerlo dinámico usando el componente de React-Native FlatList

export default function TabTwoScreen() {
  const sampleData = {
    date: '2024-12-13 21:37:30',
    field1: 24.5,
    field2: 224,
    reason: 'Normal',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de notificaciones</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HistoryItem data={sampleData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginTop: 30,
    marginBottom: 15,
    height: 1,
    width: '80%',
  },
});
