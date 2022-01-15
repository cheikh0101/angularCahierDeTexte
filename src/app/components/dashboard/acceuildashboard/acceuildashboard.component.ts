import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Acceuil } from './acceuil';

@Component({
  selector: 'app-acceuildashboard',
  templateUrl: './acceuildashboard.component.html',
  styleUrls: ['./acceuildashboard.component.css']
})
export class AcceuildashboardComponent implements OnInit {

  nbreSemestres: any;
  nbreSemestre = new Acceuil();

  nbreUes: any;

  nbreEcs: any;

  nbreSeances: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getSemestres()

    this.getUes()

    this.getEcs()

    this.getSeances()
  }

  getSemestres(){
    this.dataService.getSemestres().subscribe(res => {
      this.nbreSemestres = res;
    })
  }

  getUes(){
    this.dataService.getUes().subscribe(res => {
      this.nbreUes = res;
    })
  }

  getEcs(){
    this.dataService.getEcs().subscribe(res => {
      this.nbreEcs = res;
    })
  }

  getSeances(){
    this.dataService.getSeances().subscribe(res => {
      this.nbreSeances = res;
      console.log(res)
    })
  }

}
