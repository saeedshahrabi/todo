import React from 'react'
import Header from './TodoForm'
import { TodoItem } from './TodoItem';
import './style/todoMain.scss'
var currentid:any =1
interface IProps {
    inputValue:any
    namess:any

}

interface IState{
 todo:Array<{
     id:number
     done:boolean
     names:string
 }>

}

export class TodoMain extends React.Component<IProps,IState>{
    static defaultProps: IProps = {
        inputValue: "",
        namess:""
      };
state={
todo:[
  { 
    names:"practice makes perfect",
    id:0,
    done:false,
}
]

}
// value of input (saeed)
callback =(text :any):void=>{
this.setState({
    todo:[...this.state.todo,{names:text,done:false,id:currentid}]
})
currentid++
}
//toggle Todo (saeed)
idd=(id: any):void=>{
    let newArray = [...this.state.todo];
    for(let i =0 ; i<newArray.length; i++)
    {
        if(newArray[i].id ===id)
        {
            newArray[i].done  = !newArray[i].done
        }
        
       
    }
    this.setState({
        todo: newArray})
}

    render(){
        return(
            <div className="container">
                <div className="row m-5 row1">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-8 ">
            
                    <Header inputValue={this.callback} />    
                    {this.state.todo.map(item=> <TodoItem toggle={item.done} namess={item.names} idd={()=>this.idd(item.id) } />)}
                    </div>
                </div>
        
            </div>
        )
    }
}