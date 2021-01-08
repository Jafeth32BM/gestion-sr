import { Router } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { UserData } from './../models/user';
import { UsersService } from './../services/users.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
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
    this.dataSourceSubscription = this.usersService.usersData$.subscribe((users: UserData[]) => {
      this.dataSource.data = users;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openStudentProfile(userData: UserData): void {
    this.router.navigate(['lista-alumnos', 'perfil'], { queryParams: { userData: JSON.stringify(userData) } });
  }

  ngOnDestroy(): void {
    if (this.dataSourceSubscription) {
      this.dataSourceSubscription.unsubscribe();
    }
  }
}
