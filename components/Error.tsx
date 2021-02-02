const Error = ({ children }) => {
  return (
    <div className='error-wrapper'>
      <div className='error-text'>{children}</div>
    </div>
  )
}

export default Error
