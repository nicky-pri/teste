[
{
    nome: "O Senhor dos Anéis",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/8/87/The_Lord_of_the_Rings_poster.jpg",
    trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4"
  },
  {
    nome: "Harry Potter",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/6/6e/Harry_Potter_Pedra_Filosofal_2001.jpg",
    trailer: "https://www.youtube.com/watch?v=VyHV0BRtdxo"
  },
  {
    nome: "Vingadores",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/f/f9/TheAvengers2012Poster.jpg",
    trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8"
  },
  {
    nome: "Titanic",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/2/22/Titanic_poster.jpg",
    trailer: "https://www.youtube.com/watch?v=CHekzSiZjrY"
  },
  {
    nome: "Matrix",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg",
    trailer: "https://www.youtube.com/watch?v=m8e-FF8MsqU"
  }
];

const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("input", function () {
  const termo = this.value.toLowerCase();
  resultsDiv.innerHTML = "";

  const filtrados = filmes.filter(filme =>
    filme.nome.toLowerCase().includes(termo)
  );

  if (filtrados.length === 0) {
    resultsDiv.innerHTML = "<p>Nenhum filme encontrado.</p>";
    return;
  }

  filtrados.forEach(filme => {
    const card = document.createElement("div");
    card.className = "filme";

    card.innerHTML = `
      <img src="${filme.imagem}" alt="Cartaz de ${filme.nome}">
      <h3>${filme.nome}</h3>
      <a href="${filme.trailer}" target="_blank">Ver Trailer</a>
    `;

    resultsDiv.appendChild(card);
  });
});
