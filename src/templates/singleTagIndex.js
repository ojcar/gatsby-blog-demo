import React from "react"
import { Link } from 'gatsby'

const singleTagIndexTemplate = ({data, pageContext}) => {
  console.log("data", data, pageContext);
  const { posts, tagName } = pageContext;

  return (
    <div>
      Posts about {`${tagName}`}

      <ul>
        {posts.map((post,index) => {
          return(
            <li key={index}>
              <Link to={post.frontmatter.path}>
                {post.frontmatter.title}
              </Link>
            </li>
            )
        })}
      </ul>
    </div>
  )
}

export default singleTagIndexTemplate
