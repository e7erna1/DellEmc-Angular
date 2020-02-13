import {Component, Input, OnInit} from '@angular/core';
import {Info} from '../info.service';

@Component({
  selector: 'app-first-block',
  templateUrl: './first-block.component.html',
  styleUrls: ['./first-block.component.css']
})
export class FirstBlockComponent implements OnInit {
  @Input() info: Array<Info>;

  constructor() {
  }

  ngOnInit() {
  }

}
