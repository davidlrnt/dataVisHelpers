const generateDPath = (data, scale) => {
  const dataWidth = scale.width/(data.length-1)
  const max = Math.max.apply(null, data);
  const min = Math.min.apply(null, data);
  let path = "";
  let currentX = 0;

  for (var i = 0; i < data.length; i++) {
    path += " L" + currentX + " " + (scale.height - (data[i]-min)/(max-min)*scale.height);
    currentX += dataWidth;
  };
  return path
}

// passing array of objects with keys value and date
const generateDPath = (data, scale) => {
  data = data.sort((a,b) => {return a.date - b.date})

  const maxY = Math.max.apply(Math, data.map(function(o){return o.value;}))
  const minY = Math.min.apply(Math, data.map(function(o){return o.value;}))

  const maxX = Math.max.apply(Math, data.map(function(o){return o.date;}))
  const minX = Math.min.apply(Math, data.map(function(o){return o.date;}))
    
  let path = "";  
  for (var i = 0; i < data.length; i++) {
    path += " L" + ((data[i].date-minX)/(maxX-minX))*scale.width + " " + (scale.height - (data[i].value-minY)/(maxY-minY)*scale.height);
  };
  return path
}

export default generateDPath;