const touches = [...document.querySelectorAll('.bouton')];
console.log(typeof touches[1].dataset);
//list tous les keycode dans un tableau 
const listeKeyCode=touches.map(touche=>touche.dataset.key);
//prend l'element ecran
const ecran =document.querySelector('.ecran');
//save caractère taper sur le clavier
document.addEventListener('keydown',(e)=>{
    const valeur =e.keyCode.toString();
    calculer(valeur);
   // console.log(valeur+typeof valeur);
});
//save les caractères cliqué par le souri
document.addEventListener('click',(e)=>{
    const valeur = e.target.dataset.key;
    calculer(valeur);
    //console.log(valeur+typeof valeur);
})
//effectue l expression saisie sur l"ecran 
const calculer =(valeur)=>{
    if(listeKeyCode.includes(valeur)){
        switch(valeur){
            case '8':
                //backSpace
                ecran.textContent="";
                break
            case '13':
                //egal
                const calcul=eval(ecran.textContent);
                ecran.textContent=calcul;
                break;
            default :
            const indexKeycode =listeKeyCode.indexOf(valeur);
            const touche =touches[indexKeycode];
            console.log(touche);
            console.log(ecran.textContent);
            ecran.textContent+=touche.innerHTML;
        }
    }
}
//affiche l erreur 
window.addEventListener('error',(e) =>{
    alert('une erreur est survenue dans votre calcul :'+ e.message);
})