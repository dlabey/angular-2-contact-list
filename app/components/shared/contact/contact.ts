import { Component, Input } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

class Contact {
  first_name: string;
  last_name: string;
  email: string;
  street_number: string;
  street: string;
  city: string;
  state_code: string;
  state: string;
  zip_code: string;
}

@Component({
  moduleId: module.id,
  selector: 'contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})

export class ContactComponent {
  @Input() contact: Contact;

  private isCollapsed = true;

  gravatarHref(): Int32Array | string {
    return Md5.hashStr(this.contact.email);
  }
}
