import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Ec } from './ec';

@Component({
  selector: 'app-ec',
  templateUrl: './ec.component.html',
  styleUrls: ['./ec.component.css']
})
export class EcComponent implements OnInit {

  ecs: any;
  employee = new Ec();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getEc();
  }

  getEc(){
    this.dataService.getEc().subscribe(res => {
      this.ecs = res;
    });
  }

}
