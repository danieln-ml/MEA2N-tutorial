import { Component, OnInit } from '@angular/core';

import {Http, Response} from '@angular/http';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {

  title: 'Contacts List'
  contacts: Contact[]
  selectedContact: Contact
  loaded: boolean

  constructor (private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts().then((contacts: Contact[]) => {
      this.contacts = contacts
    });
  }

}
