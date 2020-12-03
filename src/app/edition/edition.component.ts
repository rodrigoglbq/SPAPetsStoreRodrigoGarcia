import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {
  status: string;
  name: string;


  constructor() { }

  ngOnInit(): void {
  }

}
