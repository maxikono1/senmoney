var donneesSenMoney = '{"tel1": {"numero": "773520182", "solde": 1000, "code": "0809"},"tel2": {"numero": "788737402", "solde": 2000, "code": "0810"},"tel3": {"numero": "771378265", "solde": 3000, "code": "0811"},"tel4": {"numero": "779478266", "solde": 5000, "code": "0812"},"tel5": {"numero": "774578267", "solde": 5000, "code": "0813"}}';                                                          
                                                          

function menu(){
	var choix=window.prompt("------MENU SENMONEY------\n"+
	"Taper le numéro du service choisi\n"+
	"1: Solde de mon compte\n"+
	"2: Transfert d'argent\n"+
	"3: Paiement de facture\n"+
	"4: Options\n");
	
	if(choix=='1'){
		afficherSolde();	                        
	}
}

function verifierNumero(num, obj){
    for(tel in obj){
        if(obj[tel].numero == num)
            return obj[tel];
    }
    return null;

}

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




