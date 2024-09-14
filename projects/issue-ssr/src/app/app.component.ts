import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    @let vm = state();
    @if (vm.length) {
      <p>Number of items: {{ vm.length }}
    } @else {
      <p>No items found.</p>
    }
  `
})
export class AppComponent {
  state = signal<string[]>(['test']);
}
