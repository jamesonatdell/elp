import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dell Boston Summit Development App';
  dbRef : AngularFireList <any>
  contributors:Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.dbRef = db.list('contributors');
    this.contributors = db.list('contributors').valueChanges();
  }
  save(contributorName: string, contributorPosition: string){
    this.dbRef.push({name: contributorName, position: contributorPosition});
  }
}