import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">

      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening. We are blogging about it.</h1>
      </div>

      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date={"Dec 25, 2022"} title={"Here is a title"}/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date={"Jan 1, 2023"} title={"Here is a second title"}/>
          <Article imgUrl={blog03} date={"March 17, 2023"} title={"Here is a third title"}/>
          <Article imgUrl={blog04} date={"April 26, 2023"} title={"Here is a fourth title"}/>
          <Article imgUrl={blog05} date={"May 2, 2023"} title={"Here is a fifth title"}/>
        </div>
      </div>

    </div>
  )
}

export default Blog
