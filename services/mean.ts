import { getThingspeak } from "./thingspeak";

export const getThingspeakData = async () => {
    try {
        const response = await getThingspeak();

        // Validar si feeds es un array
        if (!response || !Array.isArray(response.feeds)) {
            throw new Error("La respuesta no contiene datos válidos.");
        }

        const data = response.feeds
            .map((feed: any) => ({
                gasLevel: feed.field2 ? parseFloat(feed.field2) : 0,
                temperature: feed.field1 ? parseFloat(feed.field1) : 0,
                date: feed.created_at ? new Date(feed.created_at) : null,
            }))
            .filter((item: any) => item.date && !isNaN(item.date.getTime())); // Filtrar datos inválidos

        // Agrupar los datos en intervalos de 20 minutos
        const intervalInMs = 30 * 60 * 1000; // 20 minutos en milisegundos

        const groupedData = data.reduce((acc: any[], current: any) => {
            const intervalStart = Math.floor(current.date.getTime() / intervalInMs) * intervalInMs;

            let group = acc.find((g) => g.intervalStart === intervalStart);

            if (!group) {
                group = { intervalStart, temperatures: [], gasLevels: [] };
                acc.push(group);
            }

            // Agregar valores al grupo si son válidos
            if (!isNaN(current.temperature)) group.temperatures.push(current.temperature);
            if (!isNaN(current.gasLevel)) group.gasLevels.push(current.gasLevel);

            return acc;
        }, []);

        // Calcular el promedio de cada grupo y extraer las listas
        const intervalStartList: string[] = [];
        const averageGasLevelList: number[] = [];
        const averageTemperatureList: number[] = [];

        groupedData.forEach((group: any) => {
            const averageTemperature = group.temperatures.length
                ? group.temperatures.reduce((sum: number, temp: number) => sum + temp, 0) / group.temperatures.length
                : 0;

            const averageGasLevel = group.gasLevels.length
                ? group.gasLevels.reduce((sum: number, gas: number) => sum + gas, 0) / group.gasLevels.length
                : 0;

            intervalStartList.push(new Date(group.intervalStart).toLocaleTimeString().split(" ")[0]);
            averageTemperatureList.push(averageTemperature);
            averageGasLevelList.push(averageGasLevel);
        });

        // Retornar las tres listas
        return {
            intervalStartList,
            averageGasLevelList,
            averageTemperatureList,
        };

    } catch (err) {
        console.error("Error obteniendo datos de Thingspeak:", err);
        return {
            intervalStartList: [],
            averageGasLevelList: [],
            averageTemperatureList: [],
        };
    }
};
