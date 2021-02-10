import React from "react";

import { Card } from "antd";
import { Starship } from "../../models/Starship";

interface StarshipCardProps {
  starship: Starship;
}

export const StarshipCard = ({ starship }: StarshipCardProps) => {
  return (
    <Card title={starship.name} style={{ width: 300 }}>
      <ul>
        <li>
          <span>Модель: </span>
          <span>{starship.model}</span>
        </li>
        <li>
          <span>Производитель: </span>
          <span>{starship.manufacturer}</span>
        </li>
        <li>
          <span>Стоимость: </span>
          <span>{starship.cost_in_credits}</span>
        </li>
        <li>
          <span>Длина: </span>
          <span>{starship.length}</span>
        </li>
        <li>
          <span>Максимальная скорость: </span>
          <span>{starship.max_atmosphering_speed}</span>
        </li>
        <li>
          <span>Экипаж: </span>
          <span>{starship.crew}</span>
        </li>
        <li>
          <span>Пассажиры: </span>
          <span>{starship.passengers}</span>
        </li>
        <li>
          <span>Грузоподъемность: </span>
          <span>{starship.cargo_capacity}</span>
        </li>
        <li>
          <span>Расходные материалы: </span>
          <span>{starship.consumables}</span>
        </li>
        <li>
          <span>Рейтинг гипердвигателя: </span>
          <span>{starship.hyperdrive_rating}</span>
        </li>
        <li>
          <span>MGLT: </span>
          <span>{starship.MGLT}</span>
        </li>
        <li>
          <span>Класс: </span>
          <span>{starship.starship_class}</span>
        </li>
      </ul>
    </Card>
  );
};
