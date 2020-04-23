import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quarta', 
  templateUrl: './quarta.page.html',
  styleUrls: ['./quarta.page.scss'],
})
export class QuartaPage implements OnInit {
  primeiro: any;
  nome: any;
  constructor(
    public router: Router
  ) { }
 
  ngOnInit() {
    this.nome = localStorage.getItem("nome");
    this.primeiro = (this.nome.substring(0,1));
  }

  teste(){
    this.router.navigate(['quinta']);
  }

}
