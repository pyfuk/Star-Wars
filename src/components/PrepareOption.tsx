import { UseAxiosGet } from "../utils/HttpReqests";

export const prepareOption = (input: string) => {
  const response = UseAxiosGet(input);

  let options = [
    ...response.data.films.map((film) => {
      return {
        value: film.title,
        object: film,
        type: "film",
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{film.title}</span>
            <span>фильм</span>
          </div>
        ),
      };
    }),
    ...response.data.vehicle.map((vehicle) => {
      return {
        value: vehicle.name,
        object: vehicle,
        type: "vehicle",
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{vehicle.name}</span>
            <span>транспорт</span>
          </div>
        ),
      };
    }),
    ...response.data.people.map((people) => {
      return {
        value: people.name,
        type: "people",
        object: people,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{people.name}</span>
            <span>чел</span>
          </div>
        ),
      };
    }),
    ...response.data.planets.map((planets) => {
      return {
        value: planets.name,
        type: "planets",
        object: planets,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{planets.name}</span>
            <span>планета</span>
          </div>
        ),
      };
    }),
    ...response.data.species.map((species) => {
      return {
        value: species.name,
        type: "species",
        object: species,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{species.name}</span>
            <span>вид</span>
          </div>
        ),
      };
    }),
    ...response.data.starships.map((starships) => {
      return {
        value: starships.name,
        type: "starships",
        object: starships,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{starships.name}</span>
            <span>звездолет</span>
          </div>
        ),
      };
    }),
  ];

  return options;
};
