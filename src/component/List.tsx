import { Countries } from '../types'

interface CountriesProps {
  loading?: boolean
  data?: Countries[]
}

const Loading = () => <div>Loading...</div>

const CountriesComponent = ({ data, loading }: CountriesProps) => {
  if (loading) return <Loading />

  return (
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
        {data?.map((country, index) => (
          <tr
            key={index}
            className={`odd:bg-white even:bg-secondary/5 rounded-bl-lg rounded-br-lg text-secondary/80 ${
              data?.length - 1 !== index ? 'border-b border-secondary/10' : ''
            } `}
          >
            <td className='px-8 py-4 whitespace-nowrap'>{country.name}</td>
            <td className='px-8'> {country.capital}</td>
            <td className='px-8 py-4'> {country.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CountriesComponent
