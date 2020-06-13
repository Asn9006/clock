function getIcones (hora){
    if (hora > 7 && hora <= 17){
        return 'fas fa-sun'
    }else if (hora > 17 && hora <= 18){
        return 'fas fa-cloud-sun'
    }else if (hora > 18 && hora <=19){
        return 'fas fa-cloud-moon'
    }else if (hora > 19 && hora <= 23 || hora >= 0 && hora <=4){
        return 'fas fa-moon'
    }else if (hora > 4 && hora <= 5){
        return 'fas fa-cloud-moon'
    }else if (hora > 5){
        return 'fas fa-cloud-sun'
    }
}

function Executar(){
    //carregando as variaves
    var horario = new Date()
    var hora_atual = ("00" + horario.getHours()).slice(-2)
    var minuto_atual = ("00" + horario.getMinutes()).slice(-2)
    var segundo_atual = ("00" + horario.getSeconds()).slice(-2)

    //setando a hora no html
    var horas = `${hora_atual}:${minuto_atual}:${segundo_atual}`
    document.querySelector('strong.time').innerHTML = horas

    //setando o icone no html
    document.querySelector('i#icon').className = getIcones(hora_atual) //trocando uma classe de um elemento 
}

//boas vindas e refresh de horario
setTimeout(
    function(){
        setInterval(
            function(){
                Executar()
            }, 1000
        )
    }, 1200
)

//refresh
setInterval(
    function(){
        location.reload()
    }, 360000
)