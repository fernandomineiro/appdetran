import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sexta',
  templateUrl: './sexta.page.html',
  styleUrls: ['./sexta.page.scss'],
}) 
export class SextaPage implements OnInit {
  resposta:any = [];
  hoje: number = Date.now();
  todayDate : Date = new Date();
  
  constructor(
    public router: Router,
    public apiService: ApiService,
  ) { }

  ngOnInit() {
    this.resposta = this.apiService.getvalor();
    
    console.log(this.resposta);
    
  }

  voltar(){
    this.router.navigate(['terceira']);
  }
  
}
 