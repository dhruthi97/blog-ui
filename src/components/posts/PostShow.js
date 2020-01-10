import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

function PostShow(props){
        return (
            <div>
                {
                    props.user && (
                        <div>
                            <h2>UserName : {props.user.name}</h2>
                        </div>
                    )
                } 
                        <h2>Title : {props.post.title}</h2>
                        <h2>content : {props.post.body}</h2>
                <hr/>
                    <h2>Comments : </h2>
                    <ul>
                    {
                        props.comments.map(comment=>{
                            return <li key={comment.id}>{comment.body}</li>
                        })
                    }
                </ul>
                {/* <Link to ={`/users/${props.user.id}`}>More post of author : {props.user.name}</Link> */}
                <Link to ="/posts">Back to posts</Link>
            </div>
        )
}
const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    const post =  state.posts.find(post => post.id === parseInt(id))

    return{
        user : state.users.find(user => user.id === parseInt(post.userId)),
        post,
        comments : state.comments.filter(comment => comment.postId === parseInt(id))
    }
}
export default connect(mapStateToProps )(PostShow)