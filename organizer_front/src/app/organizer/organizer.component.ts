import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-organizer',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './organizer.component.html',
  styleUrl: './organizer.component.css'
})
export default class OrganizerComponent {

}
