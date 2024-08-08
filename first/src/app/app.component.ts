import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'first';

  ngOnInit(): void {
    let algo  = undefined;
    console.log(algo);
  }

}
type Algo = {
  name: string | undefined;
}
