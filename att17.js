let names = [];
let Finalizar = false;

while (!Finalizar) {
  let name = prompt(" acrescente um nome ou pressione cancelar.");
  if (name != null) {
    names.push(name);
  } else {
    Finalizar = true;
  }
}

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
