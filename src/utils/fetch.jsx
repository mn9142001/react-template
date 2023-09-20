import { useEffect, useState } from "react"
import { AUTH_HEADER } from "./constants";
import { getAuthToken } from "../hooks/is_anonymous";
import axios from "axios";

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


const axiosFetchRequest = ({url, useToken}) => {
    let options = {}

    if (useToken === true) {
        options['headers'] = {}
        options['headers']['Authorization'] = `${AUTH_HEADER} ${getAuthToken()}`
    }

    return axios.get(url, options)
}

export {JsonFetch, axiosFetchRequest}