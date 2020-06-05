// Draw a Car with Function
clearCode()

addCodeInput("define function: araba")
addCodeInput("fill r: 232 g: 103 b: 103")
addCodeInput("stroke r: 165 g: 165 b: 165")
addCodeInput("rect x:100 y:50 w:150 h:100")
addCodeInput("ellipse x:125 y:175 w:50 h:50")
addCodeInput("ellipse x:225 y:175 w:50 h:50")
addCodeInput("end")

// Call the Car Function with a Loop
addCodeInput("loop: 12")
addCodeInput("call: araba")
addCodeInput("move x: 50 y: 20")
addCodeInput("end")

// Draw a Cat
clearCode()

addCodeInput("rect x: 100 y: 150 w: 100 h: 200")
addCodeInput("fill r: 200 g:100 b:100")
addCodeInput("ellipse x: 100 y: 350 w:50 h:50")
addCodeInput("ellipse x: 200 y: 350 w: 50 h: 50")
addCodeInput("triangle x: 60 y: 60 w: 50 h: 40")
addCodeInput("triangle x: 190 y: 60 w: 50 h: 40")
addCodeInput("fill r: 100 g: 90 b:120")
addCodeInput("ellipse x: 150 y: 150 w: 200 h: 200")
addCodeInput("fill r: 255 g: 255 b: 255")
addCodeInput("ellipse x: 120 y: 100 w: 50 h:50")
addCodeInput("ellipse x: 180 y: 100 w: 50 h: 50")
addCodeInput("fill r: 0 g: 0 b: 0")
addCodeInput("ellipse x: 120 y: 100 w: 20 h: 20")
addCodeInput("ellipse x: 180 y: 100 w: 20 h: 20")
addCodeInput("stroke r: 255 g: 255 b: 255")
addCodeInput("line sx: 150 sy: 170 ex: 120 ey: 180")
addCodeInput("line sx: 150 sy: 170 ex: 130 ey: 190")
addCodeInput("line sx: 150 sy: 170 ex: 180 ey: 180")
addCodeInput("line sx: 150 sy: 170 ex: 170 ey: 190")

// Draw a Grid of Ellipses
clearCode()

addCodeInput("define variable n: konumx v: 40")
addCodeInput("define variable n: konumy v: 40")
addCodeInput("loop: 5")
addCodeInput("loop: 5")
addCodeInput("ellipse x: konumx y: konumy w: 30 h: 30")
addCodeInput("increase value n: konumx v: 50")
addCodeInput("end")
addCodeInput("change value n: konumx v: 40")
addCodeInput("increase value n: konumy v: 50")
addCodeInput("end")
