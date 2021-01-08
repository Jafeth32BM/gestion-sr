import { AuthService } from './auth.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { UserData } from '../models/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersData$ = new BehaviorSubject<UserData[]>([]);
  private subscribed = false;
  private subscription: Subscription;

  constructor(private firestore: AngularFirestore, private authService: AuthService) {
    this.authService.data$.subscribe((userData: UserData) => {
      if (userData && userData.admin) {
        this.subscribe();
      } else {
        this.unsubscribe();
      }
    });
  }

  private subscribe(): void {
    if (!this.subscribed) {
      this.subscription = this.firestore.collection<UserData>('users').valueChanges()
      .pipe(
        map((usersData) => {
          return usersData.filter((userData) => !userData.admin);
        })
      )
      .subscribe((usersData: UserData[]) => {
        this.usersData$.next(usersData);
      });
      this.subscribed = true;
    }
  }

  private unsubscribe(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.usersData$.next([]);
    this.subscribed = false;
  }
}
