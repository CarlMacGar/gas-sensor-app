// // services/backgroundTask.ts
// import * as TaskManager from 'expo-task-manager';
// import * as Notifications from 'expo-notifications';
// import { fetchApiStatus } from './api';  // Asegúrate de tener un servicio para interactuar con tu API

// const BACKGROUND_TASK_NAME = 'checkApiStatus';

// TaskManager.defineTask(BACKGROUND_TASK_NAME, async () => {
//   try {
//     const apiStatus = await fetchApiStatus();  // Llama a la API para verificar el estado
//     if (apiStatus === 'condiciónEspecifica') {
//       await Notifications.scheduleNotificationAsync({
//         content: {
//           title: "Alerta",
//           body: "La condición específica se ha cumplido.",
//         },
//         trigger: null, // Esto activa la notificación de inmediato
//       });
//     }
//   } catch (error) {
//     console.error('Error al verificar el estado de la API:', error);
//   }
// });

// export const registerBackgroundTask = () => {
//   // Registra la tarea en segundo plano
//   TaskManager.registerTaskAsync(BACKGROUND_TASK_NAME, {
//     minimumInterval: 60000, // Intervalo mínimo de 1 minuto
//     stopOnTerminate: false,  // Mantener la tarea incluso si la app se cierra
//     startOnBoot: true,       // Iniciar la tarea cuando el dispositivo reinicie
//   });
// };
