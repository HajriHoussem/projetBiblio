import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/models/commande';
import { CommandesService } from 'src/app/services/commandes.service';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.sass']
})
export class AddCommandeComponent implements OnInit {

  public currentCommand:any;
  mode:number=1;
  constructor(private commandeService : CommandesService) { }

  ngOnInit(): void {
  }

  OnsaveCommand(data:Commande){
    this.commandeService.addCommande(data).subscribe(res=>{
      this.currentCommand=res
      this.mode=2;
      })
  }
  OnewCommand(){
    this.mode=1;
  }
}
