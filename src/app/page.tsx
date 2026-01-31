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
  const characters_data = await fetch(`https://api.jikan.moe/v4/anime/11061/characters`);
  const characters_json: CharacterResponse = await characters_data.json();

  return (
    <div className="hxh-title grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
      {characters_json.data.map((item) => (
        <div
          key={item.character.mal_id}
          className="
            bg-(--color-contenedor) flex flex-col p-3 rounded-2xl border-2 border-transparent hover:border-(--negro)
            shadow-[0_0_10px_var(--negro)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_16px_var(--negro)]">
          <Link href={`/${item.character.mal_id}`} className="w-full h-full">
            <Image
              src={item.character.images.webp.image_url}
              alt={item.character.name}
              width={200}
              height={200}
              className="object-cover w-full h-fit rounded-2xl"
            />
            <p className="font-semibold">{item.character.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
