// cypress/support/index.js

import './commands'; // Importa comandos personalizados si es requerido
import 'cypress-mochawesome-reporter/register';  // Para reporte

// reference about this code: https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application
Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevenir que Cypress falle el test
    return false;
});
