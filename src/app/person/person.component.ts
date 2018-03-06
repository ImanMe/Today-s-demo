import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  people: any[];
  roles: any[];
  constructor(private service: PersonService) {

    service.getPeople().subscribe(
      Response => this.people = Response.json()
    );

    service.getRoles().subscribe(
      Response => this.roles = Response.json()
    );
  }

  delete(p) {
    let index = this.people.indexOf(p);
    this.people.splice(index, 1);
    this.service.deletePerson(p.id).subscribe(
      Response => console.log('Deleted')
    );
  }

  submit(f) {
    this.service.postPerson(f.value).subscribe(
      Response => {
        this.service.getPeople().subscribe(
          Response => this.people = Response.json()
        );
      }
    );
  }

  ngOnInit() {
  }

}
