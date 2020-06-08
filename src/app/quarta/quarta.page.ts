import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-quarta', 
  templateUrl: './quarta.page.html',
  styleUrls: ['./quarta.page.scss'],
})
export class QuartaPage implements OnInit {
  primeiro: any;
  nome: any;
  cpf:any;
  ab: any = false;
  
 
  constructor(
    public router: Router,
    private menu: MenuController
  ) { }
 
  ngOnInit() {
    this.nome = localStorage.getItem("nome");
    this.cpf = localStorage.getItem("cpf");
    this.primeiro = (this.nome.substring(0,1));
    console.log(this.ab);
  }

  te(){
    this.router.navigate(['quinta']);
  }
  ti(){
    this.router.navigate(['c']);
  }
  to(){
    this.router.navigate(['a']);
  }
  tu(){
    this.router.navigate(['b']);
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  sair(){
    this.router.navigate(['segunda']);
  }

  a(){
    if(this.ab == false){
      this.ab = true;
    }else{
      this.ab = false;
    }
  }
}