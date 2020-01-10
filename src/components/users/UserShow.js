import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



function UserShow (props){
    
    // componentDidMount(){
    //     axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
    //     .then(response=>{
    //         const users=response.data
    //         this.setState({users})
    //         axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
    //         .then(response=>{
    //             const posts=response.data
    //             this.setState({posts})
    //         })
    //     })
    // }
        return (
            <div>
                {
                    props.user && (
                        <div>
                            <h2>User Name:{props.users.name}</h2>
                        </div>

                    )
                }
                <h3>Posts written by the user</h3>
                <ul>
                    {
                        props.posts.map(post=>{
                            return <li key={post.id}><Link to={`/Posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>
               
            </div>
        )
}
const mapStateToProps = (state,props) =>{
    const id = props.match.params.id
    return{
        users : state.users.find(user => user.id === parseInt(id)),
        posts : state.posts.filter(post => post.userId === parseInt(id))
    }
}
export default connect( mapStateToProps)(UserShow)