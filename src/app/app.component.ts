import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';


  showHeroForm: boolean = false;

  toggleHeroForm() {
    this.showHeroForm = !this.showHeroForm;
  }
  
}
