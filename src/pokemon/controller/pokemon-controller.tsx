import React from "react";
import PokemonEntity from "../../pokemon-list/model/pokemon-entity";
import PokemonTypeEntity from "../../pokemon-list/model/pokemon-type-entity";
import PokemonAbilityEntity from "../../pokemon-list/model/pokemon-ability-entity";
import { fetchPokemonLocation } from "../model/services/pokemon-location-fetch-service";
import { fetchPokemons } from "../../pokemon-list/model/services/fetch-pokemons-service";
import PokemonComponent from "../view/pokemon-component";

interface Props{
    pokemonPromise: any;
}

interface State{
    pokemon: PokemonEntity;
}


export default class PokemonController extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            pokemon: undefined
        }
    }

    componentDidMount(): void{
        const {pokemonPromise} = this.props;
        console.log('Did Mount',pokemonPromise);
        this.getPokemonByPromise(pokemonPromise);
    }

    getPokemonByPromise(promisedPokemon: Promise<any>){
        promisedPokemon
        .then(response => response.json())
        .then(async data => {
            if(data.id !== undefined){                

                const pokemonEntity = new PokemonEntity(
                    data.id, 
                    data.name, 
                    this.getPokemonTypes(data), 
                    await fetchPokemonLocation(data.location_area_encounters), 
                    this.getPokemonAbilities(data), 
                    data.base_experience,
                    ''
                );               

                this.setState({pokemon: pokemonEntity});

            }
        })
    }

    private getPokemonAbilities(data: any) {
        var pokemonAbilities: PokemonAbilityEntity[] = [];
        data.abilities.slice(0, 2).map(pokemonAbility => {
            pokemonAbilities.push(new PokemonAbilityEntity(pokemonAbility.ability.name));
        });
        return pokemonAbilities;
    }

    private getPokemonTypes(data: any) {
        var pokemonTypes: PokemonTypeEntity[] = [];
        data.types.slice(0, 2).map(pokemonType => {
            pokemonTypes.push(new PokemonTypeEntity(pokemonType.type.name));
        });
        return pokemonTypes;
    }

    render(){
        console.log(this.state.pokemon);
        return <PokemonComponent pokemon = {this.state.pokemon}/>
    }

}