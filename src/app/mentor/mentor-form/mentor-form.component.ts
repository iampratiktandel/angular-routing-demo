import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-form',
  templateUrl: './mentor-form.component.html',
  styleUrls: ['./mentor-form.component.css']
})
export class MentorFormComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['mentor', 'list']);
    // this.router.navigateByUrl('mentor/list');
  }

  onCancel() {
    this.router.navigate(['mentor', 'list']);
    // this.router.navigateByUrl('mentor/list');
  }

}
