import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
 
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  volta(){
    this.router.navigate(['quarta']);
  }
 
  vai(){
    this.router.navigate(['terceira']);
  }
}
