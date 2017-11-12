var React = require('react');
var Note = require('./Note.jsx');
var NoteForm = require('./NoteForm.jsx');

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mang: ['Android', 'iOS', 'NodeJS'],
        }
    }

    add(value){
        this.state.mang.push(value);
        this.setState(this.state);
    }

    del(index){
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    }

    render(){
        return(
            <div>
                <NoteForm addNote={this.add.bind(this)} />
                {this.state.mang.map((e, i) => {
                    return <Note key={i} remove={this.del.bind(this)} index={i}>{e}</Note>
                })}
            </div>
        )
    }
}

module.exports = List;