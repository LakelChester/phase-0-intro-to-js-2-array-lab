// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name) {
    console.log(cats.push("Ralph"), name);
  }
  
  function destructivelyPrependCat(name){
    console.log(cats.unshift("Bob"),name)
  }

  function destructivelyRemoveLastCat(){
    console.log(cats.pop())
  }

  function destructivelyRemoveFirstCat(){
    console.log(cats.shift())
  }

  function appendCat(name){
    const newCats = [...cats, name]
    return newCats
  }
   
  function prependCat(name){
    const copyNewCats = [name, ...cats]
    return copyNewCats
  }

  const removeLastCat = (name) => {
    let newRemoveLastCat = [...cats];
    newRemoveLastCat.pop(name);
    return newRemoveLastCat;
}

const removeFirstCat = (name) => {
  let newRemoveFirstCat = [...cats];
  newRemoveFirstCat.shift(name);
  return newRemoveFirstCat;
}
