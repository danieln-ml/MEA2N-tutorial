import { Component, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  @Input()
  contact: Contact;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private contactService: ContactService) {}

  updateContact(toUpdate: Contact): void {
    this.contactService.updateContact(toUpdate).then((updated: Contact) => {
      this.updateHandler(updated);
      this.contact = updated;
    });
  }


  deleteContact(toDelete: Contact): void {
    this.contactService.deleteContact(toDelete).then((deletedId: number) => {
      this.deleteHandler(toDelete);
      this.contact = null;
    });
  }

  createContact(newContact: Contact) {
    this.contactService.createContact(newContact).then((created: Contact) => {
      this.createHandler(created);
      this.contact = created;
    });
  }
}
