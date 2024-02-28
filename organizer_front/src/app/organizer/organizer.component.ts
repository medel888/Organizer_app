import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-organizer',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './organizer.component.html',
  styleUrl: './organizer.component.css'
})
export default class OrganizerComponent {
  showButtons = signal <boolean> (true)

  constructor(private router: Router){
    if(this.router.url == '/organizer/add'){
      this.showButtons.set(false);
    }
  }

  changeButtonsTrue(){
    this.showButtons.set(true);
  }

  changeButtonsFalse(){
    this.showButtons.set(false);
  }
}
