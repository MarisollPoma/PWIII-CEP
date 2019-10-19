import { Component, OnInit } from '@angular/core';
import { FormGroup, Form,  FormBuilder } from '@angular/forms';
import { CEP } from '../model/cep';




@Component({
  selector: 'has-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.css']
})
export class BuscaCepComponent implements OnInit {

  cepForm : FormGroup; 
  cep : CEP;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

          this.cepForm = this.formBuilder.group({
          /* vai puxar o cep */
          cep : this.formBuilder.control('')

          
      })
    
}

    /* ele será chamado na tela */ 
 onConsultar() {
      /* uma variavel */
     let cep : string = this.cepForm.value.cep;
      alert(cep);



    }

  }
