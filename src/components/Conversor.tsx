import { useState, useEffect } from 'react'
import api from '../routes/routes'

export default function Conversor() {
  const [dollarValue, setdollarValue] = useState('')
  const [realValue, setRealValue] = useState('')

  useEffect(() => {
    api.get(`/`).then((res) => {
      const dollarActualValue = res.data
      setdollarValue(dollarActualValue.USDBRL.high)
    })
  })

  const handleRealInput = (inputValue: any) => {
    setRealValue(inputValue.target.value)
  }

  function convertValue(): string {
    const convertedValue = parseFloat(realValue) * parseFloat(dollarValue)

    if(realValue){

        return convertedValue.toFixed(2)
    } else {
        return '0'
    }

  }

  return (
    <>
      <div className=''>
        <p>Digite o valor em reais:</p>
        <input type='number' name='real' onChange={handleRealInput} />

        <p>Valor em dólares</p>
        <p>{convertValue()}</p>
      </div>
    </>
  )
}
