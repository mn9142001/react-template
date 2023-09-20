
import { useParams } from "react-router-dom";
import { axiosFetchRequest } from "../../utils/fetch";
import { getLectureUrl } from "../../utils/constants";
import { useQuery } from "react-query";
import { getAuthData } from "../register/utils";
import Streamer from "../../components/stream/streamer";
import Subscriber from "../../components/stream/subscriber";

const Stream = _ => {
    const {lectureID} = useParams()

    const getLecture = _ => axiosFetchRequest({url : getLectureUrl(lectureID), useToken : true})

    const query = useQuery({ queryKey: ['todos'], queryFn: getLecture })

    if (query.isSuccess === true){
        if (query.data?.data?.streamer === getAuthData()?.user?.id){
            return <Streamer lectureID={lectureID} />
        }
        return <Subscriber />
    }
    
    if (query.isLoading){
        return <div><h1>Is Loading</h1></div>
    }

    if (query.isError){
        return <div><h1>Error {query.error}</h1></div>
    }
}

export default Stream