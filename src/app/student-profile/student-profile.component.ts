import { UserData } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  userData: UserData;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.pipe(take(1))
      .subscribe((params) => {
        console.log(params);
        if (params && params.userData) {
          this.userData = JSON.parse(params.userData);
        }
      });
  }

  ngOnInit(): void {
  }

}
