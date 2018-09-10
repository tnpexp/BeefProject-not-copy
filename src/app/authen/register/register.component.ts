import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {}
  addWiki(data: NgForm) {
    this.db.list('/beefproject').push(data.value);
  }

}
