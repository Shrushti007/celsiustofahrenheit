function convert(){
    let valueCelsius = document.querySelector("#celsius").value
    let formula = (valueCelsius * 1.8) + 32
    let result = document.getElementById("result")

    result.innerHTML = "" + formula.toFixed(1) + "ºF"
}
