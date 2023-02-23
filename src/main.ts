import 'zone.js/dist/zone';

// Modular Approach

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// =============================================

// import { CommonModule } from '@angular/common';
// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

// =============================================

// import { environment } from './envirionments/environment';
// import { enableProdMode } from '@angular/core';

// if (environment.production) {
//   enableProdMode();
// }
