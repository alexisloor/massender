import { Component } from '@angular/core';
import { DashComponent } from './dash/dash.component';
import { RouterOutlet } from '@angular/router';  
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DashComponent,
    RouterOutlet,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'massenderV2';
}
