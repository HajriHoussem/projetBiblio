import { CommandeDetail } from './commande-detail';

export class Commande {
     
    id:string;
    date_commande:Date;
    id_client:String;
    etat:string;
    montant:number;
    Details :CommandeDetail[];
    constructor(id:string,date_commande:Date,etat:string, montant:number, Details:CommandeDetail[]){

        this.id =id;
        this.date_commande =date_commande;
        this.etat=etat;
        this.montant=montant;
        this.Details=Details;
    
    }
}

