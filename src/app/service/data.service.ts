import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getUser() {
    return this.httpClient.get('https://apicahierdetexte.herokuapp.com/api/user');
  }

  getEc() {
    return this.httpClient.get(' http://10.157.16.180:8000/api/ec');
  }

  getUe() {
    return this.httpClient.get(' http://10.157.16.180:8000/api/ue');
  }

  getSemestre() {
    return this.httpClient.get(' http://10.157.16.180:8000/api/semestre');
  }

  getSeance() {
    return this.httpClient.get(' http://10.157.16.180:8000/api/seance');
  }

  //--------------------------------------
  getSemestres() {
    return this.httpClient.get(' http://10.157.16.180:8000/api/semestres ');
  }

  getUes() {
    return this.httpClient.get(' http://10.157.16.180:8000/api/ues');
  }

  getEcs() {
    return this.httpClient.get(' http://10.157.16.180:8000/api/ecs');
  }

  getSeances() {
    return this.httpClient.get(' http://10.157.16.180:8000/api/seances');
  }






  getData() {
    return this.httpClient.get('http://localhost:8000/api/user');
  }

  inserData(data: any) {
    return this.httpClient.post('http://localhost:8000/api/addEmployee', data);
  }

  updateData(id: any, data: any) {
    return this.httpClient.put('http://localhost:8000/api/updateEmployee/' + id, data);
  }

  deleteData(id: any) {
    return this.httpClient.delete('http://localhost:8000/api/deleteEmployee/' + id);
  }

  getEmployeeById(id: any) {
    return this.httpClient.get('http://localhost:8000/api/employee/' + id);
  }
}
