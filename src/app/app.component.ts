import { FilmsInterface } from './models/films.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public terror: FilmsInterface = {
    title: "Terror",
    gallery: [{
      src: "assets/images/Terror/insidious2.webp",
      alt: "Poster Insidious", 
    },
    {
      src: "assets/images/Terror/malasana.webp",
      alt: "Poster Malasaña", 
    },
    {
      src: "assets/images/Terror/life.webp",
      alt: "Poster Life", 
    },
    {
      src: "assets/images/Terror/infiernoagua.webp",
      alt: "Poster Infierno Agua", 
    },
    {
      src: "assets/images/Terror/reflejos.webp",
      alt: "Poster Reflejos", 
    },
    {
      src: "assets/images/Terror/multiple.webp",
      alt: "Poster Multiple", 
    }]
  }

  public sciFi: FilmsInterface = {
    title: "Ciencia Ficción",
    gallery: [{
      src: "assets/images/Sci-fi/watchmen.webp",
      alt: "Poster Watchmen", 
    },
    {
      src: "assets/images/Sci-fi/startrek.webp",
      alt: "Poster Star Trek", 
    },
    {
      src: "assets/images/Sci-fi/core.webp",
      alt: "Poster Core", 
    },
    {
      src: "assets/images/Sci-fi/passengers.webp",
      alt: "Poster Passengers", 
    },
    {
      src: "assets/images/Sci-fi/deepimpact.webp",
      alt: "Poster Deep Impact", 
    },
    {
      src: "assets/images/Sci-fi/6dia.webp",
      alt: "Poster 6dia", 
    }]
  }
}
