import React from "react";

import { Card } from "antd";
import { Vehicle } from "../../models/Vehicle";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <Card title={vehicle.name} style={{ width: 300 }}>
      <ul>
        <li>
          <span>Модель: </span>
          <span>{vehicle.model}</span>
        </li>
        <li>
          <span>Производитель: </span>
          <span>{vehicle.manufacturer}</span>
        </li>
        <li>
          <span>Стоимость: </span>
          <span>{vehicle.cost_in_credits}</span>
        </li>
        <li>
          <span>Длина: </span>
          <span>{vehicle.length}</span>
        </li>
        <li>
          <span>Максимальная скорость: </span>
          <span>{vehicle.max_atmosphering_speed}</span>
        </li>
        <li>
          <span>Экипаж: </span>
          <span>{vehicle.crew}</span>
        </li>
        <li>
          <span>Пассажиры: </span>
          <span>{vehicle.passengers}</span>
        </li>
        <li>
          <span>Грузоподъемность: </span>
          <span>{vehicle.cargo_capacity}</span>
        </li>
        <li>
          <span>Расходные материалы: </span>
          <span>{vehicle.consumables}</span>
        </li>
        <li>
          <span>Класс: </span>
          <span>{vehicle.vehicle_class}</span>
        </li>
      </ul>
    </Card>
  );
};
