var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

//button
ctx.strokeStyle = '#99bbad';
ctx.lineWidth = 2
ctx.lineTo(125,50)
ctx.lineTo(220, 80)
ctx.lineTo(210,140)
ctx.lineTo(125,180)
ctx.lineTo(40,140)
ctx.lineTo(30, 80)
ctx.closePath()
ctx.stroke()
//text
ctx.font = 'bold 3rem red Montserrat'
ctx.fillStyle = '#c1b3d7'
ctx.fillText("Let's go",65,120)




// click(){
// ctx.fillStyle = 'rgba(255,255,255,0.1)'
//  })
