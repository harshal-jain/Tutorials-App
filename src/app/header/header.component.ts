import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sess: any;
  constructor() { }

  ngOnInit(): void {
    this.sess = localStorage.getItem("Employee");
  }

}
