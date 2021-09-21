const contact = () => {
    console.log('FUNCIONA el contact')

    const $content = document.getElementById("content");
    const $phone = document.createElement("p");
    const $adress = document.createElement("p");
    const $contactDiv = document.createElement("div");
    const $map = document.createElement('img');




    $contactDiv.setAttribute("id", 'contactDiv');
    $contactDiv.setAttribute("class", 'tab');
    $contactDiv.style.display = 'none'
    
    $content.appendChild($contactDiv);
    $contactDiv.appendChild($phone);
    $phone.textContent = '📞 4806-4668';
    $contactDiv.appendChild($adress);
    $adress.textContent = '🏠 Juncal 2049 C1116 AAE, Buenos Aires';
    $contactDiv.appendChild($map);
    $map.src = 'images/map.jpg';
    $map.alt = 'Don Trucco Location';

    
}

export { contact }