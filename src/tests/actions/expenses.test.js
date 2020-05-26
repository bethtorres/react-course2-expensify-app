import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action obj', ()=> {
    const action = removeExpense({id: '123abd'});
    expect(action).toEqual({   // objects/arrays - use toEqual
        type: 'REMOVE_EXPENSE',
        id: '123abd'
    });
});

test('should setup edit expense action obj', ()=> {
    const action = editExpense('123abd',{note: 'new note value'});
    expect(action).toEqual({   // objects/arrays - use toEqual
        type: 'EDIT_EXPENSE',
        id: '123abd',
        updates: {
            note: 'new note value'
        }
    });
});

test('should setup add expense action obj with values', ()=>{
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action obj with defaults', ()=>{
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            description: '',
            note:'',
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    });
});