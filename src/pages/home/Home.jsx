import React from 'react'
import Spotlight from '../../components/Spotlight'
import SignatureCollection from '../../components/SignatureCollection'
import CustomerReviews from '../../components/CustomerReviews'

function Home() {
  return (
    <div>
        <Spotlight/>
        <SignatureCollection/>
        <CustomerReviews/>
    </div>
  )
}

export default Home