import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personnes: Personne[] = [];
  private url: string = "http://localhost:5555/personnes/";

  constructor(private http: HttpClient) {
    this.personnes.push({
      id: 13, fName: 'John', lName: 'Wick'
    });
    this.personnes.push({
      id: 12, fName: 'Bob', lName: 'LeBricoleur'
    });
  }

  getPersons() {
    // return this.personnes;
    return this.http.get<Array<Personne>>(this.url);
  }
  addPerson(p: Personne) {
    // this.personnes.push(p);
    return this.http.post(this.url, p);
  }

  delPers(id: any) {
    // this.personnes = this.personnes.filter(el => el.id != id);
    return this.http.delete(`${this.url}/${id}`);
  }

  getPersonById(id: any) {
    // return this.personnes.filter(el => el.id == id)[0];
    return this.http.get(`${this.url}/${id}`);
  }

  updatePerson(p: Personne) {
    // let pers = this.getPersonById(p.id);
    // pers.fName = p.fName;
    // pers.lName = p.lName;
    return this.http.put(`${this.url}/${p.id}`,p);
  }
}
