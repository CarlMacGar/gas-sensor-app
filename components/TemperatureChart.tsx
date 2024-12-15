import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

interface GasChartProps {
  data: {
    labels: string[];
    datasets: { data: number[]; strokeWidth: number }[];
  };
}

const chartConfig = {
  backgroundColor: 'black',
  backgroundGradientFrom: 'transparent',
  backgroundGradientTo: 'transparent',
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '8',
    strokeWidth: '3',
    stroke: '#ffa726',
  },
};

const GasChart = ({ data }: GasChartProps) => {
  const [selectedValue, setSelectedValue] = useState<{ x: string; y: number } | null>(null);

  useEffect(() => {
    if (selectedValue) {
      const timer = setTimeout(() => setSelectedValue(null), 5000);
      return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta o se actualiza.
    }
  }, [selectedValue]);

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={screenWidth - 4}
        height={190}
        chartConfig={chartConfig}
        bezier
        onDataPointClick={(dataPoint) => {
          setSelectedValue({ x: data.labels[dataPoint.index], y: dataPoint.value });
        }}
      />
      {selectedValue && (
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>
            Tiempo: {selectedValue.x} - Valor: {selectedValue.y.toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tooltip: {
    position: 'absolute',
    top: -30, // Ajusta para que quede encima del gráfico
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 8,
    borderRadius: 6,
  },
  tooltipText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default GasChart;
