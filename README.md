### Squad5 - Trello

- Automatización de Pruebas web de Trello creando Framework con Cypress

### Requisitos

- Editor: Visual Studio Code
- Framework: Cypress
- Navegador: Google Chrome

### Configuracion
1. Clonar repositorio de Github
```bash
git clone git@github.com:josevarod/trelloui.git
```
Ingresar en la carpeta `cd trelloui`

3. Verificar que Node.js este instalado en su equipo
```bash
node -v
```
Si no esta intalado, debe descargar el archivo e instalarlo en su equipo

5. Configuración node
```bash
npm init
```
>  Nota. Se visualizara en consola una serie de preguntas sobre su configuración, hacer clic en el boton Enter

4. Instalar cypress
```bash
npm install cypress
```

6. Instalar librerias
 - librería [dotenv](https://www.npmjs.com/package/dotenv "dotenv") para variables de entorno
```bash
npm install dotenv --save
```
 - librería [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter#cypress-mochawesome-reporter "cypress-mochawesome-reporter") para reportes
```bash
npm i --save-dev cypress-mochawesome-reporter
```
6. Crear archivo .env en la raiz del proyecto con las variables de entorno
```javascript
   CYPRESS_BASE_URL= https://trello.com
   CYPRESS_USERNAME= tu_correo@gmail.com
   CYPRESS_PASSWORD= contraseña_aqui
```
> Nota. Debe contar con una cuenta en Trello con registro de correo y contraseña, que no sea de terceros como: Google, Microsoft, Apple, Slack

7. Ejecucion de test por medio del navegador de cypress
`npx cypress open`
 - Seleccionar E2E, navegador Google Chrome
 - Seleccionar archivo que se desea probar
