/* tslint:disable */
import mockData from "../data/mockData.json"

// TODO: Move types to antoher file

interface Range {
  max: number
  min: number
}

interface StopOptions {
  direct: number
  singleStop: number
  multipleStops: number
}

interface FilteringOptions {
  airlines: Carrier[]
  airlineCodes: number[]
  durationRange: Range
  priceRange: Range
  stops: StopOptions
}

interface CarrierRaw {
  Id: number
  Code: string
  Name: string
  ImageUrl: string
  DisplayCode: string
}

interface Carrier {
  id: number
  code: string
  imgUrl: string
  name: string
  displayCode: string
}

interface Departure {
  time: string
  airportCode: string
}

interface Arrival {
  time: string
  airportCode: string
}

interface Itinerary {
  arrival: Arrival
  departure: Departure
  duration: number
  carriers: Carrier[]
  stops: number
}

export const getFilters = (data: any[]): FilteringOptions => {
  const filteringOptions: FilteringOptions = {
    airlineCodes: [],
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
    filteringOptions.airlineCodes = getAirlines(
      filteringOptions.airlineCodes,
      itinerary
    )
  })

  return filteringOptions
}

const getAirlines = (airlines: any, itinerary: any) => {
  itinerary.Filter.Carriers.forEach((carrier: number) => {
    if (!airlines.includes(carrier)) airlines.push(carrier)
  })
  return airlines
}

const getAirlineData = (codeNumber: number) => {
  // get airline data from Itineraries
  const carriers: CarrierRaw[] = mockData.result.Carriers
  const airlineRawData: CarrierRaw | undefined = carriers.find(
    el => el.Id === codeNumber
  )
  if (airlineRawData) {
    const {
      Id: id,
      Code: code,
      DisplayCode: displayCode,
      ImageUrl: imgUrl,
      Name: name
    } = airlineRawData
    return { id, code, displayCode, imgUrl, name }
  }
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
      const departure: Departure = {
        time: itinerary.OutboundLegId.Departure,
        airportCode: itinerary.OutboundLegId.OriginStation.Code
      }
      const arrival: Arrival = {
        time: itinerary.OutboundLegId.Arrival,
        airportCode: itinerary.OutboundLegId.DestinationStation.Code
      }
      const duration: number = itinerary.MergedLeg.Duration
      const stops: number = itinerary.Filter.Stops
      const carriers: Carrier[] = itinerary.MergedLeg.Carriers.map(
        convertCarrierData
      )
      return { arrival, departure, duration, carriers, stops }
    }
  )
}

const convertCarrierData = (carrier: CarrierRaw): Carrier => ({
  id: carrier.Id,
  code: carrier.Code,
  imgUrl: carrier.ImageUrl,
  name: carrier.Name,
  displayCode: carrier.DisplayCode
})

export const formatData = (data: any[]) => {
  const filteringOptions: FilteringOptions = getFilters(data)
  const itineraries: Itinerary[] = getItineraries(data)
  mockData.result.Itineraries[0].MergedLeg.Carriers
  return { filteringOptions, itineraries }
}
