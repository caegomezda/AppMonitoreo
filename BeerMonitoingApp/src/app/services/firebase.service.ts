import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ApiService } from './api.service';
import { User } from '../components/interfaces/User';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  currentUser: User = null;
  
  constructor(private afAuth: AngularFireAuth, 
              // private apiService :ApiService, 
              private storage : StorageService) {

    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;      
    });
  }

  // Login con el api
  async signIn({ email, password }) {
    console.log('email',email);
    console.log('password',password);
    let result  = await this.afAuth.signInWithEmailAndPassword(email, password);
    console.log('result',result);
    return result
  }

  // sendVerificationEmail(email) {
  //   this.afAuth.authState.subscribe(user => {
  //       user.sendEmailVerification()
  //       .then((res) => {
  //         this.storage.saveResVerificationEmail(res);
  //       })
  //     });
  // }
}
