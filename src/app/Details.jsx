import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"
import { tipos } from "../utils/helpers"

function Details() {
  const params = useParams()
  const [pokemon, setPokemon] = useFetch()

  useEffect(() => {
    if (params.name) getPokemon()
  },[params.name])

  const getPokemon = () => {
    setPokemon(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  }

  const types = pokemon?.types.map(type => type.type.name)

  return (
    <div>
      <Link to="/pokedex">{"←"} Volver</Link>
      <div>
        <div>
          <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt={pokemon?.name} />
        </div>
        <div>
          <span># {pokemon?.id?.toString().padStart(3, "0")}</span>
          <h2>{pokemon?.name}</h2>

          <div>
            <span>
              <span>Peso</span>
              {pokemon?.weight}
            </span>

            <span>
              <span>Altura</span>
              {pokemon?.height}
            </span>
          </div>

          <div>
            <div>
              <h3>Tipo</h3>
              <div>
                {types?.map(type => (
                  <span key={type}>{tipos[type]}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>Habilidades</h3>
              <div>
              {pokemon?.abilities?.map(data => (
                  <span key={data.ability.name}>{data.ability.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Details }