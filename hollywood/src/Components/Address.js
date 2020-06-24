import React from 'react'

class Address extends React.Component{
 
    state={
        name:"",
        house:"",
        city:"",
        state:"",
        pincode:"",
        mobile:""
      }
    render()
    {
        return(
            <>
            <h3 style={{textAlign:"center"}}><i>Delivery Address</i></h3>
            <form className="f" style={{fontFamily:'Arial',marginTop:"0"}}>
            Name<br/><input type="text" name="name" value={this.state.name} onChange={this.handle}/><br/>
             House/Flat no<br/><input type="text" name="mobile" value={this.state.mobile} onChange={this.handle}/><br/>
              City/Street/Town<br/><input type="email" name="email" value={this.state.email} onChange={this.handle}/><br/>
              State<br/><input type="text" name="name" value={this.state.name} onChange={this.handle}/><br/>
              Pincode<br/><input type="text" name="mobile" value={this.state.mobile} onChange={this.handle}/><br/>
              Mobile No<br/><input type="email" name="email" value={this.state.email} onChange={this.handle}/>
                <div>
                    <br/>
                    <br/>
                  <button type="submit" onClick={this.register}>Deliver Here</button>
                  </div>

            </form>
            </>
        )
    }
}
export default Address