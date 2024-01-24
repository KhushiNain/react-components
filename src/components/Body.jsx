import React, { PureComponent } from 'react'

export class Body extends PureComponent {
  render() {
    let imageData= this.props.data()
    return (
        <div>
        {
        
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Body