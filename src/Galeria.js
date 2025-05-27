import Profile from "./Profile";

export default function Galeria() {
  const pessoas = [
    {
      id: 1,
      name: "Ada Lovelace",
      profession: "Matemática",
      imageUrl: "https://i.imgur.com/MK3eW3Am.jpg",
    },
    {
      id: 2,
      name: "Alan Turing",
      profession: "Cientista da Computação",
      imageUrl: "https://i.imgur.com/1bX5QH6.jpg",
    },
    {
      id: 3,
      name: "Marie Curie",
      profession: "Física e Química",
      imageUrl: "https://i.imgur.com/sZlktY7.jpg",
    },
  ];

  return (
    <div>
      <h2>Galeria de Perfis</h2>
      <div className="galeria">
        {pessoas.map((pessoa) => (
          <Profile
            key={pessoa.id}
            name={pessoa.name}
            imageUrl={pessoa.imageUrl}
            profession={pessoa.profession}
          />
        ))}
      </div>
    </div>
  );
}
