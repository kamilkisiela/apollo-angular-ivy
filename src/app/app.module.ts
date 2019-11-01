import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { UpvoterComponent } from './upvoter.component';

import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent, ListComponent, UpvoterComponent],
  imports: [BrowserModule, HttpClientModule, GraphQLModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
