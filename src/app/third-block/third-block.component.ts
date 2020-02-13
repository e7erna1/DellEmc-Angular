import {Component, Input, OnInit} from '@angular/core';
import {Info} from '../info.service';

@Component({
  selector: 'app-third-block',
  templateUrl: './third-block.component.html',
  styleUrls: ['./third-block.component.css']
})
export class ThirdBlockComponent implements OnInit {
  @Input() info: Array<Info>;

  constructor() {
  }

  ngOnInit() {
  }

}
