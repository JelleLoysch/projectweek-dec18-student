function onMouseDown(count, args){
	return count +1
}

function onMouseDown2(state, args){
	return {count: state.count+1}
}

function counter3() {
	function onMouseDown(state, args){
	return {count: state.count+1} };
	
	return {controller:{onMouseDown}};
}

function counter4(){
	function onMouseDown(state, args){
	return {count: state.count+1} };
	
	function onKeyDown(state,args){
	return {count:0} }; 
	
	return {controller: {onMouseDown, onKeyDown}};
}

function counter5() {
	function onMouseDown(state, args) { 
			
		
			if(args.shift) {
				if(state.count == 0) {
					return {count:0};
				}
				return {count: state.count-1};
			}
			return  {count: state.count +1};
	 }
	 function onKeyDown(state,args) {

	 	if(args.key == "ArrowUp") {
	 		return {count: state.count +1};
	 	}
		if(args.key == " ") {
	 		return {count: state.count +1};
	 	}
	 	if (args.key == "ArrowDown") {
	 		if(state.count == 0) return {count:0};
	 		return {count: state.count -1};

	 	}
	 	
	 	if(args.key == 0) {
	 		return {count: 0};
	 	}
	 	
	 		return {count: state.count};
	 }
    return {controller: {onMouseDown, onKeyDown} };
}

function counter6() {
	function onMouseDown(state, args) { 	
	if(args.shift) {
		if(state.count == 0) {
			return {count:0};
		}
			return {count: state.count-1};
		}
			return  {count: state.count +1};
	 }
	 function onKeyDown(state,args) {

	 	if(args.key == "ArrowUp") {
	 		return {count: state.count +1};
	 	}
		if(args.key == " ") {
	 		return {count: state.count +1};
	 	}
	 	if (args.key == "ArrowDown") {
	 		if(state.count == 0) return {count:0};
	 		return {count: state.count -1};

	 	}
	 	
	 	if(args.key == 0) {
	 		return {count: 0};
	 	}
	 	
	 		return {count: state.count};
	 }
	 
	function increment(state) { 
		return {count: state.count+1};
	}

    function decrement(state) { 
		if (state.count == 0)
			return {count: 0}
		return {count: state.count -1};
	}

    function reset(state) { 
		return {count:0};
	}	
	
    const controller = { onMouseDown, onKeyDown };
    const model = { increment, decrement, reset };
    return { controller, model };
}

function counter7() {
	function onMouseDown(state, args) { 
			
		
			if(args.shift) {
				if(args.ctrl) {
					if(state.count < 5) {
						return {count: 0};
					}
					return {count: state.count -5};

				}
				else {
						if(state.count <= 1) {
							return {count: 0};
							
					}
						
					
					return {count: state.count -1};
					}
				}


					else {
						if(args.ctrl) {
							return {count: state.count +5};
						}
						return {count: state.count +1};
					}

				}


	 function onKeyDown(state,args) {

	 	if((args.key == "ArrowUp" && args.ctrl) ||(args.key==" " && args.ctrl))  {
            if(state.count < 0){
                 return {count:0};
             }
	 		return {count: state.count +5};
	 	}
         if(args.key == "ArrowUp"|| args.key==" ") {
	 		return {count: state.count +1};
	 	}
         if((args.key == "ArrowDown"|| args.key==" " )&& args.ctrl) {
             if(state.count <= 0){
                 return {count:0};
             }
	 		return {count: state.count -5};
	 	}
	 	if (args.key == "ArrowDown") {
	 		if(state.count == 0) return {count:0};
	 		return {count: state.count -1};

	 	}
         if(args.key == 0) {
	 		return {count: 0};
	 	}
    
	 	
	 		return {count: state.count};
	 }


	 function reset(state) {
	 	return {count: 0};

	 }
	 
	 function increment(state) {
	 	return {count: state.count +1};
	 }

	 function decrement(state) {
	 		
	 		if(state.count == 0 ) 
					return {count:0}; 
					return {count: state.count -1};


	 }

	 function add(state,amount) {
	 	if(state.count + amount < 0 ) return {count:0}; 
			return {count: state.count + amount};
	 }

    const controller = { onMouseDown, onKeyDown };
    const model = { increment, decrement, reset, add };
    return { controller, model };
}



function chronometer() {
	
	
function onTimerTick(state, dt){
	return {elapsedTime: dt + state.elapsedTime};
}
function timePassed (state, dt) {
	return {elapsedTime: dt + state.elapsedTime};
}
	
	const controller = {onTimerTick};
	const model = {timePassed};
	return {controller, model};
	
	
	
}


function chronometer2(){

function toggle(state){
  if(state.active === false){
    return {active:true};
  }
  else if(state.active === true){
    return {active:false};
  }
  else{
    return {active:true};
  }
}

function onKeyDown(state, args, dt)
{
  if(args.key == " "){
    return {elapsedTime: state.elapsedTime, active:!state.active};
  }
else if(args.key == "0")
{
  return reset(state);
}
}

function reset(state) {
    return {elapsedTime: 0, active:state.active};
 }

function timePassed(state, dt){
  if(state.active === true){
    return {elapsedTime:dt + state.elapsedTime, active:state.active};
  }
  else if(state.active === false){
    return {elapsedTime: state.elapsedTime, active:state.active};
  }

   }

  function onTimerTick(state, dt){
    return timePassed(state, dt);
  }

  const controller = { onTimerTick, onKeyDown };
  const model = { timePassed, toggle, reset};
  return { model, controller };
}

function circle(){

  function render(state){
      return [{type:"circle", center:{x: 100, y: 100}, radius:10, color:"red"}];
  }

  const controller = {};
  const model = {};
  const view = { render };
  return { view, model, controller };
}

function circle2(){
  function render(state){
      return [{type:"circle", center:state.position, radius:10, color:"red"}];
  }

  function moveTo(state, position){
      return {position: {x: position.x,y:position.y}};
  }

  function onMouseDown(state, args){
        return {position: args.position}
  }

  const controller = { onMouseDown };
  const model = { moveTo };
  const view = { render };
  return { view, model, controller };
}

function circle3(){
  function render(state){
      return [{type:"circle", center:state.position, radius:10, color:"red"}];
  }

  function moveTo(state, position){

      return {position: {x: position.x,y:position.y}};
  }

  function onMouseMove(state, args){
        return {position: args.position}
  }

  const controller = { onMouseMove };
  const model = { moveTo };
  const view = { render };
  return { view, model, controller };
}

function drawing(){

    function render(state){
        if (state.addMode){
            return [{type: "circle", center: state.position, radius: 2, color: "red"}];
        } else {
            let foo = [];
            for (let i = 0; i < state.dots.length; i++) {
                foo.push({type: "circle", center: state.dots[i], radius: 2, color: "green"});
            }
            foo.push({type: "circle", center: state.position, radius: 5, color: "red"});
            console.log(foo);
            return foo;
        }


    }

    function moveTo(state, position){
        if (state.addMode){
            let foo = [...state.dots, position];

            return {position: position, dots: foo, addMode: true};
        } else {
            return {position: position, dots: [], addMode: false};
        }
    }

    function setAddMode(state, addMode){
        return {position: state.position, dots: state.dots, addMode: addMode};
    }

    function onMouseMove(state, args) {
        return moveTo(state, args.position);
    }

    function onMouseDown(state, args){
        return {position: state.position, dots: state.dots, addMode: true};
    }

    function onMouseUp(state, args){
        return {position: state.position, dots: state.dots, addMode: false};
    }

    const view = {render};
    const model = {moveTo, setAddMode};
    const controller = {onMouseMove, onMouseDown, onMouseUp};
    return {view, model, controller};
}




