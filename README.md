# KATALON TEST SUITE (JAVASCRIPT + CYPRESS + CUCUMBER + POM)

Este proyecto contiene la automatizacion a la prueba tecnica propuesta

## ESTRUCTURA DE DIRECCTORIOS 🗂️

```bash
.
├── cucumber-html-report.js
├── cypress
│   ├── e2e
│   │   └── features
│   │       ├── Appointment.feature
│   │       └── Login.feature
│   ├── fixtures
│   │   └── example.json
│   ├── page_objects
│   │   ├── Appointment
│   │   │   ├── AppointmentConfirmationPage.js
│   │   │   └── MakeAppointmentPage.js
│   │   ├── Home
│   │   │   └── HomePage.js
│   │   ├── Login
│   │   │   └── LoginPage.js
│   │   └── PageObject.js
│   ├── step_definitions
│   │   ├── Appointment.js
│   │   └── Login.js
│   └── support
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## EJECUCION DEL PROYECTO ⌨️

⚠️ La compilacion y posterior ejecucion del proyecto se debe hacer desde la raiz del proyecto ⚠️

⚠️ El resultado de la automatizacion se almacena en ⚠️

```bash
cypress/results/html/
```

⚠️ El reporte de la automatizacion se almacena en ⚠️

```bash
cypress/reports/cucumber/
```

- Ejecucion

- Cypress UI

```bash
npm run cypress:open
```

- Cypress Headless

```bash
npm run cypress:run
```

- Generar Reporte

```bash
npm run cucumber:report
```
