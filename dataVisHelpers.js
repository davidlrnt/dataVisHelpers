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

export default generateDPath;