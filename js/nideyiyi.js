 var foods="荷园一号楼铁板饭 风华园一楼麻辣烫 风华园二楼小炒米饭 点外卖 粉面菜蛋 荷园二号楼酸菜肉丝汤面 风华园二楼水饺 水果捞 风华园二楼便宜套餐 聚英园二楼香肉拌饭 风华园一楼大碗面 荷园一号楼瓦罐汤 匆匆那年石锅饭  外卖东坡顾梅菜扣肉 正味居酸菜鱼 外卖派派克汉堡 俺来也惠生套餐 "
 var food=foods.split(" ")
 var main=document.getElementsByClassName("main")[0]
 main.innerHTML="当然是干饭！"
 var back=document.getElementsByClassName("back")[0]
 var start=document.getElementById("start")
 var stop=true
 var texts=[]
 var colors=[
	 "#51DA93",
	 "#CED142",
	 "#C55415",
	 "#E73626",
	 "#DA204E",
	 "#20DA6D",
	 "#28DA20",
	 "#396FAA",
	 "#9DB4CE",
	 "#89EDAB",
	 "#CBCCEA",
	 "#E7CBEA",
	 "#C76CA8",
	 "#AA9050"
 ]
 function draw(){
	 back.innerHTML=""
	 if(!stop){
		 main.innerHTML=food[parseInt(Math.random()*food.length)]
		 start.innerHTML="就吃它了"
	 }
	 else{
		 start.innerHTML="中午吃点啥"
	 }
	 for(var i=0;i<texts.length;i++){
		 text=texts[i]
		 var span=document.createElement("span")
		 span.style.position="absolute"
		 span.style.top=text.sy+"px"
		 span.style.left=text.sx+"px"
		 span.style.color=text.color
		 span.style.fontSize=text.size+"px"
		 span.style.opacity=1-text.age/100
		 if(stop){
			 span.innerHTML=main.innerHTML
		 }
		 else{
			 span.innerHTML=text.str
		 }
		 back.appendChild(span)
		 text.sy+=text.vy
		 text.agg++
		 if(text.agg>100){
			 texts.splice(i,1)
		 }
	 }
	 if(texts.length<150){
		 texts.push({
			 str:food[parseInt(Math.random()*food.length)],
			 sx:Math.random()*window.innerWidth,
			 sy:Math.random()*window.innerHeight,
			 vy:-Math.random(),
			 color:colors[parseInt(Math.random()*colors.length)],
			 size:Math.random()*20+20,
			 age:Math.random()*20
		 })
	 }
 }
 setInterval(draw,15)
 