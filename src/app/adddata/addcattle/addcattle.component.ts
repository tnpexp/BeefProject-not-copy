import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-addcattle',
  templateUrl: './addcattle.component.html',
  styleUrls: ['./addcattle.component.css']
})
export class AddcattleComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {}
  addcattle(data: NgForm) {
    this.db.list('/cattle').push(data.value);
    console.log(data.value);
  }

}
