import PokemonLocationEntity from "../../../pokemon-list/model/pokemon-location-entity";

export async function fetchPokemonLocation(LocationUrl: string): Promise<PokemonLocationEntity[]>{
    const locations: PokemonLocationEntity[] = [];

    console.log(LocationUrl);
    const response = await fetch(LocationUrl);
    const data = await response.json();

    data.slice(0,2).map(location => {
        locations.push(new PokemonLocationEntity(location.location_area.name))
    })

    return locations;
}