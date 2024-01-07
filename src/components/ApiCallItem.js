import React from 'react'

const ApiCallItem = ({item}) => {
  return (
    <div>
        <h1>{item.title}</h1>
        <p>{item.opening_crawl}</p>
    </div>
  )
}

export default ApiCallItem