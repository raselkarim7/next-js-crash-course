import Link from 'next/link'

const Page = async function ({ params }) {
  const blogPostUrl = 'https://jsonplaceholder.typicode.com/todos'
  const res = await fetch(blogPostUrl, { cache: 'no-store' })
  const data = await res.json()

  console.log('data ========> ', data)

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-4">
        <ul style={{ listStyleType: 'decimal' }}>
          {data.slice(0, 10).map(item => {
            return (
              <h1 className="truncate text-2xl font-meidum capitalize text-gray-200">
                <li>
                  {/* <Link
                    href={`/posts/${item.id}`}
                  >
                    {item.title}
                  </Link> */}

                  <Link
                    href={`/posts/new`}
                  >
                    {item.title}
                  </Link>

                </li>
              </h1>
            )
          })}
        </ul>
        <p className="font-medium text-gray-500">{data.body}</p>
      </div>
    </div>
  )
}

export default Page