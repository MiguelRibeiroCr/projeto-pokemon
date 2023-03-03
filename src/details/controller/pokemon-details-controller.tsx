
import PokemonEntity from "../../pokemon/model/pokemon-entity";
import { useSearchParams } from "react-router-dom";
import PokemonDetailsView from "../view";
import React from "react";

interface Props{

}
interface States{
    pokemon:PokemonEntity;
}

export default class PokemonDetailsController extends React.Component<Props,States>{
    constructor(props:Props){
        super (props);
        this.state ={
            pokemon: undefined
        }
    }
    
    componentDidMount(): void{
        this.getPokemonData();
    }   
        
    private getPokemonData(): void {

        const params = new URLSearchParams(window.location.search);
        var data = JSON.parse(params.get('pokemon'));
        this.setState({pokemon: data as PokemonEntity});
    
}

    render(){
        return(
        <PokemonDetailsView pokemon={this.state.pokemon}/>
        )
    }
}