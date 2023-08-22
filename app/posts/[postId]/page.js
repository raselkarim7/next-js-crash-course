import { Suspense } from 'react'

import Loading from './loading'

const PostsDynamicPage = () => {

  const arr = []

  for (let i = 0; i < 5_000_0; i++) {
    arr.push('No ' + (i + 1))
  }

  return (
    <Suspense fallback={<Loading />}>

      <div>
        {
          arr.map(item => {
            return <h1>{item} There is a  castle</h1>
          })
        }
      </div>
    </Suspense>

  )
}

export default PostsDynamicPage
