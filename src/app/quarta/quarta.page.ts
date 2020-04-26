import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-quarta', 
  templateUrl: './quarta.page.html',
  styleUrls: ['./quarta.page.scss'],
})
export class QuartaPage implements OnInit {
  primeiro: any;
  nome: any;
  cpf:any;
 
  constructor(
    public router: Router,
    private menu: MenuController
  ) { }
 
  ngOnInit() {
    this.nome = localStorage.getItem("nome");
    this.cpf = localStorage.getItem("cpf");
    this.primeiro = (this.nome.substring(0,1));
  }

  te(){
    console.log('ok');
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  sair(){
    this.router.navigate(['segunda']);
  }

}