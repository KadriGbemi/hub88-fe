const Alert = ({ message, type }: { message: string; type: 'error' | 'success' }) => (
  <div
    className={`fixed top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex 
      items-center p-2 text-sm rounded-lg shadow-lg z-50 ${type === 'error' ? 'bg-danger text-white' : 'bg-tetiary text-secondary'}`}
    role='alert'
  >
    <svg
      className='flex-shrink-0 inline w-4 h-4 me-3'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 20 20'
    >
      <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
    </svg>
    <span className='sr-only'>Info</span>
    <div>
      <span className='font-medium'>{type=== "error"? 'An error occured': "New update"}:</span> {message}
    </div>
  </div>
)

export default Alert
