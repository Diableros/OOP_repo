export interface Cloneable<T> {
  clone(): T
}

export abstract class ComponentPrototype
  implements Cloneable<ComponentPrototype>
{
  abstract clone(): ComponentPrototype
}

export class Airport {
  name: string
  flights: Flight[]

  constructor(props?: Airport) {
    this.flights = props?.flights?.map(flight => new Flight(flight)) ?? []
    this.name = props?.name ?? ''
  }
}

export class Flight extends ComponentPrototype {
  name: string
  passengers: Passenger[]

  constructor(props?: Flight) {
    super()
    this.name = props?.name ?? ''
    this.passengers =
      props?.passengers.map(passenger => new Passenger(passenger)) ?? []
  }
  clone() {
    const clonePassengers: Passenger[] = this.passengers.map(passenger =>
      passenger.clone()
    )
    return { ...this, passengers: clonePassengers }
  }
}

export class Passenger extends ComponentPrototype {
  name: string
  baggage: Baggage[]
  constructor(props?: Passenger) {
    super()
    this.name = props?.name ?? ''
    this.baggage = props?.baggage?.map(baggage => new Baggage(baggage)) ?? []
  }

  clone() {
    const cloneBaggage = this.baggage.map(baggage => baggage.clone())
    return { ...this, baggage: cloneBaggage }
  }
}

export class Baggage extends ComponentPrototype {
  weight: number = 0
  size: number = 0
  constructor(props?: Baggage) {
    super()
    Object.assign(this, props)
  }

  clone(): Baggage {
    return { ...this }
  }
}
