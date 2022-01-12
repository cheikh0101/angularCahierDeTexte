import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Employee } from '../employees/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id: any;
  data: any;
  employee = new Employee();

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData() {
    this.dataService.getEmployeeById(this.id).subscribe(res => { this.data = res; this.employee = this.data; })
  }

  updateEmployee() {
    this.dataService.updateData(this.id, this.employee).subscribe(res => {
      this.data = res;
      this.employee = this.data;
      this.router.navigate(['']);
    })
  }
}
