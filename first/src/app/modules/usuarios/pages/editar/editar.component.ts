import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  standalone: true,
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Hola")
  }

}
