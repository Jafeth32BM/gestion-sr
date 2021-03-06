import { Router } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { UserData } from '../models/user-data';
import { UsersService } from './../services/users.service';
import { parse } from 'json2csv';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<UserData>;
  dataSource = new MatTableDataSource<UserData>([]);
  dataSourceSubscription: Subscription;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['email', 'matricula', 'nombre', 'apellido1', 'apellido2'];

  constructor(public usersService: UsersService, private router: Router) {
    this.dataSourceSubscription = this.usersService.usersData$.subscribe(
      (users: UserData[]) => {
        this.dataSource.data = users;
      }
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openStudentProfile(uid: string): void {
    this.router.navigate(['lista-alumnos', 'perfil'], { queryParams: { uid } });
  }

  downloadExcel(): void {
    console.log('Descargar Excel');
    try {
      const csv = parse(this.dataSource.data, {
        fields: ["curp", "matricula", "apellido1", "apellido2", "nombre", "carrera", "sexo", "email", "numeroCelular", "fechaDeInicio", "fechaDeTermino", "fechaDeRegistro", "edad", "promedioGeneral", "porcentajeDeCreditos", "nombreDependencia", "directionDependencia", "municipioDependencia", "sector", "horarioDeServicio", "nombreDeProyecto", "estimulo", "montoDeEstimulo" ],
      });
      var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

        var link = document.createElement("a");
           // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "students.csv");
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
      console.log(csv);
    } catch (err) {
      console.error(err);
    }
  }

  exportmap(users: UserData){

  }

  ngOnDestroy(): void {
    if (this.dataSourceSubscription) {
      this.dataSourceSubscription.unsubscribe();
    }
  }
}
