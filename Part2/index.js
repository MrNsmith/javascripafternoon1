console.log(`The house always wins`)
const grabId = document.getElementById('grab-id')
const assignAtt = document.getElementById('assign-att')
console.log(grabId)
console.log(assignAtt)
let setCard = () => {
  const card = document.getElementById(grabId.value);
  card.style.color = assignAtt.value;
}
