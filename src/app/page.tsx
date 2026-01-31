import Image from "next/image";
import Link from "next/link";

type CharacterResponse = {
  data: {
    character: {
      mal_id: number;
      name: string;
      images: {
        jpg: { image_url: string };
        webp: { image_url: string };
      };
    };
  }[];
};

export default async function Home() {
  const characters_data = await fetch(`https://api.jikan.moe/v4/anime/11061/characters`)
  const characters_json:CharacterResponse = await characters_data.json();
  return (
    <div className="hxh-title grid grid-cols-5 gap-3 bg-(--color-fondo)">
      {characters_json.data.map((item) => (
        <Link href={`/${item.character.mal_id}`} key={item.character.mal_id} className="bg-(--color-contenedor)">
          <div>
            {item.character.name}
            <Image src={item.character.images.webp.image_url} alt="imagen" width={200} height={200}/>
          </div>
        </Link>
      ))}
    </div>
  );
}
