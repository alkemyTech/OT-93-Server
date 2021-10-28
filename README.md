# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Alert Component ###

Se utilizo la libreria sweetAlert2 para crear un componente que muestre las alertas de una manera dinamica y esteticamente agradable.

El componente recibe 2 props.

SHOW : Determina si la alerta se muestra, en caso de ser true se muestra, si es falso no.

ICON : Determina el tipo de icono de la misma, pueden ser /success/error/info/warning/question/

Se implemento un archivo Css al mismo que controla la animacion del texto intermitente.


### Spinner Component ###

Se utilizo la libreria react-loader-spinner para crear un componente Spinner reutilizable.

El mismo requiere de las siguientes props.

visible: true    --- Determina si es visible o no.
type: "Oval"     --- El tipo de spinner a utilizar, pueden ser Hearts-Oval-Puff-Rings-TailSpin-ThreeDots-Bars-Circles.
color: "#db5752" --- Color del spinner.
height: 100      ---  Height del mismo.
width: 100       --- Width del mismo.
timeout: 3000    --- El tiempo que se mostrara en pantalla en milisegundos