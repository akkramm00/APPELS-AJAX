//     À partir du code HTML ci-contre, construisez le code JavaScript permettant de récupérer le nom d'une ville en fonction du code postal.
//     Le nom des villes sera injecté dans le Select sous forme d'option. Pour cela, vous devrez respecter certaines règles.

//     Vous n’êtes pas responsable des recherches erronées des utilisateurs (fautes d’orthographe). Retournez un message d'erreur indiquant
//     de recommencer dans le cas où la recherche retourne un objet vide.

//     L'utilisateur devra voir :

//         le code postal de la ville,

//         le/les noms de villes recherchées sous forme d'option dans le select,

//     Le code HTML vous est fourni, vous n'avez pas besoin de le modifier. Il vous faudra utiliser cette structure pour afficher les informations 
//     à l'écran.

//     Toutes les informations nécessaires pour construire la requête vous sont fournies dans la documentation de l'API.

//     Afin de vous orienter, quelques morceaux de code vous sont proposés : le code HTML et la structure de la fonction stockant une commune dans l'URL.

//     En revanche, vous devrez établir :

//     ==> Une fonction permettant de transformer le texte de la commune en fonction des spécifications.

//     ==> Une fonction permettant de créer l'objet à partir des données reçues via l'API.

//     ==>Fonction pour construire l'URL :
//========================================= * INDICE  * ======================================

// Les étapes pour réussir votre code :

//     Effectuer une requête sur l'URL.

//     Récupérer la réponse dans une variable.

//     Boucler sur cette variable pour insérer les résultats dans le Select sous forme d'option.

//========================================= * SOLUTION * =====================================

// En premier lieu, rendons-nous sur la documentation de l'API pour comprendre comment elle fonctionne. On peut voir des cases à cocher, qui sont les   différentes informations que nous voulons que l'API nous retourne. Nous remarquons une URL : c'est celle que nous utiliserons pour récupérer les   données.

const apiUrl = 'https://geo.api.gouv.fr/communes?codePostal='
const zipcode = document.getElementById("zipcode")
const city = document.getElementById("city")
const boutonTester = document.getElementById("tester")

boutonTester.addEventListener("click", (event)=>{

    event.preventDefault() // évite que la page ne recharge
   
    const code = zipcode.value;
    const url = apiUrl+code;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
       
        if (xhr.status === 200) {
           
            const result = JSON.parse(xhr.response);
       
            if(result.length){
           
                result.forEach(function(value, key){
   
                    let myOption = document.createElement("option");
                    myOption.text = value.nom;
                    myOption.value = value.nom;
                    city.appendChild(myOption);
                });
             }
            }else{
                console.log('L\'appel API a échoué');
              }
    };
xhr.send();

})