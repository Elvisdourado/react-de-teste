import React from 'react'
import {Link} from 'react-router-dom'

class Dropdown extends React.Component {
  
  state = {
    show: false,
  }
  
  click = () => {
    this.setState({show: !this.state.show})
  }

  showDrop(){
    if (this.state.show) {
      return (
        <div >
          <ul>
            <li>
              <Link to='/'> Homepage</Link>
            </li>
            <li>
              <Link to='/Contact'> Contato</Link>
            </li>
            <li>
              <a href='#'> teste 1</a>
            </li>
          </ul>
        </div>
      )
      
    } else {
      return null
    }
  }
  
  render (){
    return (
      <div>
        <button onClick={this.click}> 
        Menu
        <span className={`${this.state.show} `}></span>
        </button>
        {this.showDrop()}
      </div>
    )
  }
}
export default Dropdown

// className='dropdown-menu' id='dropdown'