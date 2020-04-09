import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private configSubject$ = new BehaviorSubject({});

  // expose config behavior subject as observable
  private appConfig;

  constructor(
    private http: HttpClient
  ) { }

  // this is called from the appInitializerFn
  // because we want this config data before our app
  // initializes. We must return a promise here so that
  // the initialization of our app is not completed until
  // we have loaded the config
  loadAppConfig(): Promise<any> {
    return this.http.get('./app-config.json')
      .toPromise()
      .then(config => {
        this.appConfig = config;
      });
  }

  getConfig() {
    return this.appConfig;
  }
}
