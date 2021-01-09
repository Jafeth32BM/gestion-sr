import { tramites, Tramites } from './../static-data/documentos';
import { UsersService } from './../services/users.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserData } from '../models/user-data';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent {
  userData$: Observable<UserData>;
  tramites: Tramites = tramites;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {
    this.route.queryParams.pipe(take(1))
      .subscribe((params) => {
        if (params && params.uid) {
          this.userData$ = this.usersService.selectUserData(params.uid);
        }
      });
  }

}
