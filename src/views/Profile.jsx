import React from 'react'

export const Profile = () => {
  return (
    <>
    <div className='row'>
      <div className="col-md-3">
        <img className='img-fluid' src="https://via.placeholder.com/500x500" alt="Profile Image" title='Profile Image'/>
      </div>
      <div className="col-md-9">
        <form action="">
          <div className="form-group">
            <div className="row">
              <div className="col-6">
                <input type="text" className='form-control' name="firstName" aria-describedby='helpId' placeholder='First Name' />
              </div>
              <div className="col-6">
                <input type="text" className='form-control' name="lastName" aria-describedby='helpId' placeholder='Last Name' />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input type="email" className='form-control' name="email" aria-describedby='helpId' placeholder='Email' />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' name="password" aria-describedby='helpId' placeholder='Password' />
          </div>
          <div className="form-group">
            <input type="password" className='form-control' name="confirmPassword" aria-describedby='helpId' placeholder='Confirm Password' />
          </div>
          <input name="" id="" className="btn btn-primary" type="submit" value="Update Profile" />
        </form>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
      </div>
        <ul className="list-group">
          {/* parenthesis needed to make conditional posts */}
          {/* {
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
          } */}
        </ul>
    </div>
    </>
  )
}
