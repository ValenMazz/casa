let titulo = document.querySelector ('#A1') 

let boton = document.querySelector ('#A2')

let img1 = document.querySelector ('#A3')


let cambiarTitulo = false;
boton.onclick = function(){
    if (cambiarTitulo == false) {
titulo.innerText = 'OJALA FUNCIONE'
img1.src = 'https://i.pinimg.com/236x/e4/f4/03/e4f403bb8fba8d2819d38a557f031294.jpg'
cambiarTitulo = true


    }else{
        titulo.innerText = 'holaa'
        cambiarTitulo = false
        img1 = 'https://cdn0.psicologia-online.com/es/posts/4/5/8/que_significa_sonar_con_la_playa_5854_600_square.jpg'
    }
}

//esto es muy bueno 