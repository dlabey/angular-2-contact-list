import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'list',
  templateUrl: './list.html'
})

export class ListComponent {
  contacts: Object

  constructor(private http: Http) {
    http.get('data/contacts.json')
      .map(res => res.json())
      .subscribe(data => this.contacts = data,
                 err => console.log(err),
                 () => console.log(this.contacts));
  }
}
