export function countReducer(state = 1, action) {
    if (action.type === 'CHANGE') return state + action.change;
    if (action.type === 'INCREASE') return state + 1;
    if (action.type === 'DECREASE') return state - 1;
    if (action.type === 'RESET') return 1;
    return state;
}

export function wordsReducer(state = [], action) {
    if (action.type === 'ADD_WORD') return [action.word, ...state];
    if (action.type === 'SET_WORDS') return action.words;
    if (action.type === 'REMOVE_WORD') {
        return state.filter(word => word._id !== action._id);
    }
    if (action.type === 'TOGGLE_WORD') {
        return state.map(word => {
            if (word._id !== action._id) return word;
            return { ...word, isMemorized: !word.isMemorized };
        });
    }
    return state;
}

export function shouldShowFormReducer(state = false, action) {
    if (action.type === 'ADD_WORD') return false;
    if (action.type === 'TOGGLE_FORM') return !state;
    return state;
}

export function filterModeReducer(state = 'SHOW_ALL', action) {
    return state;
}

/*

1. Dinh nghia store
2. Ket noi ung dung voi store
3. Subcribe store tu component
4. Thay doi gia tri cua store

*/
