export function set_foo(str) {
  return {
    type:"SET_FOO",
    foo:str
  }
}

export function set_bar(str) {
  return {
    type:"SET_BAR",
    bar:str
  }
}