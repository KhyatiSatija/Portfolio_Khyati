// app.component.ts is the source file that describes the app-root component. This is the top-level Angular component in the app.
//  A component is the basic building block of an Angular application. The component description includes the component's code,
//  HTML template, and styles, which can be described in this file, or in separate files.
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
