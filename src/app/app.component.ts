import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  formSubmitted: boolean;
  num: string = "";
  date: Date = new Date();

  isNumber(num) {
    return isNaN(+num);
  }
}
