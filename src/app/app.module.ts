// Modular Approach

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskContainerComponent } from './components/task-container/task-container.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, TaskContainerComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Standalone Approach

// @NgModule({
//   imports: [BrowserModule],
//   declarations: [AppComponent],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// import { CommonModule } from '@angular/common';
