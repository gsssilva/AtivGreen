// Função para selecionar uma imagem
function selectImage(image) {
    // Remove a classe 'selected' de todas as imagens e ajusta a opacidade
    const images = document.querySelectorAll('.image');
    images.forEach(img => {
        img.classList.remove('selected');
        img.style.opacity = '40%';
    });

    // Adiciona a classe 'selected' na imagem clicada e ajusta a opacidade
    image.classList.add('selected');
    image.style.opacity = '100%';

    // Habilita o botão de confirmação
    const confirmButton = document.getElementById('buttonConfirm');
    confirmButton.classList.add('enabled');
    confirmButton.removeAttribute('disabled');
    confirmButton.onclick = function () {
        // Redireciona para uma nova página com a imagem selecionada e a sua descrição
        const imageSrc = encodeURIComponent(image.src);
        const imageDesc = encodeURIComponent(image.dataset.description);
        window.location.href = `thanks.html?imageSrc=${imageSrc}&imageDesc=${imageDesc}`;
    };
}

// Executa quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    let activePage = localStorage.getItem('activePage');

    // Se não houver uma página ativa, define como página 1 e salva no localStorage
    if (!activePage) {
        activePage = 1;
        localStorage.setItem('activePage', activePage);
    }

    // Adiciona a classe 'active' ao botão da página ativa
    const selectedButton = document.getElementById(`page${activePage}`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }

    // Garante que todas as imagens comecem com opacidade total e configura as descrições
    const images = document.querySelectorAll('.image');
    images.forEach((img, index) => {
        img.style.opacity = '100%';
        img.dataset.description = getDescription(activePage, index); // Obtem a descrição com base no indice
        img.classList.remove('selected'); // Remove a classe 'selected' inicialmente
    });
});

// Lista para definir a descrição de cada imagem
function getDescription(page, index) {
    const descriptionsPage1 = [
        "PLANETA TERRA SENDO VISTO DA LUA",
        "VISÃO INTERNA DO ÔNIBUS ESPACIAL PARA O PLANETA TERRA",
        "GALÁXIA COLORIDA!",
        "GALÁXIA A MILHARES DE QUILOMETROS BRILHANTE!",
        "GALÁXIA COM ZOOM SUPER POTENTE QUE SÓ A NASA TEM",
        "ÔNIBUS ESPACIAL NA ÓRBITA ACIMA DA ATMOSFERA TERRRESTRE",
        "ASTRONAUTA OPERANDO NO ESPAÇO",
        "IMAGEM SURPREENDENTE DE ASTRONAUTA NO ESPAÇO",
        "JUPTER O PLANETA MARAVILHOSO"
    ];

    const descriptionsPage2 = [
        "ANTENA CAPTANDO SINAL DO ESPAÇO",
        "POR DENTRO DE UM FOGUETE",
        "AUTOMOVEL DA LUA",
        "PEGADAS NO SOLO DA LUA",
        "FOTO SURREAL DA LUA",
        "SATELITE PASSANDO NA ORBITA DO PLANETA TERRA",
        "FOGUETE SENDO LANÇADO",
        "FOTO DOS GASES ATMOSFERICOS",
        "IMAGEM DO PLANETA NETUNO"
    ];

    // se a page for 1 quer dizer que ele devera retoranar as descrições da lista page1 se nao da page2
    if (page == 1) {
        return descriptionsPage1[index] || "Imagem diretamente da nasa";
    } else if (page == 2) {
        return descriptionsPage2[index] || "Imagem diretamente da nasa";
    } else {
        return "Imagem diretamente da nasa";
    }
}

// Função para selecionar a página e salvar a página ativa no localStorage
function selectPage(pageNumber) {
    localStorage.setItem('activePage', pageNumber);
}