function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1){
    return 'There is nobody waiting to be served!'
  }
  else{
    var serving = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${serving}.`
  }
}

function currentLine(katzDeliLine){
  var line = []
  for(var i=0;i<katzDeliLine.length;i++){
    line.push(` ${i+1}. ${katzDeliLine[i]}`)
  }
  if(katzDeliLine.length===0){
    return 'The line is currently empty.'
  }
  else{
    return `The line is currently:${line}`
  }
}