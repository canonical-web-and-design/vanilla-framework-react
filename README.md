# Vanilla Framework (in React)

This is a simple implementation of Vanilla Framework using React.

[Storybook](https://vanilla-framework.github.io/vanilla-framework-react/) |
[Vanilla Framework](https://github.com/vanilla-framework/vanilla-framework)

## Quick start

To get up and running with Vanilla Framework React quickly, add the [create-react-app](https://github.com/facebookincubator/create-react-app) CLI tool
to your machine. Then, run the following code:

``` bash
create-react-app my-app
cd my-app/
yarn add vanilla-framework vanilla-framework-react node-sass-chokidar
export SASS_PATH=`pwd`/node_modules:${SASS_PATH}
```

Open `package.json` and add the following scripts:
``` json
"build-css": "node-sass-chokidar src/ -o public/",
"watch-css": "npm run build-css && node-sass-chokidar src/ -o public/ --watch --recursive",
```

Open `public/index.html` and add the line:
``` html
<link rel="stylesheet" href="styles.css" />
```

Create `src/styles.scss` with the following code:
``` scss
// Optionally override some settings
$color-brand: #fb3b00;

// Import the theme
@import 'vanilla-framework/scss/build';

// Include the Sass you want
@include vanilla;
```

Remove the following line from `src/index.js`:
``` js
import './index.css';
```

Now open a terminal and run `yarn watch-css` and open another terminal and run `yarn start`.

In your `src/App.js` file you can now include Vanilla Framework React components by adding the code:
``` js
import React, { Component } from 'react';
import { Button } from 'vanilla-framework-react';

class App extends Component {
  render() {
    return (
      <div>
        <Button brand value="Custom VF React Button!" />
      </div>
    );
  }
}

export default App;
```

## Including Vanilla in your React project

This component library requires [Vanilla Framework](https://vanillaframework.io) to function. You
can either hotlink the latest build directly into your markup, like so (replace x's with the version
you want):
``` html
<link rel="stylesheet" href="https://assets.ubuntu.com/v1/vanilla-framework-version-x.x.x.min.css" />
```
Or you can add Vanilla Framework to your `node_modules` folder and save it into your project's
dependencies using your favourite package manager. You should also ensure that your Sass builder
is including modules from `node_modules`. For example:
``` bash
yarn add vanilla-framework
export SASS_PATH=`pwd`/node_modules:${SASS_PATH}
```

Then reference it from your own Sass files, with optional settings:
``` scss
// Optionally override some settings
$color-brand: #fb3b00;

// Import the theme
@import 'vanilla-framework/scss/build';

// Include the Sass you want
@include vanilla;
```

If you don't want the whole framework, you can just `@include` specific [parts](scss) - e.g. `@include vf-b-forms`.

## Local development

In the project directory, you can run:

### `./run`

This will start up an interactive development & testing environment listing all components.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `./run test`

Launches the test runner in the interactive watch mode.<br>

### `./run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
