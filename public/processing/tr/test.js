// Draw a Car with Function
clearCode();

addCodeInput("fonksiyon tanımla: araba");
addCodeInput("doldur \n 232");
addCodeInput("kenar \n 165");
addCodeInput("boyutlar \n 150 \n 100");
addCodeInput("konum \n 100 \n 50");
addCodeInput("dikdörtgen");
addCodeInput("elips x:125 y:175 w:50 h:50");
addCodeInput("elips x:225 y:175 w:50 h:50");
addCodeInput("bitir");

// Call the Car Function with a Loop
addCodeInput("tekrarla: 12");
addCodeInput("çağır: araba");
addCodeInput("ötele x: 50 y: 20");
addCodeInput("bitir");

runP5Code();

// Draw a Cat
clearCode();

addCodeInput("dörtgen x: 100 y: 150 w: 100 h: 200");
addCodeInput("doldur r: 200 g:100 b:100");
addCodeInput("elips x: 100 y: 350 w:50 h:50");
addCodeInput("elips x: 200 y: 350 w: 50 h: 50");
addCodeInput("üçgen x: 60 y: 60 w: 50 h: 40");
addCodeInput("üçgen x: 190 y: 60 w: 50 h: 40");
addCodeInput("doldur r: 100 g: 90 b:120");
addCodeInput("elips x: 150 y: 150 w: 200 h: 200");
addCodeInput("doldur r: 255 g: 255 b: 255");
addCodeInput("elips x: 120 y: 100 w: 50 h:50");
addCodeInput("elips x: 180 y: 100 w: 50 h: 50");
addCodeInput("doldur r: 0 g: 0 b: 0");
addCodeInput("elips x: 120 y: 100 w: 20 h: 20");
addCodeInput("elips x: 180 y: 100 w: 20 h: 20");
addCodeInput("kenar r: 255 g: 255 b: 255");
addCodeInput("çizgi sx: 150 sy: 170 ex: 120 ey: 180");
addCodeInput("çizgi sx: 150 sy: 170 ex: 130 ey: 190");
addCodeInput("çizgi sx: 150 sy: 170 ex: 180 ey: 180");
addCodeInput("çizgi sx: 150 sy: 170 ex: 170 ey: 190");

runP5Code();

// Draw a Grid of Ellipses
clearCode();

addCodeInput("değişken tanımla n: konumx v: 40");
addCodeInput("değişken tanımla n: konumy v: 40");
addCodeInput("tekrarla: 5");
addCodeInput("tekrarla: 5");
addCodeInput("elips x: konumx y: konumy w: 30 h: 30");
addCodeInput("değerini artır n: konumx v: 50");
addCodeInput("bitir");
addCodeInput("değer ata n: konumx v: 40");
addCodeInput("değerini artır n: konumy v: 50");
addCodeInput("bitir");

runP5Code();

// Conditionals
addCodeInput("eğer: dokunX > 250");
addCodeInput("doldur r: 0 g: 0 b: 255");
addCodeInput("değilse");
addCodeInput("doldur r: 255 g: 0 b: 0");
addCodeInput("bitir");
addCodeInput("ellipse x: 100 y: 100 w: 100 h: 100");

runP5Code();

// Moving Line
addCodeInput("doldur r: 0 g: 0 b: 0");
addCodeInput("çizgi sx: dokunX sy: 0 ex: dokunX ey: height");
runP5Code();