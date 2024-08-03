import Hero from '../hero/Hero'
import Popular from '../popular/Popular'
import Offers from '../offers/Offers'
import NewCollections from '../newcollections/NewCollections'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers/>
      <NewCollections />
    </div>
  )
}

export default Shop