import { Injectable } from '@angular/core';
import { CONTACTS, CONTACT} from './mock-contacts';
import { Contact } from './contact';
import { Observable }     from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {
  // URL to web API
  private contactsUrl = '/api/contacts';

  constructor (private http: Http) {}

  // get("/contacts")
  getContacts(): Promise<Contact[]> {
    return this.http.get(this.contactsUrl)
               .toPromise()
               .then(response => response.json() as Contact[])
               .catch(this.handleError);
  }

  updateContact(contact: Contact): Promise<Contact> {
    return Promise.resolve(contact);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
