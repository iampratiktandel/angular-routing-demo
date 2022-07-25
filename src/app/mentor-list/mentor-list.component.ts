import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {

  public mentorList: any;

  constructor() {
    this.mentorList = [
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
