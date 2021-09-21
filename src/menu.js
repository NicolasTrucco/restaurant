const menu = () => {
    console.log('FUNCIONA el menu')

    const $content = document.getElementById("content");
    const $menuDiv = document.createElement("div");
    const $item1 = document.createElement("div");
    const $item2 = document.createElement("div");
    const $item3 = document.createElement("div");
    const $item4 = document.createElement("div");
    const $photo1 = document.createElement('img');
    const $photo2 = document.createElement('img');
    const $photo3 = document.createElement('img');
    const $photo4 = document.createElement('img');
    const $menu1 = document.createElement("p");
    const $menu2 = document.createElement("p");
    const $menu3 = document.createElement("p");
    const $menu4 = document.createElement("p");

    $menuDiv.setAttribute("id", 'menuDiv');
    $menuDiv.setAttribute("class", 'tab');
    $menuDiv.style.display = 'none'
    $item1.setAttribute("class", 'item');
    $item2.setAttribute("class", 'item');
    $item3.setAttribute("class", 'item');
    $item4.setAttribute("class", 'item');


    $content.appendChild($menuDiv);
    
    $menuDiv.appendChild($item1);
    $menuDiv.appendChild($item2);
    $menuDiv.appendChild($item3);
    $menuDiv.appendChild($item4);
    
    $item1.appendChild($photo1);
    $item2.appendChild($photo2);
    $item3.appendChild($photo3);
    $item4.appendChild($photo4);

    $item1.appendChild($menu1);
    $item2.appendChild($menu2);
    $item3.appendChild($menu3);
    $item4.appendChild($menu4);

    $menu1.textContent = 'Bife de chorizo medium 400grs';
    $menu2.textContent = 'Asado de novillo corte americano';
    $menu3.textContent = 'Brochette de lomo cebolla y panceta';
    $menu4.textContent = 'Entraña';

    $photo1.src = 'images/Bife-de-chorizo-medium-400grs.jpg';
    $photo1.alt = 'Bife-de-chorizo-medium-400grs';
    $photo2.src = 'images/asado-de-novillo-corte-americano.jpg';
    $photo2.alt = 'Asado-de-novillo-corte-americano';
    $photo3.src = 'images/brochette-de-lomo-cebolla-y-panceta.jpg';
    $photo3.alt = 'Brochette-de-lomo-cebolla-y-panceta';
    $photo4.src = 'images/entraña.jpg';
    $photo4.alt = 'Entraña';

    $photo1.setAttribute("class", 'photo');
    $photo2.setAttribute("class", 'photo');
    $photo3.setAttribute("class", 'photo');
    $photo4.setAttribute("class", 'photo');


}

export { menu }