# Quête Angular 
Wild code school

## Quête 00 : Start with Angular 
### Comment crée une application Angular ?
Ouvrez un Terminal et executé la commande suivante :

```console
@wilder: Document~$ ng new myFirstApp
```
Puis 
```console
@wilder: Document~$ cd myFirstApp
```
pour ce placer dnas le dossier de l'application.

### Comment lancer le serveur ?
Une fois dans le dossier executé la commande suivante :

```console
@wilder: Document/myFirstApp~$ ng serve
```
vous pouvez ajouter  `-o` ou `--open` pour ouvrir le navigateur automatiquement dès que le serveur est lancé.
```console
@wilder: Document/myFirstApp~$ ng s -o
```
Sinon vous pouvez ouvrir le navogateur et aller à l'adresse suivante `http://localhost:4200/`. 
Normalement la page est rafrachi automatiquement dès que l'on modifie un fichier.

### Code scaffolding
Run 
```console
@wilder: Document~$ ng generate component component-name
```
to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run 
```console
@wilder: Document~$ ng build
``` 
to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests
Run
```console
@wilder: Document~$ ng test
``` 
to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run
```console
@wilder: Document~$ ng e2e
```
to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help
To get more help on the Angular CLI use
Run
```console
@wilder: Document~$ ng help
```
or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
