import moment from 'moment';
import { 
    setStartDate, 
    setEndDate, 
    setTextFilter, 
    sortByDate, 
    sortByAmount 
} from '../../actions/filters';


test('should generate setstartdate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate setenddate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate setTextFilter action object with text value', () => {
    const text = 'something in'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should generate setTextFilter action object with no value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sortByDate action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate sortByAmount action object', () => {
    expect(sortByAmount()).toEqual({ 
        type: 'SORT_BY_AMOUNT'
    });
});

