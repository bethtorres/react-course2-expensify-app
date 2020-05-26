import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense,removeExpense } from '../actions/expenses';

// refactor editexpensepage
// setup mapdisplatchto props editexpense and remove expense


export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
                    this.props.editExpense(this.props.expense.id, expense);
                    this.props.history.push('/');
                };
    onRemove = () => {
                    this.props.removeExpense({id: this.props.expense.id});  // use brackets or not per function reqs
                    this.props.history.push('/');
                };
        render() {
            return (
                <div>
                    <h1>Edit Expense</h1>
                    <ExpenseForm 
                        expense = {this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button
                        onClick={this.onRemove}
                    >Remove</button>
                </div>
            );
        }
}

// const EditExpensePage = (props) => {
//     return (
//         <div>
//             <ExpenseForm 
//                 expense = {props.expense}
//                 onSubmit={(expense)=> {
//                     props.dispatch(editExpense(props.expense.id, expense));
//                     props.history.push('/');
//                     console.log('updated', expense)
//                 }}
//             />
//             <button
//                 onClick={()=>{
//                     props.dispatch(removeExpense({id: props.expense.id}));  // use brackets or not per function reqs
//                     props.history.push('/');
//                 }}
//             >Remove</button>
//         </div>
//     )
// };

const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
 editExpense: (id,expense) => dispatch(editExpense(id,expense)),
 removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps,mapDispatchToProps) (EditExpensePage);