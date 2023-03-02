import { useEffect, useState } from "react";
import { getPokemonColorByType } from "../../utils/pokemon-colors-util";
import PokemonAbilityEntity from "../../pokemon-list/model/pokemon-ability-entity";
import PokemonEntity from "../../pokemon-list/model/pokemon-entity";
import React from "react";
import { Link } from "react-router-dom";
import PokemonLocationEntity from "../../pokemon-list/model/pokemon-location-entity";
import PokemonTypeEntity from "../../pokemon-list/model/pokemon-type-entity";
import { Container, PokemonStyle } from "./style";

interface Props{
    pokemon: PokemonEntity
}

export default class PokemonComponent extends React.Component<Props>{

    render(){

        const{pokemon} = this.props;

        if(pokemon !== undefined){
            return (
                <Container>
                    <PokemonStyle color={getPokemonColorByType(pokemon.types[0].name)}>
                        <Link to={{pathname:'/pokemon-details/', search: `?pokemon=${JSON.stringify(pokemon)}`}}>
                            <img src={`${pokemon.imageUrl}`} alt={pokemon.name}/>
                        </Link>
                        <span>{pokemon.name.toUpperCase()}</span>
                    </PokemonStyle>
                </Container>
            )
        }else{
            return(
                <div></div>
            )
        } 
    }   
}