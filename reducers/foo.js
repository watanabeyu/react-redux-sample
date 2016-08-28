const initialState = "this is foo!"

export default function update(state = initialState, action) {
  switch(action.type){
    case "SET_FOO":
      return action.foo;
    default:
      return state;
  }
}