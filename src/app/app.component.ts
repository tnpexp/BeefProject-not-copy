import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private db: AngularFireDatabase) {}
  addWiki(data: NgForm) {
       this.db.list('/demoproject').push(data.value);
  }
}
