import React,{useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'


const AddFriends = (props) => {
    const {addFriend} = props
    const initialState ={
        name: '',
        email: '',
        age:''
    }

    const [user,setUser] = useState(initialState)

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        const newFriend = {
            name: user.name,
            email: user.email,
            age: user.age,
            id: Date.now()
        }
        console.log(newFriend)
        axiosWithAuth().post('friends', newFriend)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

        <label>
            Name:
        </label>
        <input
        type='text'
        name='name'
        value={user.name}
        onChange={handleChanges}
        />

        <label>
            Age:
        </label>
        <input
        type='text'
        name='age'
        value={user.age}
        onChange={handleChanges}
        />

        <label>
            Email:
        </label>
        <input 
        type='text'
        name='email'
        value={user.email}
        onChange={handleChanges}
        />

        <button>Add Friend</button>


        </form>
                </div>
            )
        }

export default AddFriends