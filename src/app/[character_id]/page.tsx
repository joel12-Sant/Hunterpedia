import Image from 'next/image';

interface characterProps {
  params: {
    character_id: string
  }
};

export default async function CharacterPage(props: characterProps) {
  const { character_id } = await props.params;
  const character_data = await fetch(`https://api.jikan.moe/v4/characters/${character_id}`)
  const character_json = await character_data.json();
  return (
    <div className='w-full flex flex-col min-h-[calc(100vh-76px)] md:min-h-[calc(100vh-82px)]'>
      <div className="relative flex-1 min-h-80">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-(--color-contenedor) z-10" />

        <Image
          src={character_json.data.images.webp.image_url}
          alt={`imagen de ${character_json.data.name}`}
          fill priority sizes="100vw" className="object-cover" />

        <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-12 pb-10">
          <h2 className="text-5xl md:text-7xl tracking-wider drop-shadow-2xl mb-2 font-bangers text-(--color-texto)">
            {character_json.data.name}
          </h2>

          <p className="text-xl md:text-3xl opacity-90 font-bangers text-(--color-texto)">
            {character_json.data.name_kanji}
          </p>
        </div>
      </div>

      <section className="w-full bg-(--color-contenedor)">
        <div className="w-full px-6 md:px-12 py-10">
          <h3 className="text-2xl md:text-3xl mb-4 tracking-wide font-bangers text-(--color-boton)">
            Biography
          </h3>

          <div className="rounded-2xl p-6 md:p-8 bg-black/30">
            <p className="leading-relaxed text-base md:text-lg text-(--color-texto) whitespace-pre-line">
              {character_json.data.about || "No biography available."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
