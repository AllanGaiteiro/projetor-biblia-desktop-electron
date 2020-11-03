


var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {

    var texto = this.responseText
    var capitulos = texto.split('»GÊNESIS')
    for (var i = 0; i < capitulos.length; i++) {
      capitulos[i] = capitulos[i].split(/\d+/);
    }

    let h1 = document.createElement('h1')
    h1.innerText = `Genesis  `
    document.getElementById('texte').appendChild(h1)
    for (var i = 1; i < capitulos.length; i++) {
      console.log('teste '+capitulos.length)
      for (var z = 1; z < capitulos[i].length; z++) {
        console.log('teste2 '+capitulos[i].length)
        let p = document.createElement('p')
        p.innerText = `Genesis ${i} : ${z}\n ${capitulos[i][z]}\n`
        document.getElementById('texte').appendChild(p)
      }
    }

  }
}

function openTxt(p) {
  alert('funcionado')
  xhttp.open("GET", `../database/biblia/${p}.txt`, true);
  xhttp.send();

}
