function mostrarDivs() {
    var radios = document.getElementsByName('grupo');
    var divs = document.getElementsByClassName('divs');
    
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        for (var j = 0; j < divs.length; j++) {
          divs[j].style.display = 'none';
        }
        var valor = radios[i].value;
        var divsSelecionadas = document.getElementsByClassName(valor);
        for (var k = 0; k < divsSelecionadas.length; k++) {
          divsSelecionadas[k].style.display = 'inline-block';
        }
        break;
      }
    }
}