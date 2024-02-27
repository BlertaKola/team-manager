import { useState, useEffect } from "react"
import axios from 'axios'
import './Buttons.css'
import ManagePlayers from "./ManagePlayers"
import { useNavigate } from "react-router-dom"
const Player = (props) => {
    const [players, setPlayers] = useState([])
    const [updated, setUpdated] = useState(false)
    const [form, setForm] = useState({
        name: "",
        position: ""
    })
  
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data)
                setUpdated(!updated)
            })
    }, [updated])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Clicked")
        console.log(players)
        const isDuplicate = players.some((player) => player.name === form.name)
        isDuplicate ? setErrors({name: {message : "Player with this name already exists."}}) : axios.post('http://localhost:8000/api/players', form)
            .then(res => {
                navigate('/players/list')
                setForm({
                    name: "",
                    position: ""
                })
            })
            .catch(err => {
                if (err.response && err.response.data && err.response.data.errors) {
                    setErrors(err.response.data.errors);
                }
            });
        
       
        
    } 
    return(
        <>
            <ManagePlayers />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Player Name: </label>
                    <input type="text"  value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
                    {errors && errors.name && (
                        <div style={{ color: 'red' }}>{errors.name.message}</div>
                    )}
                </div>
                <div>
                    <label>Player Position: </label>
                    <input type="text" value={form.position} onChange={(e) => setForm({...form, position: e.target.value})} />
                    {errors && errors.position && (
                        <div style={{ color: 'red' }}>{errors.position.message}</div>
                    )}
                </div>
                <input type="submit" value="Add Player" className="btn-add" />
            </form>
        </>
    )
}
export default Player