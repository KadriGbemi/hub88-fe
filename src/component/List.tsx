import { useQuery } from '@apollo/client'
import { Suspense } from 'react'
import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_CODE } from '../api'

interface Countries {
  capital: string
  name: string
  code: string
}

interface GetCountriesData {
  countries: Countries[]
}

interface CountriesProps {
  query?: string
}

const CountriesComponent = ({ query }: CountriesProps) => {
  const { data, loading, error } = useQuery<GetCountriesData>(query ? GET_COUNTRIES_BY_CODE : GET_ALL_COUNTRIES, {
    variables: query ? { code: query } : {},
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <table className='table-auto text-sm w-full text-left'>
        <thead className='text-xs text-secondary/70 uppercase border-b border-secondary/10 '>
          <tr>
            <th scope='col' className='px-8 py-6 '>
              Name
            </th>
            <th scope='col' className='px-8 py-6'>
              Capital
            </th>
            <th scope='col' className='px-8 py-6'>
              Code
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.countries?.map((country, index) => (
            <tr
              key={index}
              className={`odd:bg-white even:bg-secondary/5 rounded-bl-lg rounded-br-lg text-secondary/80 ${
                data?.countries?.length - 1 !== index ? 'border-b border-secondary/10' : ''
              } `}
            >
              <td className='px-8 py-4 whitespace-nowrap'>{country.name}</td>
              <td className='px-8'> {country.capital}</td>
              <td className='px-8 py-4'> {country.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Suspense>
  )
}

export default CountriesComponent
