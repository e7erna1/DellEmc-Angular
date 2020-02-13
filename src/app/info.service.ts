import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Info {
  configStatus: string;
  date: number;
  configName: string;
  installMethod: string;
  nodes: {
    host: string;
    status: string;
    message: string;
  }[];
  installId: string;
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private url = 'assets/data/install_history.json';

  constructor(private httpClient: HttpClient) {
  }

  getInfo() {
    return this.httpClient.get<Array<Info>>(this.url);
  }

  updateInfo() {
    return;
  }
}
