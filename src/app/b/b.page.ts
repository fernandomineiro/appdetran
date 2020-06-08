import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.page.html',
  styleUrls: ['./b.page.scss'],
})
export class BPage implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  voltar(){
    this.router.navigate(['quarta']);
  }

}
