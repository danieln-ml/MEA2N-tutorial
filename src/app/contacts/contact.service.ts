import { Injectable } from '@angular/core';
import { CONTACTS} from './mock-contacts';
import { Contact } from './contact';

@Injectable()
export class ContactService {

  constructor() { }

  // get("/contacts")
  getContacts(): Promise<Contact[]> {
    return Promise.resolve(CONTACTS);
  }
}
