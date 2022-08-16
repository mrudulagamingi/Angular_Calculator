import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
readonly url="https://api.apilayer.com/fixer"
constructor(private http:HttpClient) { }

getPost(to:any, from:any, amount:any):Observable<any[]>{
  const httpOptions = {
    headers: { 'Content-Type': 'application/json', 'apikey': 'zOZLmBI7D3t8GOyOau8pfFDLkEtDDDO2' },
    
};

return this.http.get<any>(this.url+'/convert?to='+to+'&from='+from+'&amount='+amount, httpOptions);
}

getdropdowns():Observable<any[]>{
  const httpOptions = {
    headers: { 'Content-Type': 'application/json', 'apikey': 'zOZLmBI7D3t8GOyOau8pfFDLkEtDDDO2' },
    
};

return this.http.get<any>(this.url+'/symbols', httpOptions);
}
}


