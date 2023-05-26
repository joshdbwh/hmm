import { enableProdMode, importProvidersFrom } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { MenusState, UserState } from "./app/core";
import { NgxsModule } from "@ngxs/store";
import { routes } from "./routes";
import { environment as environment_1 } from "src/environments/environment";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { AuthHttpInterceptor, AuthModule } from "@auth0/auth0-angular";
import {
  HTTP_INTERCEPTORS,
  withInterceptorsFromDi,
  provideHttpClient,
} from "@angular/common/http";
import { provideRouter } from "@angular/router";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AuthModule.forRoot({
        ...environment.auth,
        cacheLocation: "localstorage",
        httpInterceptor: {
          allowedList: [
            `${environment.serverUrl}/api/menu/items`,
            `${environment.serverUrl}/api/menu/items/*`,
          ],
        },
      }),
      NgxsModule.forRoot([MenusState, UserState], { developmentMode: true }),
      NgxsReduxDevtoolsPluginModule.forRoot()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
