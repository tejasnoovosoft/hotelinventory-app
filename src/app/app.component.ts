import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {RoomsComponent} from "./rooms/rooms.component";

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RoomsComponent],
  templateUrl : './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'hotelinventoryapp';
  role: string = 'Admin'
}
