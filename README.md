# Gas-Sensor-App
## Overview
Gas-Sensor-App es una aplicación móvil desarrollada en React Native con el propósito de monitorear en tiempo real niveles de gas y temperatura en un entorno determinado. Está diseñada para brindar seguridad al usuario mediante la visualización clara de datos y alertas sobre condiciones potencialmente peligrosas. La aplicación integra funcionalidades dinámicas y gráficas interactivas. Proyecto con fines académicos

## Estructura del proyecto
```
gas-sensor-app
├─ 📁.expo
├─ 📁app
│  ├─ 📁(tabs)
│  │  ├─ 📄config.tsx
│  │  ├─ 📄history.tsx
│  │  ├─ 📄index.tsx
│  │  └─ 📄_layout.tsx
│  ├─ 📄+html.tsx
│  ├─ 📄+not-found.tsx
│  ├─ 📄modal.tsx
│  └─ 📄_layout.tsx
├─ 📁assets
│  ├─ 📁fonts
│  │  └─ 📄SpaceMono-Regular.ttf
│  └─ 📁images
│     ├─ 📄adaptive-icon.png
│     ├─ 📄favicon.png
│     ├─ 📄icon.png
│     └─ 📄splash-icon.png
├─ 📁components
│  ├─ 📁__tests__
│  │  └─ 📄StyledText-test.js
│  ├─ 📄ChartsSection.tsx
│  ├─ 📄CustomButton.tsx
│  ├─ 📄EditScreenInfo.tsx
│  ├─ 📄ExternalLink.tsx
│  ├─ 📄GasChart.tsx
│  ├─ 📄HistoryItem.tsx
│  ├─ 📄InputField.tsx
│  ├─ 📄StyledText.tsx
│  ├─ 📄TemperatureChart.tsx
│  ├─ 📄Themed.tsx
│  ├─ 📄useClientOnlyValue.ts
│  ├─ 📄useClientOnlyValue.web.ts
│  ├─ 📄useColorScheme.ts
│  └─ 📄useColorScheme.web.ts
├─ 📁constants
│  └─ 📄Colors.ts
├─ 📁node_modules
├─ 📁services
│  ├─ 📄history.ts
│  ├─ 📄mean.ts
│  ├─ 📄notificaction.ts
│  ├─ 📄thingspeak.ts
│  └─ 📄thresholds.ts
├─ 📄.env
├─ 📄.gitignore
├─ 📄app.json
├─ 📄babel.config.js
├─ 📄env.d.ts
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄README.md
└─ 📄tsconfig.json
```

## Instalación
Para empezar el proyecto, es necesario instalar las dependencias que necesita, esto usando:
~~~ bash
npm install
~~~
\* Alternatively, you can use:
~~~ bash
npm i
~~~

## Ejecutar el proyecto
Para ejecutar el proyecto de forma local en modo desarrollo, usar el siguiente comando:
~~~ bash
npm run dev
~~~
