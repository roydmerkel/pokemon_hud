import * as pokemonCommonStyles from '../../../../../PokemonCommon.module';

import { FunctionComponent, ElementType, useEffect, useState } from 'react';

const PokemonMoves: FunctionComponent = ({ gamehookLoaded, isConnected, pokemonModelSet, properties, playTime, gen, new_colors, modelClasses, in_battle }) => {
  const [moves, setMoves] = useState([]);
  const [indexNumber, setIndexNumber] = useState(0);
  const [page, setPage] = useState(0);
  var MoveLookup = modelClasses?.MoveLookup;
  var TypeLookup = modelClasses?.TypeLookup;
  var PokemonMovesLookup = modelClasses?.PokemonMovesLookup;
  var TmsLookup = modelClasses?.TmsLookup;
  var HmsLookup = modelClasses?.HmsLookup;
  var MtsLookup = modelClasses?.MtsLookup;
  const ELEMENTS_PER_PAGE = 15;
  const UPDATE_INTERVAL = 10000;

  var pokemonMoves = PokemonMovesLookup?.pokemonTmsLookup?.get(indexNumber?.toString());
  
  useEffect(
    () => { if(properties?.["player.active_pokemon.index_number"]?.value != indexNumber) { setIndexNumber(properties?.["player.active_pokemon.index_number"]?.value); } },
    [properties?.["player.active_pokemon.index_number"]?.value]
  )
  
  useEffect(
	() => { setMoves(GetMoves(pokemonMoves, MoveLookup, PokemonMovesLookup, TmsLookup, HmsLookup, MtsLookup)); setPage(0); },
	[indexNumber]
  )

  function GetMoves(pokemonMoves : Map, MoveLookup : object, PokemonMovesLookup : object, TmsLookup : object, HmsLookup : object, MtsLookup : object) : any[][5]
  {
	var moves = [];
	if(pokemonMoves)
	{
		var levels = Array.from(pokemonMoves?.levelup?.keys()).sort((a, b) => Number(a) - Number(b));
		
		for(var level of levels)
		{
			var move = pokemonMoves?.levelup?.get(level);
			if(Array.isArray(move))
			{
				if(gen == 1)
				{
					if(move.length > 0)
					{
						var mv = MoveLookup?.moveLookup?.get(move[0].toString());
						var mvtype = mv?.type;
						var typestruct = TypeLookup?.typeLookup?.get(mvtype.toString());
						moves.push([ level, mv?.name, typestruct, mv?.power, Math.round(mv?.accuracy * 100 / 255, 0)?.toString() + "%", mv?.pp ])
					}
				}
				else
				{
					for(var curmove of move)
					{
						var mv = MoveLookup?.moveLookup?.get(curmove.toString());
						var mvtype = mv?.type;
						var typestruct = TypeLookup?.typeLookup?.get(mvtype.toString());
						moves.push([ level, mv?.name, typestruct, mv?.power, Math.round(mv?.accuracy * 100 / 255, 0)?.toString() + "%", mv?.pp ])
					}
				}
			}
			else
			{
				var mv = MoveLookup?.moveLookup?.get(move.toString());
				var mvtype = mv?.type;
				var typestruct = TypeLookup?.typeLookup?.get(mvtype.toString());
				moves.push([ level, mv?.name, typestruct, mv?.power, Math.round(mv?.accuracy * 100 / 255, 0)?.toString() + "%", mv?.pp ])
			}
		}
		for(var hm of pokemonMoves?.hms)
		{
			var hmNum = hm;
			var hmMove = HmsLookup?.hmsLookup?.get(hm.toString());
			var mv = MoveLookup?.moveLookup?.get(hmMove.toString());
			var mvtype = mv?.type;
			var typestruct = TypeLookup?.typeLookup?.get(mvtype.toString());
			moves.push([ ("HM" + ((hmNum < 10) ? ("0" + hmNum.toString()) : hmNum.toString())), mv?.name, typestruct, mv?.power, Math.round(mv?.accuracy * 100 / 255, 0)?.toString() + "%", mv?.pp ])
		}
		for(var tm of pokemonMoves?.tms)
		{
			var tmNum = tm;
			var tmMove = TmsLookup?.tmsLookup?.get(tm.toString());
			var mv = MoveLookup?.moveLookup?.get(tmMove.toString());
			var mvtype = mv?.type;
			var typestruct = TypeLookup?.typeLookup?.get(mvtype.toString());
			moves.push([ ("TM" + ((tmNum < 10) ? ("0" + tmNum.toString()) : tmNum.toString())), mv?.name, typestruct, mv?.power, Math.round(mv?.accuracy * 100 / 255, 0)?.toString() + "%", mv?.pp ])
		}
		for(var mt of pokemonMoves?.mts)
		{
			var mtsNum = mt;
			var mtMove = MtsLookup?.mtsLookup?.get(mt.toString());
			var mv = MoveLookup?.moveLookup?.get(mtMove.toString());
			var mvtype = mv?.type;
			var typestruct = TypeLookup?.typeLookup?.get(mvtype.toString());
			moves.push([ "TUTOR", mv?.name, typestruct, mv?.power, Math.round(mv?.accuracy * 100 / 255, 0)?.toString() + "%", mv?.pp ])
		}
		for(var move of pokemonMoves?.egg_moves)
		{
			var mv = MoveLookup?.moveLookup?.get(move.toString());
			var mvtype = mv?.type;
			var typestruct = TypeLookup?.typeLookup?.get(mvtype.toString());
			moves.push([ "EGG", mv?.name, typestruct, mv?.power, Math.round(mv?.accuracy * 100 / 255, 0)?.toString() + "%", mv?.pp ])
		}
		for(var move of pokemonMoves?.event_moves)
		{
			var mv = MoveLookup?.moveLookup?.get(move.toString());
			var mvtype = mv?.type;
			var typestruct = TypeLookup?.typeLookup?.get(mvtype.toString());
			moves.push([ "EVENT", mv?.name, typestruct, mv?.power, Math.round(mv?.accuracy * 100 / 255, 0)?.toString() + "%", mv?.pp ])
		}
		for(var move of pokemonMoves?.trade_moves)
		{
			var mv = MoveLookup?.moveLookup?.get(move.toString());
			var mvtype = mv?.type;
			var typestruct = TypeLookup?.typeLookup?.get(mvtype.toString());
			moves.push([ "TRADE", mv?.name, typestruct, mv?.power, Math.round(mv?.accuracy * 100 / 255, 0)?.toString() + "%", mv?.pp ])
		}
		for(var move of pokemonMoves?.cross_gen_trade_moves)
		{
			var mv = MoveLookup?.moveLookup?.get(move.toString());
			var mvtype = mv?.type;
			var typestruct = TypeLookup?.typeLookup?.get(mvtype.toString());
			moves.push([ "TRADE BACK", mv?.name, typestruct, mv?.power, Math.round(mv?.accuracy * 100 / 255, 0)?.toString() + "%", mv?.pp ])
		}
	}
	return moves;
  }
  
  useEffect(() => {
    const interval = setInterval(() => { console.log("setInerval:"); setPage((page) => { var newPage = (page + 1) % Math.ceil(moves.length / ELEMENTS_PER_PAGE); console.log("newPage: ", newPage); return newPage; }); }, UPDATE_INTERVAL);

    return () => { console.log("clearInterval:"); clearInterval(interval); console.log("reset page to 0."); setPage(0); }
  }, [moves]);
  
  function GetMovesTableRows(moves : string[][5], page : number) : ElementType[]
  {
	var ret = [];
	
	for(var idx = page * ELEMENTS_PER_PAGE; idx < (page + 1) * ELEMENTS_PER_PAGE && idx < moves.length; idx++)
	{
		var move = moves[idx];
		
		ret.push(
		<tr>
		  <td>
			{move[0]}
		  </td>
		  <td>
			{move[1]}
		  </td>
		  <td className={(move[2] != null) ? ((new_colors) ? move[2]?.new_css_class : move[2]?.old_css_class) : `${typeStyles.no_type} ${baseStyles.hide_vertical}`}>
			{move[2]?.name}
		  </td>
		  <td>
			{move[3]}
		  </td>
		  <td>
			{move[4]}
		  </td>
		  <td>
			{move[5]}
		  </td>
		</tr>);
	}
	return ret;
  }
  
  return (
    <table className={`${pokemonCommonStyles.pokemon_moves}`} width="100%">
      <thead>
        <tr>
          <th colSpan={6}>
            LEVEL-UP, HM AND TM MOVES
          </th>
        </tr>
        <tr>
          <th>
            LV.
          </th>
          <th>
            MOVE
          </th>
          <th>
            TYPE
          </th>
          <th>
            PWR
          </th>
          <th>
            ACC
          </th>
          <th>
            PP
          </th>
        </tr>
      </thead>
      <tbody>
        {GetMovesTableRows(moves, page)}
      </tbody>
    </table>
  );
};

export default PokemonMoves;
