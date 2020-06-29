export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '0x';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const polygonArea = (points) => {
  const couplePoint = [];
  for (let i = 0; i <Math.ceil(points.length/2); i++){
    couplePoint[i] = points.slice((i*2), (i*2) + 2);
  }

  const countCouplePoint = couplePoint.length;
  let j = 0;
	let area = couplePoint[countCouplePoint - 1][0] * couplePoint[0][1] - couplePoint[countCouplePoint - 1][1] * couplePoint[0][0];
  while (j<countCouplePoint-1) {
		area += couplePoint[j][0] * couplePoint[j+1][1] - couplePoint[j][1] * couplePoint[j+1][0];
		j++;
	}
	return Math.round(area /= 2);
}