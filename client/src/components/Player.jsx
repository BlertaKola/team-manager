import { useState, useEffect } from "react"
import axios from 'axios'
import ManagePlayers from "./ManagePlayers"
import { useNavigate } from "react-router-dom"
const Player = (props) => {
    const [form, setForm] = useState({
        name: "",
        position: ""
    })
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Clicked")
        axios.post('http://localhost:8000/api/players', form)
            .then(res => {
                console.log(res)
                setForm({
                    name: "",
                    position: ""
                })
                navigate("/players/list")
            })
            .catch(err => console.log(err))
        
    } 
    return(
        <>
            <ManagePlayers />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Player Name: </label>
                    <input type="text"  value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
                </div>
                <div>
                    <label>Player Position: </label>
                    <input type="text" value={form.position} onChange={(e) => setForm({...form, position: e.target.value})} />
                </div>
                <input type="submit" value="Add Player" />
            </form>
        </>
    )
}
export default Player