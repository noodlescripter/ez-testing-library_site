import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cypress',
  templateUrl: './cypress.component.html',
  styleUrls: ['./cypress.component.css']
})
export class CypressComponent {

  // @ts-ignore
  @Input() CypressContent: string;

  title: object = {
    sTitle: {
      name: 'Cypress EZ Library'
    }
  }
}
