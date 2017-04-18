export interface ResponseBuildings {
  request: {
    country: string;
    language: string;
    location: string;
    num_res: string;
    offset: string;
    output: string;
    page: number;
    pretty: number;
    product_type: string
    property_type: string;
    size_type: string
    size_unit: string
    sort: string
  },
  response: {
    application_response_code: string,
    application_response_text: string;
    attribution: Attribution[];
    created_http: string;
    created_unix: number;
    link_to_url: string;
    listings: Building[];
    locations: Locations[];
    page: number;
    sort: string;
    status_code: number;
    status_text: string;
    thanks: string;
    total_pages: number;
    total_results: number;
  }
}

export interface Building {
  bathroom_number: number;
  bedroom_number: number;
  car_spaces: number;
  commission: number;
  construction_year: number;
  datasource_name: string;
  floor: number;
  img_height: number;
  img_url: string;
  img_width: number;
  keywords: number;
  latitude: number;
  lister_name: string;
  lister_url: string;
  listing_type: string;
  location_accuracy: number;
  longitude: number;
  price: number;
  price_currency: string;
  price_formatted: string;
  price_high: number;
  price_low: number;
  price_type: number;
  property_type: number;
  size: 0,
  size_type: string;
  summary: string;
  thumb_height: number;
  thumb_url: string;
  thumb_width: number;
  title: string;
  updated_in_day: number;
  updated_in_days_formatted: string;
}

export interface Locations {
  center_lat: number;
  center_long: number;
  long_title: string;
  place_name: string;
  title: string;
}

export interface Attribution {
  img_height: number;
  img_url: string;
  img_width: number;
  link_to_img: string;
}

export interface SearchParametrs{
  page:number;
  city:string
}
