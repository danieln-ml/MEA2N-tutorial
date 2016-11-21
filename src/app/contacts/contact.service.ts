import { Injectable } from '@angular/core';
import { CONTACTS, CONTACT } from './mock-contacts';
import { Observable }     from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Contact } from './contact';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {

  constructor() { }

  // get("/contacts")
  getContacts(): Promise<Contact[]> {
    return Promise.resolve(CONTACTS);
  }

}
