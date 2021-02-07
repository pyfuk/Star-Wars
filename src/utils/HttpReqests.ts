import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Film } from "../models/Film";
import { People } from "../models/People";
import { Planet } from "../models/Planet";
import { Species } from "../models/Species";
import { Starship } from "../models/Starship";
import { Vehicle } from "../models/Vehicle";

interface ServerData {
  count: number;
  next: string;
  previous: string;
  results: Film[] | People[] | Planet[] | Species[] | Starship[] | Vehicle[];
}

export interface ResponseAxiosType {
  loading: boolean;
  data: {
    films: Film[];
    people: People[];
    planets: Planet[];
    species: Species[];
    starships: Starship[];
    vehicle: Vehicle[];
  };
  error: boolean;
}

export const UseAxiosGet = (searchValue: string) => {
  const [response, setResponse] = useState<ResponseAxiosType>({
    loading: false,
    data: {
      films: [],
      people: [],
      planets: [],
      species: [],
      starships: [],
      vehicle: [],
    },
    error: false,
  });

  useEffect(() => {
    setResponse({
      loading: true,
      data: {
        films: [],
        people: [],
        planets: [],
        species: [],
        starships: [],
        vehicle: [],
      },
      error: false,
    });
    let filmsUrl = `https://swapi.dev/api/vehicles/?search=${searchValue}`;
    let peopleUrl = `https://swapi.dev/api/people/?search=${searchValue}`;
    let planetsUrl = `https://swapi.dev/api/planets/?search=${searchValue}`;
    let speciesUrl = `https://swapi.dev/api/species/?search=${searchValue}`;
    let starshipsUrl = `https://swapi.dev/api/starships/?search=${searchValue}`;
    let vehiclesUrl = `https://swapi.dev/api/vehicles/?search=${searchValue}`;

    const requestFilms = axios.get(filmsUrl);
    const requestPeople = axios.get(peopleUrl);
    const requestPlanets = axios.get(planetsUrl);
    const requestSpecies = axios.get(speciesUrl);
    const requestStarships = axios.get(starshipsUrl);
    const requestVehicles = axios.get(vehiclesUrl);

    axios
      .all<AxiosResponse<ServerData>>([
        requestFilms,
        requestPeople,
        requestPlanets,
        requestSpecies,
        requestStarships,
        requestVehicles,
      ])
      .then(
        axios.spread((...responses) => {
          const responseFilms = responses[0].data.results as Film[];
          const responsePeople = responses[1].data.results as People[];
          const responesPlanets = responses[2].data.results as Planet[];
          const responesSpecies = responses[3].data.results as Species[];
          const responesStarships = responses[4].data.results as Starship[];
          const responesVehicles = responses[5].data.results as Vehicle[];

          setResponse({
            loading: false,
            data: {
              films: responseFilms,
              people: responsePeople,
              planets: responesPlanets,
              species: responesSpecies,
              starships: responesStarships,
              vehicle: responesVehicles,
            },
            error: false,
          });
        })
      )
      .catch((errors) => {
        setResponse({
          loading: false,
          data: {
            films: [],
            people: [],
            planets: [],
            species: [],
            starships: [],
            vehicle: [],
          },
          error: true,
        });
        console.log(errors);
      });
  }, [searchValue]);

  return response;
};
