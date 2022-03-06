let musicas = [ 
    {titulo: 'Od Yishama', artista: 'Jammy Jams', src: 'musicas/Country - Od Yishama - Jammy Jams.mp3', img: 'img/country.jpg'},
    {titulo: 'American Idle', artista: 'RKVC', src: 'musicas/Rock - American Idle - RKVC.mp3', img: 'img/rock.jpg'},
    {titulo: 'A Year Ago', artista: 'NEFFEX', src: 'musicas/Pop - A Year Ago - NEFFEX.mp3', img: 'img/pop.jpg'},
    {titulo: 'Satisfaction Guaranteed', artista: 'Dan Lebowitz', src: 'musicas/Reggae - Satisfaction Guaranteed - Dan Lebowitz.mp3', img: 'img/reggae.jpg'},
    {titulo: 'King Porter Stomp', artista: 'Joel Cummins', src: 'musicas/Jazz - King Porter Stomp - Joel Cummins.mp3', img: 'img/jazz.jpg'},
    {titulo: 'Rainbow Forest', artista: 'Quincas Moreira', src: 'musicas/Infantil - Rainbow Forest - Quincas Moreira.mp3', img: 'img/infantil.jpg'},
    {titulo: 'Road Tripzzz', artista: 'Ofshane', src: 'musicas/Hip-Hop - Road Tripzzz - Ofshane.mp3', img: 'img/hip-hop.jpg'},
    {titulo: 'Press Fuse', artista: 'French Fuse', src: 'musicas/Eletronica - Press Fuse - French Fuse.mp3', img: 'img/eletronica.jpg'},
    {titulo: 'In the Sweet By and By', artista: 'Zachariah Hickman', src: 'musicas/Country2 - In the Sweet By and By - Zachariah Hickman.mp3', img: 'img/country2.jpg'},
    {titulo: 'Bourree', artista: 'Joel Cummins', src: 'musicas/Classica - Bourree - Joel Cummins.mp3', img: 'img/classica.jpg'}
]

let musica = document.querySelector('audio')
let indexMusica = 0

let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica)

//Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica)

document.querySelector('.botao-pause').addEventListener('click', pausarMusica)

musica.addEventListener('timeupdate', atualizarBarra)

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--
    if(indexMusica < 0) {
        indexMusica = 9
    }
    renderizarMusica(indexMusica)
})

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++
    if(indexMusica > 9) {
        indexMusica = 0
    }
    renderizarMusica(indexMusica)
})

//funções

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo
        nomeArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))
    })
}

function tocarMusica() {
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'
}

function pausarMusica() {
    musica.pause()
    document.querySelector('.botao-play').style.display = 'block'
    document.querySelector('.botao-pause').style.display = 'none'
}

function atualizarBarra() {
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime))
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60

    if(campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos+':'+campoSegundos
}

