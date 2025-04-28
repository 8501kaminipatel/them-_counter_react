import { ADD, REDUCE } from "./action";


const count={
    count:10
}

const counterReducer = (state=count, action) => {
    switch (action.type) {
        case ADD:
          return { count: state.count + 1 };
        case REDUCE:
          return { count: state.count - 1 };
       
        default:
          return state;
      }
}

export default counterReducer;


