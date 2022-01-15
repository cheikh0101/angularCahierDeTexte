import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Ue } from './ue';

@Component({
  selector: 'app-ue',
  templateUrl: './ue.component.html',
  styleUrls: ['./ue.component.css']
})
export class UeComponent implements OnInit {

  ues: any;
  ue = new Ue();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUe()
  }

  getUe(){
    this.dataService.getUe().subscribe(res => {
      this.ues = res;
    });
  }

}
