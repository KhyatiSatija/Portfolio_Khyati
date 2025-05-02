import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() modeToggle = new EventEmitter<void>();
  isTerminalMode = false;
  
  toggleMode() {
    this.isTerminalMode = !this.isTerminalMode;
    this.modeToggle.emit();
  }
}