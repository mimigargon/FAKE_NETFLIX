import { NavInterface } from './../../models/films.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
public navInfo: NavInterface;
public themeText: string = "☀️";
  constructor() {
    this.navInfo = {
      logo: {
        src: "../../../assets/images/LOGO/logo.png",
        alt: "Falseflix logo"
      },
      links: [{
        text: "Home",
        link: "#home"
      },
    {
      text: "Films",
      link: "#films"
    },
  {
    text: "Series",
    link: "#series"
  }]
    }
   }

  ngOnInit(): void {
  }

  public changeTheme = () => {
    document.body.classList.toggle("dark");
    if (this.themeText === "☀️") {
      this.themeText = "🌙"
    } else {
      this.themeText = "☀️"
    }
  }

}
