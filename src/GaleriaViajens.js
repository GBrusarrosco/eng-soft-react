import Profile from "./Profile";

export default function GalleryViagens() {
  const viagens = [
    {
      id: 1,
      name: "Paris",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg",
      profession: "Vista noturna da Torre Eiffel",
    },
    {
      id: 2,
      name: "Londres",
      imageUrl: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600",
      profession: "Big Ben e o Parlamento de Londres",
    },
    {
      id: 3,
      name: "Nova York",
      imageUrl: "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=600",
      profession: "Ponte do Brooklyn ao pôr do sol",
    },
    {
      id: 4,
      name: "Veneza",
      imageUrl: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
      profession: "Canais de Veneza com gôndolas",
    },
    {
      id: 5,
      name: "Tóquio",
      imageUrl: "https://images.pexels.com/photos/2041552/pexels-photo-2041552.jpeg?auto=compress&cs=tinysrgb&w=600",
      profession: "Paisagem urbana de Tóquio à noite",
    },
  ];  

  return (
    <div>
      <h3>Galeria de Viagens</h3>
      <div className="galeria">
        {viagens.map((v) => (
          <Profile
            key={v.id}
            name={v.name}
            imageUrl={v.imageUrl}
            profession={v.profession}
          />
        ))}
      </div>
    </div>
  );
}
