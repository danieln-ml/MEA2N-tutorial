import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {

  contacts: Contact[]

  constructor (private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts().then((contacts: Contact[]) => {
      this.contacts = contacts
    });
  }
}
