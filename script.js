// const input = document.getElementById("calculator-input")

// const numButtons = document.querySelectorAll(".numBtn")
// const opButtons = document.querySelectorAll(".opBtn")

// let toBeAddedNums = []
// let toBeSubNums = []
// let toBeMulNums = []
// let toBeDivNums = []

// numButtons.forEach((numBtn) => {
//   numBtn.addEventListener("click", (e) => {
//     input.value += e.target.textContent
//   })
// })

// opButtons.forEach((opBtn) => {
//   opBtn.addEventListener("click", (e) => {
//     switch (e.target.textContent) {
//       case "/":
//         console.log("/ was clicked")
//         toBeDivNums.push(+input.value)
//         input.value = toBeDivNums.reduce((a, b) => a / b)

//         console.log(toBeDivNums)
//         break
//       case "*":
//         console.log("* was clicked")
//         toBeMulNums.push(+input.value)
//         input.value = toBeMulNums.reduce((a, b) => a * b)

//         console.log(toBeMulNums)
//         break
//       case "-":
//         console.log("- was clicked")
//         toBeSubNums.push(+input.value)
//         input.value = toBeSubNums.reduce((a, b) => a - b)

//         console.log(toBeSubNums)
//         break
//       case "+":
//         if (input.value) {
//           toBeAddedNums.push(+input.value)
//           input.value = toBeAddedNums.reduce((a, b) => a + b, 0)

//           console.log(toBeAddedNums)
//         }
//         break
//       default:
//         alert("invalid input")
//         break
//     }
//   })
// })

// document.querySelector(".delBtn").addEventListener("click", (e) => {
//   input.value = input.value.slice(0, -1)
// })
// document.querySelector(".acBtn").addEventListener("click", (e) => {
//   input.value = ""
//   toBeAddedNums = []
//   toBeSubNums = []
//   toBeMulNums = []
//   toBeDivNums = []
// })

const input = document.getElementById("calculator-input")
const numButtons = document.querySelectorAll(".numBtn")
const opButtons = document.querySelectorAll(".opBtn")

let currentValue = ""
let previousValue = ""
let operator = null

numButtons.forEach((numBtn) => {
  numBtn.addEventListener("click", (e) => {
    currentValue += e.target.textContent
    input.value = currentValue
  })
})

opButtons.forEach((opBtn) => {
  opBtn.addEventListener("click", (e) => {
    if (currentValue === "") return
    if (previousValue && operator) {
      calculate()
    } else {
      previousValue = currentValue
    }
    currentValue = ""
    operator = e.target.textContent
  })
})

document.querySelector(".delBtn").addEventListener("click", () => {
  currentValue = currentValue.slice(0, -1)
  input.value = currentValue
})

document.querySelector(".acBtn").addEventListener("click", () => {
  currentValue = ""
  previousValue = ""
  operator = null
  input.value = ""
})

document.querySelector(".eqBtn").addEventListener("click", calculate)

function calculate() {
  if (!previousValue || !currentValue || !operator) return

  const num1 = parseFloat(previousValue)
  const num2 = parseFloat(currentValue)
  let result

  switch (operator) {
    case "+":
      result = num1 + num2
      break
    case "-":
      result = num1 - num2
      break
    case "*":
      result = num1 * num2
      break
    case "/":
      if (num2 === 0) {
        alert("Cannot divide by zero")
        return
      }
      result = num1 / num2
      break
    default:
      alert("Invalid operation")
      return
  }

  input.value = result
  previousValue = result
  currentValue = ""
  operator = null
}
