import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c',
  templateUrl: './c.page.html',
  styleUrls: ['./c.page.scss'],
})
export class CPage implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  voltar(){
    this.router.navigate(['quarta']);
  }

}
