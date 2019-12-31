    import React from 'react'
    import {OutlinedButtons, CustomizedInputs} from '../../Component/index'
    import {connect} from 'react-redux';
    import {add,delTodo,editTodo} from './../../store/action/action'
    import firebaseApp from '../../Config/firebase/firebase'
    class Home extends React.Component{
        constructor(){
            super();
            this.state={
                data:[],
                 value:''
            }
        }
        componentDidMount(){
            let {data} = this.state
            firebaseApp.firestore().collection('Todos').get()
            .then(res=>{
                res.forEach(value => {
                    console.log(value.id)
                    data.push(value.data());
                    this.setState({
                        data,
                        id:value.id
                    })
                });
            })
        }
        render(){
        console.log(this.state.data,'Data from firebase')
            return(
                <div>
                    <h1>Todo List</h1>
                    <div style={{display:'flex',marginLeft:'40%'}}>
                    <CustomizedInputs onChange={(e)=>this.setState({value:e.target.value})} />

                    <OutlinedButtons style={{padding:'7px',width:'80px'}} onClick={()=> this.props.add(this.state.value)} value='Add'  />
                    </div>
                    <div>
                        <ul >
                        {this.state.data.map((v,i)=>{
                            return <li style={{display:'flex',textAlign:'center',marginLeft:'45%'}} key={i}>
                            <span style={{marginTop:'1%'}}>{v.value}</span>
                            <OutlinedButtons style={{padding:3,width:'60px'}} onClick={()=> this.props.editTodo(i,this.state.id)} value='Edit'  />
                            <OutlinedButtons style={{padding:3,width:'60px'}} onClick={()=> this.props.delTodo(i,this.state.id)} value='Delete'  /> </li>
                        })}
                        </ul>
                    </div>
                </div>
            )
        }
    }

    const mapStateToProps = (state) => {
        return {
        Todo : state.name
        }
    }
    const mapDispatchToProps = (dispatch)=>{
    return {
        add : (todo) => dispatch(add(todo)),
         delTodo:(ind,id)=>dispatch(delTodo(ind,id)),
         editTodo:(ind,id)=>dispatch(editTodo(ind,id)),
        //  cancel:(ind)=>dispatch(cancel(ind)),
        //  update:(ind,updValue)=>dispatch(update(ind,updValue))
    }
    }
    export default connect(mapStateToProps,mapDispatchToProps) (Home)