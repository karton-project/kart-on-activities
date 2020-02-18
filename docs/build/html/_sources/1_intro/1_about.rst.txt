==================================================
Kart-ON Language and Activities
==================================================

Programming education has become an integral part of the primary school curriculum. However, most programming practices rely heavily on computers and electronics which causes inequalities across contexts with different socioeconomic levels. Kart-ON programming environment introduces a new and convenient way of using tangibles for coding in classrooms. Our programming environment, Kart-ON, is designed as an affordable means to increase collaboration among students and decrease dependency on screen-based interfaces. Kart-ON is a tangible programming language that uses everyday objects such as paper, pen, fabrics as programming objects and employs a mobile phone as the compiler.

In a classroom setting with Kart-ON, groups of 3 or 4 students have physical cards to be used in solving the given task. The tasks can be drawing a snowman, moving an airplane or simulating the Earth's orbit. To do so, the children use the card blocks to design an algorithm. After they complete the algorithm for the task, they can request a smartphone or tablet to compile their program and see the digital output. 

Kart-ON uses \textit{p5.js}, a JavaScript library for creative coding, to draw shapes and animations. For example, students can animate a simple moving circle, with the following program text:

```
|create variable: c init: 0|
|background r: 255, g: 255, b: 255|
|ellipse x: c y: 20 w: 10 h: 10|
|increase the value of: c by: 1|
```

In this program "create variable" command executes once in the setup. As program runs in every frame, the rest of the program executes forever: The value of c will increase, background will be repainted again and the circle will move toward x axis by one pixel. We modified the commands and the structure based on the student needs and best practices from the field \cite{Resnick2005}. We developed the language in an iterative way informed through regularly meeting with K4-6 grade students. 

New variables and objects can be defined in two possible ways as seen in Figure \ref{fig:function}: (1) They can assign the function to an object (a LEGO brick, a toy or a sketch of the function) or (2) use text in cards to start and end the function definition. We used Tensorflow to learn new objects with transfer learning. With this approach, our system returns \%80+ accuracy when 20+ images given for one object class. 

To recognize the text on pre-defined cards, we include Firebase ML Vision to our app, which allows the app to recognize in real-time with good results. After understanding the text, we used a fuzzy-search library to understand the code when the text recognizer returns a text with smaller errors. Additionally, students can use play-dough, fabrics or any other object in their program to represent colors if they are not familiar with the RGB or HSL representation. 


