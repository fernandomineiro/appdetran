import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-a',
  templateUrl: './a.page.html', 
  styleUrls: ['./a.page.scss'],
})
export class APage implements OnInit {
  hoje: number = Date.now();
  todayDate : Date = new Date();
  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }
  voltar(){
    this.router.navigate(['quarta']);
  }
}
