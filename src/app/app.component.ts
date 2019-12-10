import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc-oauth';

  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  configure() {
    console.log(window.location.href);
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // this.oauthService.setStorage('')
    // this.oauthService.tryLogin();
    console.log(window.location.href);
    // this.oauthService.loadDiscoveryDocumentAndLogin();
    this.oauthService.events
        .pipe(filter((e: any) => e.type === 'token_received'))
        .subscribe(() => console.log('HERE'));
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public login() {
    // this.oauthService.initLoginFlow();
    this.oauthService.initImplicitFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  public getName() {
    let claims = this.oauthService.getIdToken();
    console.log('ID');
    console.log(claims);
  }
}
