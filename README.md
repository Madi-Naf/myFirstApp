# Quête Angular 
Wild code school

## Quête 00 : Start with Angular 
### Comment crée une aaplicationj Angular ?
Ouvrez un Terminal et executé la commande suivante :

```console
@wilder:$ ng new myFirstApp
```
Puis 
```console
@wilder:$ cd myFirstApp
```
pour ce placer dnas le dossier de l'application.

### Comment lancer le serveur ?
Ouvrez un Terminal et executé la commande suivante :

```console
@wilder:$ ng serve
```
vous pouvez ajouter  `-o` ou `--open` pour ouvrir le navigateur automatiquement dès que le serveur est lancé.
```console
@wilder:$ ng s -o
```
Sinon vous pouvez ouvrir le navogateur et aller à l'adresse suivante `http://localhost:4200/`. 
Normalement la page est rafrachi automatiquement dès que l'on modifie un fichier.

### Code scaffolding
Run 
```console
@wilder:$ ng generate component component-name
```
to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run 
```console
@wilder:$ ng build
``` 
to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests
Run
```console
@wilder:$ ng test
``` 
to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run
```console
@wilder:$ ng e2e
```
to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help
To get more help on the Angular CLI use
Run
```console
@wilder:$ ng help
```
or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
