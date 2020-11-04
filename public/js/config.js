tamanhoFont = (tm) => {
    var p = document.getElementsByTagName('p')
    console.log(p.length)
    for (const i in p) {
        p[i].style.fontSize = `${Number(tm.value)}px`
    }
}