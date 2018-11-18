import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-aboutcattle',
  templateUrl: './aboutcattle.component.html',
  styleUrls: ['./aboutcattle.component.css']
})
export class AboutcattleComponent implements OnInit {

  datalist: AngularFireList<any>;
  data: any[];
  constructor(public db: AngularFireDatabase) {
    this.data = [];
    this.datalist = db.list('/cattle');
    this.datalist.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        const y  = action.payload.toJSON();
        y['key'] = action.key;
        this.data.push(y as Listitemcattle);
      });
    });
  }

  ngOnInit() {

  }
}

export class Listitemcattle {
  id: string;
  left: string;
  right: string;
  datekil: string;
  datedry: string;
  dateready: string;
  wleft: string;
  wright: string;
  roomdry: string;
  owncattle: string;
  status: string;
}
