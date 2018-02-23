import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AsistenciaService {

  base="http://192.241.152.146:1337/persona/21"
  constructor(
    private http:Http
  ) { }
  getPersona(){
    return this.http.get(this.base)
              .map(response => response.json());;
  }

}
