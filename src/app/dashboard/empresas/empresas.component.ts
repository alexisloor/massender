import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../popup/popup.component';
import { Employee } from '../../classes/employee';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { MatIconModule } from '@angular/material/icon';
 

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, PopupComponent, FormsModule, MatIconModule],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.css'
})
export class EmpresasComponent {

  employees: Employee[] = [];
  idEmployee = 0;

  constructor(public dialog:MatDialog){}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '450px', // puedes pasar datos al diálogo aquí si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo fue cerrado');
      if(result){
        let employee: Employee = new Employee(result, this.idEmployee++);
        this.employees.push(employee);
        console.log(employee.id, employee.name);
      }
    });
  }

  onAddEmployee(employeeName: Employee) {
    this.employees.push(employeeName);
    
  }

  deleteEmployee(employeeID: number){
    this.employees = this.employees.filter(employee => employee.id !== employeeID);
  }

}
