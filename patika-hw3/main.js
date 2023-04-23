import './style.css'
import source from "./source.json"



var orangeRed = []
var aliceBlue = []
var deepPink = []
var assistants = [];


function analysisFunction() {
  source.forEach(element => {
    if (element.assistant == true) {
      assistants.push(element)
    } else {
      if (element.group == "OrangeRed") {
        orangeRed.push(element)
      } else if (element.group == "AliceBlue") {
        aliceBlue.push(element)
      } else {
        deepPink.push(element)
      }
    }
  });
}
function createNewJsonFunction() {
  assistants.forEach(element => {
    if (element.group == "OrangeRed") {
      element.students = orangeRed
    } else if (element.group == "AliceBlue") {
      element.students = aliceBlue
    } else {
      element.students = deepPink
    }

  })

}
let result = ""
function createResult() {
  assistants.forEach(element => {
    result += `<p>${JSON.stringify(element, null, 1)}</p>`

  })

}


analysisFunction()
createNewJsonFunction()
createResult()




document.querySelector('#app').innerHTML = `
    <div>
    <p>${result}</p>
    </div>
`
