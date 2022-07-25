import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.css']
})
export class InternListComponent implements OnInit {

  public internList: any;

  constructor() {
    this.internList = [
      {
        id: 1,
        name: 'John Doe',
        age: 30,
        gender: 'Male',
        email: 'johndoe@gmail.com'
      },
      {
        id: 2,
        name: 'John Smith',
        age: 33,
        gender: 'Male',
        email: 'johnsmith@gmail.com'
      },
      {
        id: 3,
        name: 'Jane Doe',
        age: 32,
        gender: 'Female',
        email: 'janedoe@gmail.com'
      },
      {
        id: 4,
        name: 'Jane Smith',
        age: 31,
        gender: 'Female',
        email: 'janesmith@gmail.com'
      }
    ];
  }

  ngOnInit(): void {
  }

}
