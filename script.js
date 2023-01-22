//const mensagem = "Hello"
//alert(mensagem + " World!")

const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  //alert('hello world!')
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso❗")
    return
  }
  alert("Dia adicionado com sucesso✅")

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  //console.log(nlwSetup.data)
}

// const data = {
//   run: ["02-01", "02-02", "02-06"],
//   water: ["02-04", "02-05"],
//   sleep: ["02-03", "02-07", "02-08", "02-09"],
//   fun: ["02-04"],
// }
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
