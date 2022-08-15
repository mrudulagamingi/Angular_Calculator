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
    headers: { 'Content-Type': 'application/json', 'apikey': 'CQvAUm2zCV6Ij1wHmMMhtlRbTz3CrTNt' },
    
};

return this.http.get<any>(this.url+'/convert?to='+to+'&from='+from+'&amount='+amount, httpOptions);
}
}


