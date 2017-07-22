# MileageStats

Angular 2 implementation of Mileage Stats application that is part of Project Silk of Microsoft. Application is coded from the grounds up without using code or patterns from this project; only images are imported.

## Usage

You need to have node.js and mongoDB installed on your system. Clone the repository and go into `/server` directory. Type `node init-script.js`. This will initialize the database. Now from the root directory start the app by typing `node server` and go to `localhost:3000` from the browser. You can use user name `sample` to log in with sample data.

## Source code

`/src/app` directory contains the client source code, while rudimentory back-end code I wrote you can find in `/server` directory. Node server itself is in `./server.js` file.
Source code documentation generated with YUIdoc is available in `/docs` directory.
Production bundle used by the actual application is in `/public` directory.
Long running Git branch for further development is `dev`.

## Angular-CLI

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.1.3.

### Development server
Checkout the `dev` branch and run `ng serve` for a dev server. In another console start development node backend with `node server-dev`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
