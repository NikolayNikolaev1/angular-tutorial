import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() navigateRoute = new EventEmitter<string>();

  navigateTo(path: string) {
    this.navigateRoute.emit(path);
  }
}
