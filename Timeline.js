function main(){
  let timeline = new Timeline()
  
  timeline.add(()=>print("hello mohamed"),
               timeline.wait(1000),
               ()=>print("now you waited for one second"))
  timeline.repeat(20)(
    timeline.wait(300),
    ()=> print("display message"))
  
  timeline.start()
  setTimeout(()=>timeline.stop(), 3000)
  setTimeout(()=>timeline.reverse(), 4000)
  setTimeout(()=>timeline.start(), 6000)
}

//************************* timeline
class Timeline{
  constructor(){
    this.actions= []
    this.current= 0;
    this.direction= 1;
    this.state= false;
  }

  add(...actions){
    this.actions = this.actions.concat(actions)
  }

  start(){
    this.state = true;
    this.doActions();
  }

  repeat(num=10) {
    return (...cbs)=>{
      for(let i=0; i < num; i++){
        cbs.forEach(cb=> this.add(cb))
      }
    }
  }

  forever(...cbs){
    for(let i=0; i<= 100; i++){
      cbs.forEach(cb=> this.add(cb))
    }
  }

  wait(ms=1000){return ()=>{
    return new Promise(resolve => setTimeout(resolve, ms));
  }}

  stop(){
    this.state= false;
  }

  reverse(){
    this.direction == 1 ?  this.direction = -1 : this.direction = 1;
  }


  async doActions(){
    for(this.current;
        this.current <  this.actions.length && this.current >= 0;
        this.current= this.current + this.direction){
      if(this.state){ await this.actions[this.current]()}else{ break;}
    }
  }

}

main()

// ******************************* utils 
function print(...vars){
  console.log(...vars)
}


