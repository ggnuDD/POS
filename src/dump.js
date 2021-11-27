<div
                  class='text-on-image1'
                  onMouseEnter={() => this.setState({ count: this.state.hover + 1 })}
                  onMouseLeave={() => this.setState({ count: this.state.hover - 1 })}
                  to="/payment"
                >
                  <h3>Đặt vé</h3>
                </div>
                <div 
                  class='text-on-image2'
                  onMouseEnter={() => this.setState({ count: this.state.hover + 1 })}
                  onMouseLeave={() => this.setState({ count: this.state.hover - 1 })}
                  to="/detail"
                >
                  {<h3>Chi tiết</h3>}
                </div>

setStyle({display: 'block'});

onMouseEnter={() => this.setState({ style2: {marginTop: '-420px', height: '380px', opacity: '0.7'} })}
                  onMouseLeave={() => this.setState({ style2: {marginTop: '-420px', height: '380px', opacity: '0'} })}

if (hover) {
      this.setState({style2: {marginTop: '-420px', height: '380px', opacity: '0.7'}});
    } else {
      this.setState({style2: {marginTop: '-420px', height: '380px', opacity: '0.7'}});
    }

<img 
	{...hover ? this.setState({ style2: {marginTop: '-420px', height: '380px', opacity: '0.7'} }) : this.setState({ style2: {marginTop: '-420px', height: '380px', opacity: '0.7'} })}
	src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/768px-Solid_black.svg.png"}
	style={this.state.style2}
/>		  