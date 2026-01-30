import React from 'react'

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
    <div>{character_json.data.name}</div>    
  )
}
