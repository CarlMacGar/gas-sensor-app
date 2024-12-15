import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useThemeColor } from './Themed';

type HistoryItemProps = {
  data: {
    date: string;
    temperature: number;
    gas: number;
    reason: string;
  };
};

export default function HistoryItem({ data }: HistoryItemProps) {
  const { date, temperature, gas, reason } = data;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    return { formattedDate, time };
  };

  const { formattedDate, time } = formatDate(data.date);
  // Usar colores de tema
  const backgroundColor = useThemeColor({}, 'container');
  const textColor = useThemeColor({}, 'text');
  const reasonColor = reason === 'Normal' ? 'green' : 'red';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.reasonText, { color: reasonColor }]}>{`Razón: ${reason}`}</Text>
      <Text style={[styles.dateText, { color: textColor }]}>{`Fecha: ${formattedDate}`}</Text>
      <Text style={[styles.dateText, { color: textColor }]}>{`Hora: ${time}`}</Text>
      <Text style={[styles.fieldText, { color: textColor }]}>{`Temperatura (°C): ${temperature}`}</Text>
      <Text style={[styles.fieldText, { color: textColor }]}>{`Porcentaje de contaminación en el aire: ${gas}%`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'medium',
    marginBottom: 5,
  },
  fieldText: {
    fontSize: 14,
    marginBottom: 5,
  },
  reasonText: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});
