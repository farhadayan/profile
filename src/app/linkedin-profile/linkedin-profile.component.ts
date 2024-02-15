import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-linkedin-profile',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './linkedin-profile.component.html',
  styleUrl: './linkedin-profile.component.scss',
})
export default class LinkedinProfileComponent {
  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
