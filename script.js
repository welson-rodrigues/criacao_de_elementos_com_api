function obterDados(){
    const url = "https://reqres.in/api/users"
    let req = new XMLHttpRequest()
    req.open("GET", url)
    req.responseType = "json"
    req.send()
    req.onload = function(){
        let users = req.response
        exibirDados(users)
    }
}

function exibirDados(JsonObjeto){
    let usuarios = JsonObjeto.data
    let container = document.getElementById('container');
    
    usuarios.forEach(element =>{
        let listItem = document.createElement('li');
        listItem.classList.add('usuario-item');
        
        let fotoElement = document.createElement('img');
        fotoElement.setAttribute('src', element.avatar);
        fotoElement.setAttribute('alt', 'Foto'); 
        listItem.appendChild(fotoElement);

        let infoList = document.createElement('ul');
        infoList.classList.add('usuario-info');

        let idElement = document.createElement('li');
        idElement.textContent = `ID: ${element.id}`;
        infoList.appendChild(idElement);

        let nomeElement = document.createElement('li');
        nomeElement.textContent = `Nome: ${element.first_name}`;
        infoList.appendChild(nomeElement);

        let sobrenomeElement = document.createElement('li');
        sobrenomeElement.textContent = `Sobrenome: ${element.last_name}`;
        infoList.appendChild(sobrenomeElement);

        let emailElement = document.createElement('li');
        emailElement.textContent = `Email: ${element.email}`;
        infoList.appendChild(emailElement);

        listItem.appendChild(infoList);
        container.appendChild(listItem);
    })
    console.log(usuarios)
}

obterDados();
