// JavaScript Document
var donneesSenMoney = '{"tel1": {"numero": "772114215", "solde": 10000, "code": "2020"},"tel2": {"numero": "772404550", "solde": 20000, "code": "2010"},"tel3": {"numero": "774252530", "solde": 30000, "code": "2000"},"tel4": {"numero": "773216070", "solde": 40000, "code": "1990"},"tel5": {"numero": "775202244", "solde": 50000, "code": "1980"}}';

function menu(){
	var choix=window.prompt("------MENU SENMONEY------\n"+
	"Taper le numéro du service choisi\n"+
	"1: Solde de mon compte\n"+
	"2: Transfert d'argent\n"+
	"3: Paiement de facture\n"+
	"4: Options\n");
	
    switch(choix)
	{
		case "1" : afficherSolde();

		break;
		
		case "2": afficherTransfert();
		
		break;
		
		case "3" :afficherPaiement();
		break;

		case "4" : afficherOption();
		break;
		
		default :menu();
	}
}
      //Vérification du  numéro
   function verifierNumero(num, obj){
    for(tel in obj){
        if(obj[tel].numero == num)
            return obj[tel];
    }
    return null;
 
}
   //Affichage du solde 
   function afficherSolde(){
    var numero = document.getElementById("numero").value; 
    //alert(numero);
    var donneesSenMoneyJs = JSON.parse(donneesSenMoney);
    //alert(donneesSenMoneyJs);
    obj = verifierNumero(numero, donneesSenMoneyJs);
    //alert(obj.code);
	if(obj == null){//Le numero ne se trouve pas dans donneesSenMoney
		alert("Numero introuvable dans sen Money");	
	}else{//Le numero se trouve dans donneesSenMoney
		var code = window.prompt("Veuillez saisir le code de sécurité");
        if(code == obj.code){
			var choix=window.confirm("Le solde de votre compte est "+obj.solde+
			"\n Voulez-vous retourner au menu ?");
			if(choix==true){
				menu();
			}	
		}else{
			var choix=window.confirm("Code éroné\n Voulez-vous retourner au menu ?");
			if(choix==true){
				menu();
			}
		}
	}
}
      //Transfert d'argent
	 function afficherTransfert(){
		var numero = document.getElementById("numero").value; 
		//alert(numero);
		var donneesSenMoneyJs = JSON.parse(donneesSenMoney);
		//alert(donneesSenMoneyJs);
		obj = verifierNumero(numero, donneesSenMoneyJs);
		//alert(obj.code);
		if(obj == null){//Le numero ne se trouve pas dans donneesSenMoney
			alert("Numero introuvable dans sen Money");	
		}else{//Le numero se trouve dans donneesSenMoney
            var mont = window.prompt("Entrez le montant que vous voulez transférer");
            var numero = window.prompt("Entrez le numéro du destinataire");
            var code = window.prompt("Entrer votre code secret");
			if(code == obj.code){
				var choix=window.confirm("Transfert effectuée "+
                "\n Voulez-vous retourner au menu ?");
                solde = solde -parseInt(mont);
				if(choix==true){
					menu();
				}	
			}else{
				var choix=window.confirm("Code éroné\n Voulez-vous retourner au menu ?");
				if(choix==true){
					menu();
				}
			}
		}
	}





