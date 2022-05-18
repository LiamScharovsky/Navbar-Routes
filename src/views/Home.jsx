import React, {useEffect, useState} from 'react'
import moment from 'moment'

export const Home = () => {
    const [ postList, setPostList] = useState([]);       //Make API call and retrieve a list of posts
    const retrievePosts = async () => 
    {                                                      //Make async request (doesn't need others to be finished to do)
        fetch('http://localhost:5000/api/v1/posts')       //get the posts 
            .then(rest => rest.json())                      //jsonify each post
            .then(data => {                                // for every data/post, print it
                setPostList(data)                         

            })
    }

    useEffect(() => {                                       //update and show posts
        retrievePosts()

    }, [])
  return (
      <div className="row">
          <div className="col-md-12">
              <h1>Hello, Liam!</h1>
              <form action="">
                  <div className="row">
                      <div className="col-md-10">
                          <div className="form-group">
                              <input
                                  type="text"
                                  className="form-control"
                                  name="postBody"
                                  placeholder="What's on your mind?"
                                  aria-describedby="helpID" />
                          </div>
                      </div>
                      <div className="col-md-2">
                          <input type="submit" className="btn btn-primary btn-block" value="Post" />
                      </div>
                  </div>
              </form>
              <hr />

              <ul className="list-group">
                  {/* parenthesis needed to make conditional posts */}
                  {
                      postList.length !== 0 ?                                       //If postList has elements inside    
                        //map function goes through each post in postList. Kind of like a for loop   
                      postList.map(post => (                                    //Make a post for each post in postList
                              //Each post has its own unique ID
                              <li key={post.id} className="list-group-item">        
                                  <p>{post.body}</p>
                                  <div>
                                      <small>
                                          &mdash; {`${post.author.firstName} ${post.author.lastName}`}
                                          <span className="float-right">{moment(new Date(post.dateCreated)).fromNow()}</span>
                                      </small>
                                  </div>
                              </li>
                          )) :
                          <p>Loading...</p>   //if there are no posts, show this message. You can change for a spinner
                //End of conditional statement
                  }
              </ul>
          </div>
      </div>
  )
}
