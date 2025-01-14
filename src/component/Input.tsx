import { ChangeEventHandler } from 'react'

interface InputProps {
  title?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const InputComponent = ({ title, onChange }: InputProps) => {
  return (
    <div className='relative flex border rounded-md border-gray w-full md:w-60 p-1'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        className='size-4 absolute text-secondary/40 inset-y-0 left-0 flex 
        items-center content-center pl-2 w-6 h-full'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
        />
      </svg>

      <input
        id={title}
        name={title}
        onChange={onChange}
        type='text'
        placeholder='Search by country code'
        className='block min-w-0 grow py-1.5 pl-6 pr-3 text-base 
      text-gray-900 placeholder:text-gray-400 focus:outline 
      focus:outline-0 sm:text-sm/6'
      />
    </div>
  )
}

export default InputComponent
