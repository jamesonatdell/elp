import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Dell Boston Summit Development App';
  dbRef : AngularFireList <any>
  contributors:Observable<any[]>;
  goals : string;
  constructor(db: AngularFireDatabase, authService: AuthService) {
    this.dbRef = db.list('contributors');
    this.contributors = db.list('contributors').valueChanges();
  }
  save(contributorName: string, contributorPosition: string){
    this.dbRef.push({name: contributorName, position: contributorPosition});
  }
  saveGoals(){
    
  }
  ngOnInit() {
  }

}
