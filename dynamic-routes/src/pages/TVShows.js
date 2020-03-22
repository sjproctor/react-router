import React, { Component } from "react"

class TVShows extends Component{
  render(){
    const { id } = this.props.match.params
    const show = this.props.tvshows.find((show) => show.id === parseInt(id))
    return(
      <React.Fragment>
        <div>
          <h3>{ show.name }</h3>
          <p>Characters:</p>
          <ul>
            { show.characters.map((character, index) => {
              return(
                <li key={ index }>{ character }</li>
              )
            })}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}
export default TVShows
