// ! Ajout des fleches dans le HTML
// ? Fonctionnement des eventListener pour le changement des images
// * Condition pour le défilement infini


//  affichages des dots
function createDot() {
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dots.appendChild(dot);
      if (i == slideIndex) {
        dot.classList.add("dot_selected");
      }
    }
  }
  // gestion de la fleche gauche
  // ! Céation d´une balise div, ajout d´une class,
  // ! j´ajoute une source qui mene vers une image,
  // ! je l´insere dans une balise parente.
  function arrowClickLeft () {
    const leftArrow = document.createElement('img');
    leftArrow.classList.add('.arrow_left');
    leftArrow.setAttribute("src", "./assets/images/arrow_left.png");
    arrows.appendChild(leftArrow);
    // ? Au clique  je decremente ou incremente le slideIndex,
    // ? ensuite une condition (if) permet de parcourir le tableau,
    // ? enfin la valeur est indexé sur le slideIndex
    // ? J´insere la valeur dans le DOM en mettant a jour les valeurs src et tagline de la balise img et p
    leftArrow.addEventListener("click", () => {
      const arrayDots = document.querySelectorAll(".dots .dot");
      arrayDots[slideIndex].classList.remove("dot_selected");
      slideIndex--;
      if ( slideIndex < 0) {
        slideIndex = slides.length -1;
      }
      bannerImg.src = slides[slideIndex].image;
      tagLine.innerHTML = slides[slideIndex].tagLine;
      arrayDots[slideIndex].classList.add("dot_selected");
    })
      
  }
  
  //  gestion de la fleche droite 
  function arrowClickRight () {
    const rightArrow = document.createElement('img');
    rightArrow.classList.add('.arrow_left');
    rightArrow.setAttribute("src", "./assets/images/arrow_right.png");
    arrows.appendChild(rightArrow);
    rightArrow.addEventListener("click", () => {
      const arrayDots = document.querySelectorAll(".dots .dot");
      arrayDots[slideIndex].classList.remove("dot_selected");
      slideIndex++;
      // * Le defilement infini est geré en remettant l´index a zero des que la condition n´est plus vrai
      // * Dans la condition je décrémente de 1 pour que l´index affiche la valeur depuis zero et non la valeur  du tableau qui debute a 1 
      if ( slideIndex > slides.length -1) {
        slideIndex = 0;
      }
      bannerImg.src = slides[slideIndex].image;
      tagLine.innerHTML = slides[slideIndex].tagLine;
      arrayDots[slideIndex].classList.add("dot_selected");
    })
      
  }