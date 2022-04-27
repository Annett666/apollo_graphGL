import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import {map, Observable} from "rxjs";
import {Course, Query} from "../types";
import gql from "graphql-tag";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  courses?: Observable<Course[]>;

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.courses = this.apollo.watchQuery<Query>({
      query: gql`
        query allCourses {
          allCourses {
            id
            title
            author
            description
            topic
            url
          }
        }
      `
    }).valueChanges.pipe(map(result => result.data.allCourses));
  }

}
