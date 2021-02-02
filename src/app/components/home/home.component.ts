import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logOut(){
    this.auth.signOut()
    .then(() => this.router.navigate(['']))
    .catch(error => console.log(`Failed to log user out. Error => `, error));
    // clear all session information
    sessionStorage.clear();
  }
}
