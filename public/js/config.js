tamanhoFont = (tm) => {
    var p = document.getElementsByTagName('p')
    console.log(p.length)
    for (const i in p) {
        p[i].style.fontSize = `${Number(tm.value)}px`
    }
}


dawnBarraConf = (b) => {
    var barra = document.getElementById('BarraConf')
    if (barra.style.bottom == '0%') {
        b.innerHTML = `<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-up-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
        </svg>`;
        barra.style.bottom = '-80px';
    } else {
        b.innerHTML = `<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-down-square" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
            d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path fill-rule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
        </svg>`;
        barra.style.bottom = '0%';
    }




}


verVers = (btn) => {
    
    if (btn.id == 'backVers') {
        let btn2 = document.getElementById("fowardVers")
        let array = btn.href.split('-')
        let num = Number(array[1])
        if (num > 1) {

            btn.href = `${array[0]}-${num - 1}`
            btn2.href = `${array[0]}-${num - 1}`
        }
    } else {
        let btn2 = document.getElementById("backVers")
        let array = btn.href.split('-')
        let num = Number(array[1])

            btn.href = `${array[0]}-${num + 1}`
            btn2.href = `${array[0]}-${num + 1}`
    }
}