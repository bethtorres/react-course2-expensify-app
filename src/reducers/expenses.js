// Expsness reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => action.id !== expense.id); // (({id}) => action.id !== id)
        case 'EDIT_EXPENSE':
            return state.map((expense)=> {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else { 
                    return expense;
                };
            });
        default:
            return state;
    }
};

//export default expensesReducer;