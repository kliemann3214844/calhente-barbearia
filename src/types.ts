export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  description: string;
  duration: string;
  image: string;
}

export interface BookingState {
  serviceId: string;
  barber: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
}
