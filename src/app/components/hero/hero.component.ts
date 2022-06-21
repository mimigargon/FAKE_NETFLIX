import { Component, OnInit } from '@angular/core';
import { HeroInterface } from 'src/app/models/films.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
public heroInfo: HeroInterface;
  constructor() {
    this.heroInfo = {
      title: "LOS 5 MÁS POPULARES HOY",
      gallery: [{
        src: "../../../assets/images/Top10/6-aquinohay.webp",
        alt: "Poster Aqui No Hay Quien Viva"
      },
    {
      src: "../../../assets/images/Top10/7-blacklist.webp",
        alt: "Poster Blacklist"
    },
    {
      src: "../../../assets/images/Top10/2-reina.webp",
        alt: "Poster Reina del Flow"
    },
    {
      src: "../../../assets/images/Top10/1-papel.webp",
        alt: "Poster La Casa de Papel"
    },
    {
      src: "../../../assets/images/Top10/4-lostinspace.webp",
        alt: "Poster Lost in Space"
    }]
    }
   }

  ngOnInit(): void {
  }

}
