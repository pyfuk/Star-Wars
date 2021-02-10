import React from "react";

import { Card } from "antd";
import { Planet } from "../../models/Planet";

interface PlanetCardProps {
  planet: Planet;
}

export const PlanetCard = ({ planet }: PlanetCardProps) => {
  return (
    <Card title={planet.name} style={{ width: 300 }}>
      <ul>
        <li>
          <span>Переод вращения: </span>
          <span>{planet.rotation_period}</span>
        </li>
        <li>
          <span>Орбитальный период: </span>
          <span>{planet.orbital_period}</span>
        </li>
        <li>
          <span>Диаметр: </span>
          <span>{planet.diameter}</span>
        </li>
        <li>
          <span>Климат: </span>
          <span>{planet.climate}</span>
        </li>
        <li>
          <span>Сила тяжести: </span>
          <span>{planet.gravity}</span>
        </li>
        <li>
          <span>Местность: </span>
          <span>{planet.terrain}</span>
        </li>
        <li>
          <span>Поверхностная вода: </span>
          <span>{planet.surface_water}</span>
        </li>
        <li>
          <span>Население: </span>
          <span>{planet.population}</span>
        </li>
      </ul>
    </Card>
  );
};
