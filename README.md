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

## Quête 01 : Les Composants
### Comment crée un composant Angular?

```console
@wilder: Document/myFirstApp~$ ng generate component componentName
```
un composant `component`  est constiuer de trois fichiers :

`component.html ` Pour la vue 

`component.ts`  permet de d'éxécuter des scripte ou même crée des variables,
et des methodes que l'on peut utiliser sur la vue  

`component.css` pour le style 

## Quête 02 : Le Binding 
### Le binding de proporiété
### Faire passer une variable d'un composant un autre
Exemple :
	Je souhaite injécter le nom de Bart dans l'attribut  `alt` de son portrait.
	ici nous allons travailler dans le composant ` bart-profil.component` 

Dans mon ` bart-profil.component.ts` 
```ts
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bart-profil',
  templateUrl: './bart-profil.component.html',
  styleUrls: ['./bart-profil.component.css']
})
export class BartProfilComponent implements OnInit {

  public bartName: string = "Bart";

  imageSrc = "https://via.placeholder.com/350x150";

  constructor() { }

  ngOnInit() {
  }

}
```
Dans mon fichier `parent.component.html` 
```html 
<p>
  <img [src]="imageSrc" [alt]="bartName" />
  Name : {{bartName}} 
</p>
```
Ce qui va donner le resultat suivant : 
```html 
<p>
  <img [src]="imageSrc" [alt]="Bart" />
  Name : Bart
</p>
```

### Le binding d'événements
### Passer de l'information du HTML vers le TS.
Dans mon fichier `parent.component.ts` 
```ts
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bart-profil',
  templateUrl: './bart-profil.component.html',
  styleUrls: ['./bart-profil.component.css']
})
export class BartProfilComponent implements OnInit {

  public bartName:string = "Bart";

  imageSrc = "https://via.placeholder.com/350x150";

  constructor() { }

  ngOnInit() {

  	sayHello() {
    	console.log("Hello " + this.bartName + " !");
  	}
  }

} 
```
Dans mon fichier `parent.component.html` 
```html 
<p>
  <img [src]="imageSrc" [alt]="bartName" />
  Name : {{bartName}} 
</p>

<button (click)="sayHello()">
```
### Le binding two-way
### Récupérer de l'information dansle fichier HTML à partir du fichier TS.
Dans mon fichier `app.module.ts`
Pour ce faire nous allons commencer par importer le module suivant `FormsModule` .
```ts
import { BrowserModule } from '@angular/platform-browser';
// Importation du NgModule
import { NgModule } from '@angular/core';

// Importation du FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BartProfilComponent } from '.bart-profil/bart-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    BartProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Ajoute le ici aussi 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Dans mon fichier `parent.component.html` 
```html 
<p>
  <img [src]="imageSrc" [alt]="bartName" />
  Name : {{bartName}} 
</p>

<button (click)="sayHello()">

<input [(ngModel)]="bartName">
```
Désormais, à la saisie dans le champ input, le nom de Bart sera changé dynamiquement.

======================= D'autre type de composant =======================
 

```console
@wilder: Document/myFirstApp~$ ng generate directive directiveName
```

```console
@wilder: Document/myFirstApp~$ ng generate pipe pipeName
```

```console
@wilder: Document/myFirstApp~$ ng generate service serviceName
```

```console
@wilder: Document/myFirstApp~$ ng generate class className
```
ou  `guard|interface|enum|module.`