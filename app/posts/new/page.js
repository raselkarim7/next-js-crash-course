import {Suspense} from 'react'
import Loading from './loading'

const page = () => {
  const arr = []

  for (let i = 0; i < 5_000_0; i++) {
    arr.push('- ' + (i + 1) + ' - ')
  }
  return (
    <Suspense fallback={<Loading />}>

      <div>
        {
          arr.map(item => {
            return <h1>{item} In a cloud, I like to go there in my dreams</h1>
          })
        }
      </div>
    </Suspense>
  )
}

export default page
