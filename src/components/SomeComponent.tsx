import { useContext } from 'react'

import SomeContext from '../SomeContext'

function SomeComponent() {
	const { someValue, setSomeValue } = useContext(SomeContext)
  
	return (
	  <input
		onClick={() => {
		  setSomeValue(someValue + 1)
		}}
		type="button"
		value={someValue}
	  />
	)
  }
  
  export default SomeComponent