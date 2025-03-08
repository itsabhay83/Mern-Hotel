import { useEffect, useState } from 'react'
import axiosInstance from '../../axios';
import Error from '../../components/error/Error';

const Cancel = () => {
  var urlParams = new URLSearchParams(window.location.search);
  var name = urlParams.get('session_id');

  const [errordata, setErrorData] = useState(null)

  const cancelPayment = async () => {
    await axiosInstance.post(`api/bookings/cancelBooing/${name}`)
      .then((res) => console.log(res.data))
      .catch((err) => setErrorData(err?.response?.data))
  }

  useEffect(() => {
    name?.length == 66 && cancelPayment()
  }, [])

  return (
    <>
      {name?.length == 66
        ? errordata ? <Error error={errordata} /> : <Error error={"PAYMENT CANCELLED"} />
        : <Error />}
    </>
  )
}

export default Cancel