import React from 'react';


export default class FotoFrame extends React.Component {
    state = {
		foto: "/iconoDefault.png"
    }
    
    componentDidMount() {
        if (!this.props.foto) return;
        var foto;
        var buffer = Buffer.from(this.props.foto.data);
        foto = buffer.toString("utf8");

        this.setState({
            foto: foto ? foto : "/iconoDefault.png"
        })
        

    }
    
    render() {
        return (
            <div>
            
            <div>
                <img src={this.state.foto} alt="foto"/>
            </div>
            
            </div>
        );
    }
}