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
    return this.httpClient.get(' http://apicahierdetexte.herokuapp.com/api/ec');
  }

  getUe() {
    return this.httpClient.get(' http://apicahierdetexte.herokuapp.com/api/ue');
  }

  getSemestre() {
    return this.httpClient.get(' http://apicahierdetexte.herokuapp.com/api/semestre');
  }

  getSeance() {
    return this.httpClient.get(' http://apicahierdetexte.herokuapp.com/api/seance');
  }

  getSemestres() {
    return this.httpClient.get(' http://apicahierdetexte.herokuapp.com/api/semestres ');
  }

  getUes() {
    return this.httpClient.get(' http://apicahierdetexte.herokuapp.com/api/ues');
  }

  getEcs() {
    return this.httpClient.get(' http://apicahierdetexte.herokuapp.com/api/ecs');
  }

  getSeances() {
    return this.httpClient.get(' http://apicahierdetexte.herokuapp.com/api/seances');
  }
}
