import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  // @ts-ignore
  @Input() position: string;
  // @ts-ignore
  @Input() content: string;

  // @ts-ignore
  @Input() title: string;

  by: string = 'By @noodlescripter'

}
