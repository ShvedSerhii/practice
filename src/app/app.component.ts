import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formSubmitted: boolean;
  name: string = ""; // Если записать undefined, то поля изначально не будет в значении формы.
  country: string; // Здесь связывание у нас одностороннее, поэтому начальное значение можем не задавать.
  
  countryModelChange(value: string) {
    this.country = value;
  }
  
  submit(event: Event) {
    event.preventDefault();
    this.formSubmitted = true;
  }
}
