import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withNoXsrfProtection, withXsrfConfiguration } from '@angular/common/http';
import { UserService } from './service/user.service';
import { LoginService } from './service/login.service';

export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes),
    UserService,
    LoginService,
    provideClientHydration(),
    provideHttpClient(
      withFetch()
      // withNoXsrfProtection() // desativa a proteção XSRF
      /*
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN'
      })*/
    )

  ],

};
