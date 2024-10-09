// initial-redirect.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-redirect',
  template: ''
})
export class InitialRedirectComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/about'], { skipLocationChange: true });
  }
}