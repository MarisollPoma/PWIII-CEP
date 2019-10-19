import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CepAPIService {

  apiURL : string = "https://viacep.com.br/ws/";


  constructor(private httpClient: (HttpClient)) { }

  handleError(error) {
    let errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    alert(errorMessage);
    return throwError(errorMessage);
  }
  
}
