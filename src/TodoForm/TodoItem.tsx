import React from 'react'
import './style/todoItem.scss'
interface IProps {
    toggle:any
    namess:any
    idd:any


}
export class TodoItem extends React.Component<IProps> {

  render() {
    return (
      <div className="container">
        <div className="row">

        <div className="col-12">
          <ul>
        <li className={this.props.toggle ? 'todo-item todo-done' : "todo-item"} onClick={this.props.idd}>{this.props.namess}

</li>
</ul>
        </div>
  
    </div>
      </div>
    )
  }
}