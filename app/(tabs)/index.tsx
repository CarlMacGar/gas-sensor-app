import { StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, View } from '@/components/Themed';
import { useThemeColor } from '@/components/Themed';
import CustomButton from '@/components/CustomButton';

export default function TabOneScreen() {
  const gasLevel = 65; // Porcentaje de contaminación
  const temperature = 24; // Grados centígrados

  // Usar colores de tema
    const backgroundColor = useThemeColor({}, 'background');
    const textColor = useThemeColor({}, 'text');


  return (
    <View style={[styles.container, {backgroundColor}]}>
      <FontAwesome name="home" size={50} color={textColor} style={styles.icon} />

      <Text style={[styles.title, { color: textColor }]}>Bienvenido a la Página Principal</Text>
      <View style={styles.separator} lightColor="rgba(255,255,255,0.1)" darkColor="#eee" />

      <View style={[styles.dataContainer] }>
        <View style={styles.dataItem}>
          <Text style={[styles.dataValue, { color: textColor }]}>{gasLevel}%</Text>
          <FontAwesome name="cloud" size={30} color="gray" style={styles.dataIcon} />
          <Text style={[styles.dataLabel, { color: textColor }]}>Gas</Text>
        </View>

        <View style={styles.dataItem}>
          <Text style={[styles.dataValue, { color: textColor }]}>{temperature}°C</Text>
          <FontAwesome name="thermometer-half" size={30} color="red" style={styles.dataIcon} />
          <Text style={[styles.dataLabel, { color: textColor }]}>Temperatura</Text>
        </View>
      </View>
      <View style={styles.dataContainer}>
        <CustomButton title='Probar dispositivo' onPress={() => console.log('Probando')}/>
      </View>
    </View>
  );
}

//TODO: Poner esto para la gráfica
/**
 * npm install react-native-chart-kit
# o
yarn add react-native-chart-kit

 * import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { LineChart } from 'react-native-chart-kit';

export default function TabOneScreen() {
  const [data, setData] = useState({
    labels: [],
    datasets: [{ data: [] }],
  });

  // Función para obtener datos y actualizar la gráfica
  const fetchData = async () => {
    // Aquí reemplaza esto con la lógica para obtener datos en tiempo real.
    const newData = {
      date: new Date().toLocaleTimeString(),
      field1: Math.random() * 100, // Reemplázalo con la lógica para obtener datos reales
      field2: Math.random() * 100, // Reemplázalo con la lógica para obtener datos reales
    };

    setData(prevData => {
      return {
        labels: [...prevData.labels, newData.date],
        datasets: [
          { data: [...prevData.datasets[0].data, newData.field1] }, // field1 para gas
          { data: [...prevData.datasets[1].data, newData.field2] }, // field2 para temperatura
        ],
      };
    });
  };

  useEffect(() => {
    const interval = setInterval(fetchData, 1000); // Intervalo para actualizar los datos cada segundo
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos en tiempo real</Text>
      <LineChart
        data={data}
        width={400} // Ajusta el ancho según sea necesario
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        bezier
      />
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
});

 */ 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginTop: 8,
    height: 1,
    width: '80%',
  },
  dataContainer: {
    flexDirection: 'row', // Alinea los datos horizontalmente
    justifyContent: 'space-around',
    width: '80%', // Ajusta el ancho del contenedor
    marginTop: 20,
  },
  dataItem: {
    alignItems: 'center', // Centra el contenido de cada ítem
  },
  dataValue: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dataIcon: {
    marginBottom: 5,
  },
  dataLabel: {
    fontSize: 16,
    color: 'gray',
  },
});
