import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_CODE } from './api'
import InputComponent from './component/Input'
import logoImageUrl from './assets/logo.jpeg'
import CountriesComponent from './component/List'
import { GetCountriesData } from './types'
import Alert from './Alerts'

function App() {
  const [query, setQuery] = useState('')

  const { data, loading, error } = useQuery<GetCountriesData>(query ? GET_COUNTRIES_BY_CODE : GET_ALL_COUNTRIES, {
    variables: query ? { code: query } : {},
  })

  return (
    <>
      {error && <Alert message={`Error! ${error.message}`} type='error' />}
      
      <div className='space-y-8 px-6'>
        <header className='bg-white'>
          <nav aria-label='Global' className='w-full flex items-center justify-center '>
            <img src={logoImageUrl} className='object-cover h-16 w-40' />
          </nav>
        </header>

        <div>
          <h3 className='font-medium text-lg'>Countries</h3>
          <p className='text-secondary/70'>
            A list of all the countries including the country's name, country's code and country's capital.
          </p>
        </div>

        <InputComponent onChange={(e) => setQuery(e.target.value?.toUpperCase())} />

        <CountriesComponent data={data?.countries} loading={loading} />
      </div>
    </>
  )
}

export default App
