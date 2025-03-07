const players = [
  { name: "Mohamed Salah", age: 31, country: "Egypt" },
    { name: "Kylian Mbappé", age: 25, country: "France" },
    { name: "Erling Haaland", age: 23, country: "Norway" },
    { name: "Kevin De Bruyne", age: 32, country: "Belgium" },
    { name: "Neymar Jr", age: 32, country: "Brazil" },
    { name: "Robert Lewandowski", age: 35, country: "Poland" },
    { name: "Virgil van Dijk", age: 32, country: "Netherlands" },
    { name: "Harry Kane", age: 30, country: "England" },
    { name: "Luka Modrić", age: 38, country: "Croatia" },
    { name: "Cristiano Ronaldo", age: 39, country: "Portugal" }
  ];
  
  const table = document.querySelector("#player-table-body");
  
  function footballRandom() {
    const random = Math.floor(Math.random() * players.length);
    const player = players[random];
  
    const newFootball = document.createElement("tr");
    newFootball.innerHTML = `
      <td>${player.name}</td>
      <td>${player.age}</td>
      <td>${player.country}</td>
    `;
  
    table.appendChild(newFootball);
  }
  