
const getAuthToken = _ => {
    const token = sessionStorage.getItem("token")
    return token
}

const setAuthToken = _token => {
    sessionStorage.setItem("token", _token)
}


const IsAuthenticated = _ => {
    let token = getAuthToken()
    return token != null

}

export {getAuthToken, setAuthToken, IsAuthenticated}

