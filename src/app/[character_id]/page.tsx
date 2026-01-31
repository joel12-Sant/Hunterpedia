import React from 'react'
import Image from 'next/image';

interface characterProps{
  params:{
    character_id : string
  }
};

export default async function CharacterPage(props: characterProps) {
  const {character_id} = await props.params;
  const character_data = await fetch(`https://api.jikan.moe/v4/characters/${character_id}`)
  const character_json = await character_data.json();
  return (
    <div className="">
        <Image src={character_json.data.images.webp.image_url} alt={`imagen de ${character_json.data.name}`} width={200} height={200}></Image>
        <h1 className='hxh-title'>{character_json.data.name}</h1>
        <h1 className='hxh-title'>{character_json.data.name_kanji}</h1>
        <p> {character_json.data.about}</p>
    </div>    
  )
}
