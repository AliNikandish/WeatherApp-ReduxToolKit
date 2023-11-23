
  export type weatherDataType={
    base:string,
    clouds:{all:number},
    coord:{lon:number,lat:number},
    dt:number,
    id:number,
    main:{
      feels_like:number,
      humidity: number
      pressure: number
      temp: number
      temp_max: number
      temp_min: number
    },
    name:string,
    sys:{
      type:number,
      id:number,
      country:string,
      sunrise:number,
      sunset:number,
    },
    timezone:number,
    visibility:number,
    wind:{speed:number,deg:number},
    weather:[{
      id:number,
      main:string,
      description:string,
      icon:string
    }]
  }


  export type WeatherState= {
    weatherData: weatherDataType|null;
    loading: boolean;
    error: string | null;
  }

  export type stateType={
    weather:WeatherState
  }

  export type buttonProps={
    lat:number,
    lon:number
  }