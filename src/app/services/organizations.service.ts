import { Organization } from '../models/organization';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {
  organizations$ = new BehaviorSubject<Organization[]>([]);

  constructor(private firestore: AngularFirestore) {
    this.firestore.collection<Organization>('organization')
      .valueChanges()
      .subscribe((organizations: Organization[]) => {
        this.organizations$.next(organizations);
      });
  }
}
