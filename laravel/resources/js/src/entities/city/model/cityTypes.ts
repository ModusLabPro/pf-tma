interface ITimeInterval {
  from: string;
  to: string;
}

export interface IDeliveryZone {
  delivery_price: number;
  description?: string;
  id: number;
  min_order_sum: number;
  name: string;
  time_intervals: ITimeInterval[];
}

export interface ICity {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  is_has_pickup: boolean;
  pickup_bonus_points: boolean;
  delivery_zones: IDeliveryZone[];
}
