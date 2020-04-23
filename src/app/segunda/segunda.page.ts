import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Cpf } from '../models/cpf';
import { Router } from '@angular/router';
@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {
  data: Cpf;
  nome: any;
  resposta: any;
   
  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Cpf();
   }
 
  ngOnInit() {
     
  } 

  cpf(){
    
    this.apiService.getcpf(this.data.cpf).subscribe(response=>{
      
      this.nome = response.nome;
      console.log(this.nome);
      if(this.nome == 'nada encontrado'){
        this.resposta = "CPF não encontrado";
        
      }else{
        localStorage.setItem("nome", response.nome);
        localStorage.setItem("id", response.id);
        this.router.navigate(['quarta']);
        
      }
    })
  }

  teste(){
    this.router.navigate(['home']);
  }

}
