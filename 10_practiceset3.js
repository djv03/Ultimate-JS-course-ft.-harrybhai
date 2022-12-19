// q1 write the programme to print the marks of the students using object

let marks={
    dhruvin:30,
    sahil:32,
    tanmay:23,
    vipu:24
};
for (let index = 0; index < Object.keys(marks).length; index++) {
    console.log("marks of "+ Object.keys(marks)[index]+" is "+ marks[Object.keys(marks)[index]])
}

//q2 write the programme in q1 using for in loop

for (const key in marks) {
  console.log("marks of "+key+" is "+marks[key])
}
