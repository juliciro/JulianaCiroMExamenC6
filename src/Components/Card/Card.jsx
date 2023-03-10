import React from 'react'

export const Card = ({nickName, password,musicalGenre}) => {
  return (
    <div style={{
        border: "4px solid blue",
    }}>
        <h2>Hello your nick name is: {nickName}</h2>
        <h2>Your password is:{password}</h2>
        <h2>Your favorite musical genre is:{musicalGenre}</h2>
    </div>
  )
}
