import { View, StyleSheet, Text } from "react-native";
import TemperatureChart from "./TemperatureChart";
import GasChart from "./GasChart";
import { useEffect, useState } from "react";
import { getThingspeakData } from "@/services/mean";

interface ChartData {
  intervalStartList: string[];
  averageGasLevelList: number[];
  averageTemperatureList: number[];
}

export default function ChartsSection() {
  const [chartData, setChartData] = useState<ChartData>({
    intervalStartList: [],
    averageGasLevelList: [],
    averageTemperatureList: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getThingspeakData()
      .then((data) => {
        console.log(data);
        setChartData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading ? ( <Text>Cargando...</Text> ) : (
        <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={[styles.title, { color: "white" }]}>
          Gráfica de Temperatura
        </Text>
        <TemperatureChart
          data={{
            datasets: [{ data: chartData.averageTemperatureList, strokeWidth: 2 }],
            labels: chartData.intervalStartList,
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={[styles.title, { color: "white" }]}>
          Gráfica de la contaminación del aire
        </Text>
        <GasChart
          data={{
            datasets: [{ data: chartData.averageGasLevelList, strokeWidth: 2 }],
            labels: chartData.intervalStartList,
          }}
        />
      </View>
    </View>
    )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "semibold",
    marginBottom: 5,
    color: "#808080",
  },
});
