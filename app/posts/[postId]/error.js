'use client'

import { useEffect } from "react"

const Error = ({ error, reset }) => {

    useEffect(() => {
        console.log('inside useeffect', error)
    }, [error])

    return (
        <div>
            <h1>in Dynamic Post id page: Something went wrong!</h1>
            <button onClick={() => {
                reset()
            }}> Try again </button>
        </div>
    )
}

export default Error
