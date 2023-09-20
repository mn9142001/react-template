import { setAuthToken } from "../../hooks/is_anonymous";

const setAuthData = response => {
    setAuthToken(response.data.refresh)
    sessionStorage.setItem("profile_data", JSON.stringify(response.data))
}

export default setAuthData