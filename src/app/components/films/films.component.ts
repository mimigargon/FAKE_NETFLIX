import { Component, Input, OnInit } from '@angular/core';
import { FilmsInterface } from 'src/app/models/films.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
@Input() public films!: FilmsInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
