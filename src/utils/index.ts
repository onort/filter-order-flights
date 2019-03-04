/* tslint:disable prefer-template */
import {
  Carrier,
  CarrierRaw,
  FilteringOptions,
  Flight,
  FormattedData,
  Itinerary,
  Leg,
  PricingOption,
  Range,
  StopOptions,
  StopsType
} from "../types"

export const getFilters = (data: any[]): FilteringOptions => {
  const filteringOptions: FilteringOptions = {
    airlines: [],
    durationRange: { max: 0, min: 0 },
    priceRange: { max: 0, min: 0 },
    stops: { direct: 0, singleStop: 0, multipleStops: 0 }
  }
  data.forEach(itinerary => {
    filteringOptions.stops = getStops(filteringOptions.stops, itinerary)
    filteringOptions.priceRange = getPriceRange(
      filteringOptions.priceRange,
      itinerary
    )
    filteringOptions.durationRange = getDurationRange(
      filteringOptions.durationRange,
      itinerary
    )
    filteringOptions.airlines = getAirlinesData(
      filteringOptions.airlines,
      itinerary
    )
  })

  return filteringOptions
}

const getAirlinesData = (airlines: Carrier[], itinerary: any) => {
  itinerary.OutboundLegId.Segments.forEach((segment: any) => {
    if (!airlines.find(airline => airline.id === segment.Carrier.Id)) {
      airlines.push(convertCarrierData(segment.Carrier))
    }
  })
  return airlines
}

const getStops = (stopFilters: StopOptions, itinerary: any): StopOptions => {
  if (itinerary.Filter.Stops === 0) stopFilters.direct += 1
  else if (itinerary.Filter.Stops === 1) stopFilters.singleStop += 1
  else stopFilters.multipleStops += 1
  return stopFilters
}

const getPriceRange = (priceRange: Range, itinerary: any): Range => {
  if (priceRange.max === 0 && priceRange.min === 0) {
    priceRange.max = itinerary.Order.lowestPrice
    priceRange.min = itinerary.Order.lowestPrice
    return priceRange
  }
  if (priceRange.max < itinerary.Order.lowestPrice) {
    priceRange.max = itinerary.Order.lowestPrice
  }
  if (priceRange.min > itinerary.Order.lowestPrice) {
    priceRange.min = itinerary.Order.lowestPrice
  }
  return priceRange
}

const getDurationRange = (durationRange: Range, itinerary: any): Range => {
  if (durationRange.max === 0 && durationRange.min === 0) {
    durationRange.max = itinerary.MergedLeg.Duration
    durationRange.min = itinerary.MergedLeg.Duration
    return durationRange
  }
  if (durationRange.max < itinerary.MergedLeg.Duration) {
    durationRange.max = itinerary.MergedLeg.Duration
  }
  if (durationRange.min > itinerary.MergedLeg.Duration) {
    durationRange.min = itinerary.MergedLeg.Duration
  }
  return durationRange
}

export const getItineraries = (data: any[]): Itinerary[] => {
  return data.map(
    (itinerary: any): Itinerary => {
      const destination: Flight = {
        airportCode: itinerary.OutboundLegId.DestinationStation.Code,
        time: itinerary.OutboundLegId.Arrival
      }
      const origin: Flight = {
        airportCode: itinerary.OutboundLegId.OriginStation.Code,
        time: itinerary.OutboundLegId.Departure
      }
      const carriers: Carrier[] = itinerary.MergedLeg.Carriers.map(
        convertCarrierData
      )
      const duration: number = itinerary.MergedLeg.Duration
      const id: string = itinerary.OutboundLegId.Id
      const legs: Leg[] = itinerary.OutboundLegId.Segments.map(getLegData)
      const lowestPrice: number = itinerary.Order.lowestPrice
      const pricingOptions: PricingOption[] = itinerary.PricingOptions.map(
        getPricingOption
      )
      const stops: number = itinerary.Filter.Stops
      const stopsType: StopsType = getStopsType(stops)
      return {
        carriers,
        destination,
        duration,
        id,
        legs,
        lowestPrice,
        origin,
        pricingOptions,
        stops,
        stopsType
      }
    }
  )
}

const getLegData = (leg: any): Leg => {
  const {
    ArrivalDateTime,
    Carrier: { DisplayCode, Name: carrierName },
    DepartureDateTime,
    DestinationStation: { Code: destinationCode, Name: destinationName },
    Duration,
    FlightNumber,
    OriginStation: { Code: originCode, Name: originName }
  } = leg
  const departure: Flight = {
    airportCode: originCode,
    airportName: originName,
    time: DepartureDateTime
  }
  const arrival: Flight = {
    airportCode: destinationCode,
    airportName: destinationName,
    time: ArrivalDateTime
  }
  const flightCode: string = `${DisplayCode} ${FlightNumber}`
  return {
    arrival,
    carrier: carrierName,
    departure,
    duration: Duration,
    flightCode
  }
}

const getPricingOption = (option: any): PricingOption => {
  const { Agents, Price } = option
  return { agent: Agents[0].Name, price: Price }
}

const getStopsType = (stops: number): StopsType => {
  if (stops === 0) return StopsType.direct
  else if (stops === 1) return StopsType.singleStop
  else return StopsType.multipleStops
}

const convertCarrierData = (carrier: CarrierRaw): Carrier => ({
  code: carrier.Code,
  displayCode: carrier.DisplayCode,
  id: carrier.Id,
  imgUrl: carrier.ImageUrl,
  name: carrier.Name
})

export const formatData = (data: any[]): FormattedData => {
  const filteringOptions: FilteringOptions = getFilters(data)
  const itineraries: Itinerary[] = getItineraries(data)
  return { filteringOptions, itineraries }
}

export const minsToString = (mins: number) => {
  const hours = Math.floor(mins / 60).toFixed(0)
  const minutes = mins % 60
  return `${mins / 60 >= 1 ? hours + " saat " : ""}${
    minutes > 0 ? minutes + " dakika" : ""
  }`
}

export const orderByPrice = (data: Itinerary[], direction: 1 | -1) => {
  return data.sort((a, b) => direction * (a.lowestPrice - b.lowestPrice))
}

export const orderByDate = (data: Itinerary[], direction: 1 | -1) => {
  return data.sort(
    (a, b) =>
      direction *
      (new Date(a.origin.time).getTime() - new Date(b.origin.time).getTime())
  )
}
