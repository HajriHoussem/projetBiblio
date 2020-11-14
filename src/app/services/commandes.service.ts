import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Commande } from '../models/commande';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommandesService { [x: string]: any;
  private host ='http://localhost:8181';
  constructor(private httpClient: HttpClient) {}
 

public tous_commande() {
  return this.httpClient.get<Commande[]>(this.host+'/commandes');
}

public deleteCommande(id:number)
{
  return this.httpClient.delete(this.host+"/delete/"+id);
}
public get1Commande(id:number)
{
  return this.httpClient.get<any>(this.host+"/commandes/"+id);
  
}
public addCommande(objet:Commande):Observable<Commande>
{
  return this.httpClient.post<Commande>(this.host+"/commandes",objet);
}
public updateCommande(objet:any)
{
  return this.httpClient.put<any>(this.host+"/update",objet);
}

}
