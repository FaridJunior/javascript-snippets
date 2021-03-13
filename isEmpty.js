function Workshop(teacher){
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question){
  console.log(this.teacher +  question)
}

const deepJS = new Workshop("t1");
const reactJS = new Workshop("t2");

// deepJS.constructor 

deepJS.__proto__ === Workshop.prototype

deepJS.ask("how are you?")
reactJS.ask("what ?")


let x =  5;
let y = x;
Object.is(x , y)

x=3;

Object.is(x , y)
let xo = {a : 2};
let yo = xo;
Object.is(x , y)

xo = {a : 3};






let forEach = (array, fn) => {
  // console.log(this);
  for(let i = 0 ; i < array.length ;i++){
    fn(i)
  }
}



class Todos{
  constructor(){
    this.todos = [];
    this.doneTodos = [];
    this.unDoneTodos = [];
  }
  
  addTodo(id, content){
    console.log("hello  world");
    this.todos.push({id, content});
    let ar = [1,2,3];
    ar.forEach(this.unDone, this)
  }
  
  addManyTodos(ar){
    forEach(ar, function addTodo(todo){
      console.log(this)
      // this.addTodo(todo.id , todo.content)
    })
    console.log(this)
  }
  
  unDone(id){
    this.unDoneTodos.push(id);
    // console.log(this);    
  }
}

const todo = new Todos()

todo.addTodo(1, "do jop")

todo.addManyTodos([{id:1,content:"pla"},{id:2,content:"pla pla"}])



forEach([1,2,4],console.log)

let ret = ["1","7","11"].map((num)=> parseInt(num));
parseInt("1",0)
parseInt("2",1)
parseInt("11",2)

isNaN("pal")
Number.isNaN("pla")




console.log(ret)


12 >>> 0;
12 >>> 1;
1.2 >> 0;
12.34 >> 0;
"1" >>> 0;
"pla" >>> 0;
NaN >>> 0;
undefined >>> 0;
-0 >>> 0;
Infinity >>> 0;
-Infinity >>> 0;






parseInt(2, 4)

Number(0xFF)
