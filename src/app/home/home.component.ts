import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  numbers = [2, 3, 4, 5, 6, 8];
  
  selectedNumber: number | null = null;
  isUpdated = false;

  onDropdownChange() {
    this.isUpdated = true; // Set this flag when the dropdown value changes
  }
}
