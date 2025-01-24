import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from 'primeng/api';

import { SharedModule as SharedModuleP } from './shared/shared.module';

//Configuración de locale de la app
import localeEsMx from '@angular/common/locales/es-MX';
import localeJa from '@angular/common/locales/ja';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsMx);
registerLocaleData(localeJa);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    SharedModuleP,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-MX',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
