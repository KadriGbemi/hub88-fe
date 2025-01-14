
export interface Countries {
  capital: string
  name: string
  code: string
}

export interface GetCountriesData {
  countries: Countries[]
}

export interface AlertProps { message: string; onClose?: Function; type: 'error' | 'success' }