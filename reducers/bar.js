const initialState = "this is bar!"

export default function update(state = initialState, action) {
  switch(action.type){
    case "SET_BAR":
      return action.bar;
    default:
      return state;
  }
}