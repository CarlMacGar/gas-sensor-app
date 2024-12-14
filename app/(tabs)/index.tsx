import { StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, View } from '@/components/Themed';
import { useThemeColor } from '@/components/Themed';
import CustomButton from '@/components/CustomButton';
import {useState, useEffect} from 'react';
import { getCurrentThingspeak } from '@/services/thingspeak';
import ChartsSection from '@/components/ChartsSection';

interface Data {
  gasLevel: number;
  temperature: number;
}

export default function TabOneScreen() {
  const [data, setData] = useState<Data>({
    gasLevel: 0,
    temperature: 0,
  });

  const fetchData = async () => {
    try {
      const response = await getCurrentThingspeak(); 

      setData({gasLevel: response.feeds[0].field2, temperature: response.feeds[0].field1});
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Usar colores de tema
    const backgroundColor = useThemeColor({}, 'background');
    const textColor = useThemeColor({}, 'text');

  return (
    <View style={[{flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',}, {backgroundColor}]}>

      <ChartsSection />
      
      <View style={styles.separator} lightColor="rgba(255,255,255,0.1)" darkColor="#eee" />

      <View style={[styles.dataContainer] }>
        <View style={styles.dataItem}>
          <Text style={[styles.dataValue, { color: textColor }]}>{data.gasLevel}%</Text>
          <FontAwesome name="cloud" size={15} color="gray" style={styles.dataIcon} />
          <Text style={[styles.dataLabel, { color: textColor }]}>Gas</Text>
        </View>

        <View style={styles.dataItem}>
          <Text style={[styles.dataValue, { color: textColor }]}>{data.temperature}°C</Text>
          <FontAwesome name="thermometer-half" size={15} color="red" style={styles.dataIcon} />
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
    fontSize: 15,
    fontWeight: 'semibold',
    marginBottom: 10,
    color: '#808080',
  },
  separator: {
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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dataIcon: {
    marginBottom: 5,
  },
  dataLabel: {
    fontSize: 14,
    color: 'gray',
  },
});
