import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Apollo, ApolloModule} from "apollo-angular";
import {HttpLinkModule, HttpLink} from "apollo-angular-link-http";
import {
  InMemoryCache,
} from '@apollo/client';
import {ListComponent} from './list/list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
  ) {
    apollo.create({
      // @ts-ignore
      link: httpLink.create({uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql'}),
      cache: new InMemoryCache()
    })
  }
}
