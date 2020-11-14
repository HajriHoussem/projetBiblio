import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Commande } from '../../../models/commande';
import { CommandesService } from '../../../services/commandes.service';
@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.sass']
})
export class ListCommandeComponent implements OnInit {
  public commandeall : Commande[];
  public commande :Commande[] ;

  
  public mot_cle : String ="";

  constructor(private CommandesService : CommandesService, private router:Router) { }

  ngOnInit(): void {
    
    this.AfficherCommande();

  }

   AfficherCommande()
  {
    this.CommandesService.tous_commande().subscribe(
      data=>{
      this.commandeall =data;
      this.commande=data;
      console.log(data);
    },err=>{console.log(err);
    })
    }


    Onchercher(form:any)
    {
      this.mot_cle=form.mot_cle;
      this.commande=this.commandeall;
      {
        if(this.mot_cle!="")
        {
          this.commande=this.commande.filter(x=>x.id==form.mot_cle);
        }
        else
        this.commande=this.commandeall;
      }
    }

    onDeleteCommande(id:number)
    {
      let conf=confirm("Etes vous sur de supprimer cet commande ?? ");
      if(conf)
      this.CommandesService.deleteAssemble(id).subscribe(data=>{
        this.AfficherCommande();
      },err=>{console.log(err);})
    }
    onEditCommande(id:number)
    {
      this.router.navigateByUrl("/modifierassemble/"+id);
    }
}
