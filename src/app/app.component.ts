import {Component, OnInit} from '@angular/core';
import {Info, InfoService} from './info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private infoService: InfoService) {}

  public info: Array<Info>;

  ngOnInit(): void {
    this.showInfo();
  }

  showInfo() {
    this.infoService.getInfo().subscribe(info => {
      this.info = info;
    });
  }

  updateInfo() {
    this.infoService.updateInfo();
  }
}
