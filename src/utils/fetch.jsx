import { useEffect, useState } from "react"

const JsonFetch = (url, request) => {

    const [response, setResponse] = useState(false)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState()

    useEffect(() => {
        fetch(url, request)
        .then(res => {
            setIsPending(false)
            return res.json()
        })
        .then(data => setResponse(data))
        .catch(error => {
            setError(error)
            console.error("holy sh1t", error)
        })

        return _ => AbortController()

    }, [url, request])

    return {response, isPending, error}
}

export {JsonFetch}