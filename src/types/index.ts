export interface Carrier {
  id: number
  code: string
  imgUrl: string
  name: string
  displayCode: string
}

export interface CarrierRaw {
  Id: number
  Code: string
  Name: string
  ImageUrl: string
  DisplayCode: string
}

export interface FilteringOptions {
  airlines: Carrier[]
  airlineCodes: number[]
  durationRange: Range
  priceRange: Range
  stops: StopOptions
}

export interface FiltersState {
  maxDuration: number
  maxPrice: number
}

export interface Flight {
  time: string
  airportCode: string
  airportName?: string
}

export interface FormattedData {
  filteringOptions: FilteringOptions
  itineraries: Itinerary[]
}

export interface Itinerary {
  destination: Flight
  carriers: Carrier[]
  duration: number
  id: string
  legs: Leg[]
  lowestPrice: number
  origin: Flight
  pricingOptions: PricingOption[]
  stops: number
}

export interface Leg {
  arrival: Flight
  carrier: string
  departure: Flight
  duration: number
  flightCode: string
}

export interface PricingOption {
  agent: string
  price: number
}

export interface Range {
  max: number
  min: number
}

export interface StopOptions {
  direct: number
  singleStop: number
  multipleStops: number
}