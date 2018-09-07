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
  goalsRef : AngularFireList<any>
  contributors:Observable<any[]>;
  goalsObservable:Observable<any[]>;
  goals : string;
  uid : string;
  constructor(private db: AngularFireDatabase, private authService: AuthService) {
    this.uid = this.authService.currentUserId;
    this.dbRef = this.db.list('contributors');
    this.contributors = this.db.list('contributors').valueChanges();
    this.goalsRef = this.db.list(`goals/${this.uid}`);
    this.goalsObservable = this.db.list(`goals/${this.uid}`).snapshotChanges();
  }
  save(contributorName: string, contributorPosition: string){
    this.dbRef.push({name: contributorName, position: contributorPosition});
  }
  saveGoals(){
    console.log(this.uid);
    this.goalsRef.push(this.goals);
    console.log(this.goalsRef);
    this.goals="";
  }
  delete(goal){
    console.log(goal)
    this.goalsRef.remove(goal);
    console.log("removing goal..."+goal)
  }
  ngOnInit() {
  }

}
