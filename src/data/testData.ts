import { StopsType } from "../types"

export default [
  {
    carriers: [
      {
        code: "PC",
        displayCode: "PC",
        id: 1161,
        imgUrl: "http://s1.apideeplink.com/images/airlines/H9.png",
        name: "Pegasus Airlines"
      }
    ],

    destination: {
      airportCode: "ADB",
      time: "2017-04-14T09:10:00"
    },
    duration: 90,
    id: "9249-1704140740--31973-0-9250-1704140910",
    legs: [
      {
        arrival: {
          airportCode: "ADB",
          airportName: "Izmir",
          time: "2017-04-14T09:10:00"
        },
        carrier: "Pegasus Airlines",
        departure: {
          airportCode: "ADA",
          airportName: "Adana",
          time: "2017-04-14T07:40:00"
        },
        duration: 90,
        flightCode: "PC 3011"
      }
    ],
    lowestPrice: 66.99,
    origin: {
      airportCode: "ADA",
      time: "2017-04-14T07:40:00"
    },
    pricingOptions: [
      {
        agent: "Pegasus Airlines",
        price: 66.99
      }
    ],
    stops: 0,
    stopsType: StopsType.direct
  }
]

export const itineraryWithMultipleCarriers = {
  carriers: [
    {
      code: "PC",
      displayCode: "PC",
      id: 1161,
      imgUrl: "http://s1.apideeplink.com/images/airlines/H9.png",
      name: "Pegasus Airlines"
    },
    {
      code: "ABC",
      displayCode: "ABC",
      id: 123,
      imgUrl: "http://s1.apideeplink.com/images/airlines/H9.png",
      name: "ABC Airlines"
    }
  ],

  destination: {
    airportCode: "ADB",
    time: "2017-04-14T09:10:00"
  },
  duration: 90,
  id: "9249-1704140740--31973-0-9250-1704140910",
  legs: [
    {
      arrival: {
        airportCode: "ADB",
        airportName: "Izmir",
        time: "2017-04-14T09:10:00"
      },
      carrier: "Pegasus Airlines",
      departure: {
        airportCode: "ADA",
        airportName: "Adana",
        time: "2017-04-14T07:40:00"
      },
      duration: 90,
      flightCode: "PC 3011"
    }
  ],
  lowestPrice: 66.99,
  origin: {
    airportCode: "ADA",
    time: "2017-04-14T07:40:00"
  },
  pricingOptions: [
    {
      agent: "Pegasus Airlines",
      price: 66.99
    }
  ],
  stops: 0,
  stopsType: StopsType.direct
}
