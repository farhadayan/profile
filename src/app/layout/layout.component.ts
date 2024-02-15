import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { LAYOUT_CONFIG, LayoutConfig } from './layout.config';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  private layoutConfig = new BehaviorSubject<LayoutConfig[]>(LAYOUT_CONFIG);
  layoutConfig$ = this.layoutConfig.asObservable();
}
