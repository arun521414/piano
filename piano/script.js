//black keys

document.addEventListener("keypress",(e)=>{
	var key = e.key
	if(key==1){
		var element = document.getElementById("black-1")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/c-3.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}

	}
	else if(key==2){
		var element = document.getElementById("black-2")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/d-3.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}
	else if(key==3){
		var element = document.getElementById("black-3")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/f-3.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}
	else if(key==4){
		var element = document.getElementById("black-4")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/g-3.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}
	else if(key==5){
		var element = document.getElementById("black-5")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/a-3.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}
	else if(key==6){
		var element = document.getElementById("black-6")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/c-4.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}
	else if(key==7){
		var element = document.getElementById("black-7")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/d-4.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}
	else if(key==8){
		var element = document.getElementById("black-8")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/f-4.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}
	else if(key==9){
		var element = document.getElementById("black-9")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/g-4.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}
	else if(key==0){
		var element = document.getElementById("black-10")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/a-4.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}
	else if(key=='-'){
		var element = document.getElementById("black-11")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/c-5.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}
	else if(key=='='){
		var element = document.getElementById("black-12")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/d-5.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}
	else if(key=='p'){
		var element = document.getElementById("black-13")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/f-5.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}
	else if(key=='o'){
		var element = document.getElementById("black-14")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/g-5.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}
	else if(key=='i'){
		var element = document.getElementById("black-15")
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/a-5c.mp3"
		audio.play()

		audio.oncanplay = ()=>{
			element.style.background = "orange";
			
		}

		audio.onended = ()=>{
			element.style.background = 'black';
			
		}
	}


})



//white keys

document.addEventListener("keypress",(e)=>{

	var key = e.key

	if(key=='a'){

		var element = document.getElementById('white-1');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/c3.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='s'){

		var element = document.getElementById('white-2');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/d3.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}


	}
	else if(key=='d'){

		var element = document.getElementById('white-3');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/e3.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='f'){

		var element = document.getElementById('white-4');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/f3.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='g'){

		var element = document.getElementById('white-5');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/g3.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='h'){

		var element = document.getElementById('white-6');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/a3.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='j'){

		var element = document.getElementById('white-7');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/b3.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='k'){

		var element = document.getElementById('white-8');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/c4.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='l'){

		var element = document.getElementById('white-9');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/d4.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='m'){

		var element = document.getElementById('white-10');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/e4.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='n'){

		var element = document.getElementById('white-11');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/f4.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='b'){

		var element = document.getElementById('white-12');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/g4.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='v'){

		var element = document.getElementById('white-13');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/a4.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='c'){

		var element = document.getElementById('white-14');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/b4.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='x'){

		var element = document.getElementById('white-15');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/c5.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='z'){

		var element = document.getElementById('white-16');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/d5.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='q'){

		var element = document.getElementById('white-17');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/e5.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='w'){

		var element = document.getElementById('white-18');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/f5.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='e'){

		var element = document.getElementById('white-19');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/g5.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='r'){

		var element = document.getElementById('white-20');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/a5.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
	else if(key=='t'){

		var element = document.getElementById('white-21');
		var audio = new Audio();
		audio.src = "/home/arun/Desktop/piano/sounds/b5.mp3"
		audio.play()

		audio.oncanplay = ()=>{

			element.style.background = "orange";
			element.style.borderBottom = "none";
			element.style.boxShadow = "none";
			
		}

		audio.onended = ()=>{

			element.style.background = "linear-gradient(to bottom,lightblue,#f01a25)";
			element.style.borderBottom = "4px solid black";
			element.style.boxShadow = " 0px 0px 60px 10px #f01a25";
		}
	}
})


//black keys

