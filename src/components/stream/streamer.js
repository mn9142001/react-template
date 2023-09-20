import Peer from "peerjs"
import { useEffect } from "react"
import { getAuthToken } from "../../hooks/is_anonymous";


const Streamer = ({lectureID}) => {
    let authToken = getAuthToken()

    useEffect(() => {
        const myPeer = new Peer({host : "localhost", port: 9000, path: "/"});
        let socket;
        let peerID;
        
        myPeer.on('open', _ => {
            peerID = myPeer.id
            socket = new WebSocket(`ws://localhost:8000/lectures/${lectureID}/${peerID}/?token=${authToken}`)
        })
        return _ => {
            myPeer.disconnect()
            socket?.close()
        }
    }, [lectureID, authToken])

    return <div>
        <h1>Streamer</h1>
    </div>
}

export default Streamer