import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PersonService {

  constructor(private http: Http) { }

  baseUrl = "https://cruddemoapi20180304093922.azurewebsites.net/api/persons";
  getPeople() {
    return this.http.get(this.baseUrl);
  }

  deletePerson(id) {
    return this.http.delete(this.baseUrl + "/" + id)
  }

  postPerson(p) {
    return this.http.post(this.baseUrl, p);
  }

  getRoles() {
    return this.http.get("https://cruddemoapi20180304093922.azurewebsites.net/api/roles");
  }
}
