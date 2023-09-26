import { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

function Home() {
  const context = useContext(myContext)
  console.log(context)
  return (
    <div>
      <Layout>
        Home
      </Layout>
    </div>
  )
}

export default Home
