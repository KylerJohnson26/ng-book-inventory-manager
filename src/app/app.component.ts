import { Component } from '@angular/core';
import { AppConfigService } from './core/services/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: any;
  constructor(private appConfigService: AppConfigService) {
    this.config = this.appConfigService.getConfig();
    console.log(this.config);
  }
}
