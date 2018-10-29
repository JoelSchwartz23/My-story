let joel = {
  name: "Joel",
  age: 24,
  favoritecolor: "orange",
  male: true,
  eyes: "blue",
  dominanthand: "left",
  relation: "me"
}

let lisa = {
  name: "Lisa",
  age: 23,
  favoritecolor: "blue",
  male: false,
  eyes: "hazel",
  dominanthand: "right",
  relation: "wife's",
}

let connie = {
  name: "Connie",
  age: 45,
  favoritecolor: "blue",
  male: false,
  eyes: "green",
  dominanthand: "right",
  relation: "mom's",
}

let wilhelmus = {
  name: "Wilhelmus",
  age: 46,
  favoritecolor: "green",
  male: true,
  eyes: "green",
  dominanthand: "right",
  relation: "dad's",
}

let jenifer = {
  name: "Jenifer",
  age: 26,
  favoritecolor: "green",
  male: false,
  eyes: "green",
  dominanthand: "right",
  relation: "sisters",
}

let appa = {
  name: "Appa",
  age: 4,
  male: true,
  eyes: "blue",
  animal: "dog",
  favoritetoy: "socks."
}

let zuko = {
  name: "Zuko",
  age: 3,
  male: true,
  eyes: "blue",
  animal: "dog",
  favoritetoy: "tennis balls."
}

let toph = {
  name: "Toph",
  age: 2,
  male: false,
  eyes: "brown",
  animal: "dog",
  favoritetoy: "bones."
}

let family = [
  joel,
  lisa,
  connie,
  wilhelmus,
  jenifer

]

let pets = [
  appa,
  zuko,
  toph
]

let story1 = `My name is ${family["0"].name} and my favorite color is ${family["0"].favoritecolor}. I am ${family["0"].age} years of age, my dominant hand is ${family["0"].dominanthand} and I have ${family["0"].eyes} eyes.
My ${family["1"].relation} name is ${family["1"].name} and her favorite color is ${family["1"].favoritecolor}. She is ${family["1"].age} years of age, her dominant hand is ${family["1"].dominanthand} and she has ${family["1"].eyes} eyes.
My ${family["2"].relation} name is ${family["2"].name} and her favorite color is ${family["2"].favoritecolor}. She is ${family["2"].age} years of age, her dominant hand is ${family["2"].dominanthand} and she has ${family["2"].eyes} eyes.
My ${family["3"].relation} name is ${family["3"].name} and his favorite color is ${family["3"].favoritecolor}. He is ${family["3"].age} years of age, his dominant hand is ${family["3"].dominanthand} and he has ${family["3"].eyes} eyes.
My ${family["4"].relation} name is ${family["4"].name} and her favorite color is ${family["4"].favoritecolor}. She is ${family["4"].age} years of age, her dominant hand is ${family["4"].dominanthand} and she has ${family["4"].eyes} eyes.`

let story2 = `My first pets name is ${pets["0"].name} and he is ${pets["0"].age} years old. He has ${pets["0"].eyes} eyes and his favorite toys are ${pets["0"].favoritetoy}
My second pets name is ${pets["1"].name} and he is ${pets["1"].age} years old. He has ${pets["1"].eyes} eyes and his favorite toys are ${pets["1"].favoritetoy}
My third pets name is ${pets["2"].name} and she is ${pets["2"].age} years old. She has ${pets["2"].eyes} eyes and her favorite toys are ${pets["2"].favoritetoy}`