//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
//“Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”.

let info = {
  info1: {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  },
  info2: {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  }
}

for (let chave in info.info1) {
  if (info.info1.recorrente === "Sim" && info.info2.recorrente === "Sim" && chave === "recorrente"){
    console.log("Ambos Recorrentes");
  } else {
    console.log(info.info1[chave] + " e " + info.info2[chave]);
  }
}
