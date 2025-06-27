import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/funcionario';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];

  constructor( private funcionarioService: FuncionarioService){}

    ngOnInit(): void {
      this.funcionarioService.GetFuncionarios().subscribe(data => {
        const dados = data.dados;

        dados.map((item)=>{
          item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR')
          item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR')
        })

        this.funcionarios = data.dados;
        this.funcionariosGeral = data.dados;

      });
  }

  search(event : Event){

    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    console.log('[search()] Procurando:', value);

    this.funcionarios = this.funcionariosGeral.filter(funcionario =>{
      return funcionario.nome.toLowerCase().includes(value);
    })

  }
  

}

