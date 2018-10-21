import React from "react"
import { Link } from 'gatsby'



const AllTagsTemplate = ({pageContext}) => {
  const {tags} = pageContext;
  console.log("tags",tags);
  return (
    <div>
      <ul>
      {tags.map((tagName,index) => {
        return (
          <li key={index}>
            <Link to={`/tags/${tagName}`}>
              {tagName}
            </Link>
          </li>
        )
        })
      }
      </ul>
    </div>
  )
}

export default AllTagsTemplate
