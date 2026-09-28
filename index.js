let nomeHeroi = "Mario";
let experienciaHeroi = 4000;
let nivel = "";

if (experienciaHeroi <= 1000) {
  nivel = "Ferro";
} else if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000) {
  nivel = "Bronze";
} else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
  nivel = "Prata";
} else if (experienciaHeroi >= 5001 && experienciaHeroi <= 7000) {
  nivel = "Ouro";
} else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
  nivel = "Platina";
} else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
  nivel = "Ascendente";
} else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
  nivel = "Imortal";
} else if (experienciaHeroi >= 10001) {
  nivel = "Radiante";
} else {
  nivel = "Não identificado";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);