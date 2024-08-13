import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { LAYOUT_CONFIG, LayoutConfig } from './layout.config';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    MatMenuModule,
    //MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  private layoutConfig = new BehaviorSubject<LayoutConfig[]>(LAYOUT_CONFIG);
  layoutConfig$ = this.layoutConfig.asObservable();

  share() {}
}
