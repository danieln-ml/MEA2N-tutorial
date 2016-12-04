import { Component, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contact-detail',
  template: `
    <div *ngIf="contact">
      <h2 *ngIf="contact._id">Contact Details</h2>
      <h2 *ngIf="!contact._id">Create Contact</h2>
      <form>
        <div class="form-group">
          <label for="contact-name">Name:</label>
          <input class="form-control" name="contact-name" [(ngModel)]="contact.name" placeholder="Name"/>
        </div>
        <div class="form-group">
          <label for="contact-email">Email:</label>
          <input class="form-control" name="contact-email" [(ngModel)]="contact.email" placeholder="example@abc.com"/>
        </div>
        <div class="form-group">
          <label for="contact-phone-mobile">Mobile:</label>
          <input class="form-control" name="contact-phone-mobile" [(ngModel)]="contact.phone.mobile" placeholder="6431111"/>
        </div>
        <div class="form-group">
          <label for="contact-phone-work">Work:</label>
          <input class="form-control" name="contact-phone-work" [(ngModel)]="contact.phone.work" placeholder="9670309"/>
        </div>
      </form>
    </div>
  `
})
export class ContactDetailsComponent {
  @Input()
  contact: Contact;

  constructor (private contactService: ContactService) {}
}
