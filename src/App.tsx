import InputComponent from './component/Input'
import logoImageUrl from './assets/logo.jpeg'

function App() {
  return (
    <div className='space-y-8 px-6'>
      <header className='bg-white'>
        <nav aria-label='Global' className='w-full flex items-center justify-center '>
        <img src={logoImageUrl} className="object-cover h-16 w-40"/>
        </nav>
      </header>

      <div>
        <h3 className='font-medium text-lg'>Countries</h3>
        <p>A list of all the countries including the country's name, country's code and country's capital.</p>
      </div>

      <InputComponent />

      <table className='table-auto text-sm w-full text-left'>
        <thead className='text-xs text-secondary uppercase border-b border-secondary/10'>
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
          {/*   {influencers?.map((influencer, index) => (
  <tr
    key={influencer.id}
    className={`odd:bg-white even:bg-secondary/5 rounded-bl-lg rounded-br-lg ${
      influencers?.length - 1 !== index ? 'border-b border-secondary/10' : ''
    } `}
  >
    <td className='px-8 py-4 whitespace-nowrap'>{influencer.first_name}</td>
    <td className='px-8 hidden md:table-cell'> {influencer.last_name}</td>
    <td className='px-8 py-4'> {getSocialMediaAccounts(influencer)}</td>
    <td className='px-8 hidden md:table-cell'>
      {influencer?.employee?.name ? (
        <div className='space-x-2 text-nowrap'>
          <img
            alt=''
            src={influencer?.employee?.img}
            className='inline-block size-8 rounded-full ring-2 ring-white'
          />
          <span>{influencer?.employee?.name}</span>
        </div>
      ) : null}
    </td>

    <td className='px-3 py-4'>
      <div className='flex gap-2'>
        <PencilSquareIcon
          className='h-5 w-5 text-secondary cursor-pointer'
          onClick={() => {
            setShowInfluencerForm('edit')
            setSelectedInfluencer(influencer)
          }}
        />
        <TrashIcon
          className='w-5 h-5 text-red cursor-pointer'
          onClick={() => influencer?.id && handleDeleteInfluencer(influencer?.id)}
        />
      </div>
    </td>
  </tr>
))} */}

          <tr
            className={`odd:bg-white even:bg-secondary/5 rounded-bl-lg rounded-br-lg ${
              2 - 1 !== 0 ? 'border-b border-secondary/10' : ''
            } `}
          >
            <td className='px-8 py-4 whitespace-nowrap'>{1}</td>
            <td className='px-8'> {'12d'}</td>
            <td className='px-8 py-4'> {'influencer'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
