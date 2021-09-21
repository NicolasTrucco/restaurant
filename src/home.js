const home = () => {
    console.log('FUNCTION homeeeee!')

    const $content = document.getElementById("content");
    const $homeDiv = document.createElement("div");
    const $para = document.createElement("p");
    const $parrilla = document.createElement("p");


    $homeDiv.setAttribute("id", 'homeDiv');
    $homeDiv.setAttribute("class", 'tab');
    $homeDiv.style.display = 'flex'
    
    $content.appendChild($homeDiv);

    $homeDiv.appendChild($parrilla);
    $parrilla.textContent = 'Parrilla';
    
    $homeDiv.appendChild($para);
    $para.textContent = 'Restaurante. Carnes. Vinos';

}

export { home }