var React = require('react');

class NoteForm extends React.Component{
    add(){
        var value = this.refs.txt.value;
        this.refs.txt.value = ''; //clear val of input
        this.props.addNote(value);
    }

    render(){
        return(
            <div>
                <input type="text" ref="txt" placeholder="Enter your note !"/>
                <br/><br/>
                <button onClick={this.add.bind(this)}>Add</button>
            </div>
        )
    }
}

module.exports = NoteForm;