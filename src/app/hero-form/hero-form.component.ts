import { Component } from '@angular/core';
import { HeroFormModel } from './hero-form.model';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  // List of available hero powers.
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  // Initialize the hero model for the form.
  model = new HeroFormModel(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  // Flag to indicate if the form has been submitted.
  submitted = false;

  // Called when the form is submitted.
  onSubmit() {
    this.submitted = true;
  }

  // Create a new hero model instance.
  newHero() {
    this.model = new HeroFormModel(42, '', '');
  }
}
