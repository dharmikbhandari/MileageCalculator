import { Injectable, inject } from '@angular/core';
import { EMPTY, Observable, empty, from, map, of, tap } from 'rxjs';
import { User } from '../models/user.model';

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  firestore: AngularFirestore = inject(AngularFirestore);
  item$!: Observable<any>;

  getUsers(): Observable<User[]> {
    const users = this.firestore
      .collection('/Users')
      .snapshotChanges()
      .pipe(
        map((x) => {
          return x.map((y) => {
            var user: User = {
              id: y.payload.doc.id,
              name: y.payload.doc.get('name'),
              pin: y.payload.doc.get('pin'),
              createdBy: y.payload.doc.get('createdBy'),
              createdDate: y.payload.doc.get('createdDate'),
              modifiedBy: y.payload.doc.get('modifiedBy'),
              modifiedDate: y.payload.doc.get('modifiedDate'),
              isActive: y.payload.doc.get('isActive'),
            };
            return user;
          });
        })
      );

    return users;
  }
}
