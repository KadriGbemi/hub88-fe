import InputComponent from './component/Input'
import logoImageUrl from './assets/logo.jpeg'
import CountriesComponent from './component/List'

function App() {
  return (
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

      <InputComponent />

      <CountriesComponent />
    </div>
  )
}

export default App
