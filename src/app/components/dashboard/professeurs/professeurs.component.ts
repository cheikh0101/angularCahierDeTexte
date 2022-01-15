import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { User } from './user';

@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.css']
})
export class ProfesseursComponent implements OnInit {

  users: any;
  user = new User();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.dataService.getUser().subscribe(res => {
      this.users = res;
    });
  }

}
