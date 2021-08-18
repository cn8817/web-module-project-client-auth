import React from 'react' 
import axiosWithAuth from '../utils/axiosWithAuth'
import AddFriends from './AddFriends'

class friendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth().get('/friends')
        .then(res=> {
            this.setState({
                friends: res.data
            })
        })
        .catch(err=> {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h3>friends</h3>
                {this.state.friends.map(friend => (
                <div key={friend.id}> 
                <div>
                    Name:{friend.name}
                    Age: {friend.age}
                    Email:{friend.email}
                </div>
            </div>
        ))}
                <AddFriends />
            </div>
        )
    }
}

export default friendsList