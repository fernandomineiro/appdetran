import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Cpf } from '../models/cpf';
@Component({
  selector: 'app-terceira',
  templateUrl: './terceira.page.html',
  styleUrls: ['./terceira.page.scss'],
})
export class TerceiraPage implements OnInit {
  data: Cpf;
  nome: any;
  resposta: any;
  id: any;
  am:any = [];
  constructor(
    public router: Router,
    public apiService: ApiService,
  ) { this.data = new Cpf();
  this.id = localStorage.getItem("id");
  }
 
  ngOnInit() {
  }
   
  volta(){
    this.router.navigate(['quinta']);
  }

  entrar(){
    this.apiService.getimg(this.data.codigo, this.id).subscribe(response=>{
      
      if(response.nome == 'nada encontrado'){
        console.log('nada');
      }
      else{
        
        this.am = response;
        
        this.apiService.setvalor(this.am);
        this.router.navigate(['sexta']);
      }
    })
  }

}
