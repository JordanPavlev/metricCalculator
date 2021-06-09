function metricConverter ([arg1, arg2, arg3]) {
  let size = parseFloat(arg1);
	let sourceMetric = arg2.toLowerCase();
	let destMetric = arg3.toLowerCase();

	if (sourceMetric === "km") {
    size = size / 0.001;
  }

	if (sourceMetric === "mm") {
    size = size / 1000;
  }
	
	if (sourceMetric === "cm") {
    size = size / 100 ;
  }

	if (sourceMetric === "ft") {
    size = size / 3.2808399 ; 
  }

	if (sourceMetric === "yd") {
    size = size / 1.0936133 ;
  }

	if (sourceMetric === "in") {
    size = size / 39.3700787 ;
  }

	if (sourceMetric === "mi") {
    size = size / 0.000621371192 ;
  }

	if (destMetric === "ft") {
    size = size * 3.2808399;
  }

	if (destMetric === "mm") {
    size = size * 1000;
  }

	if (destMetric === "cm") {
    size = size * 100;
  }

	if (destMetric === "km") {
    size = size * 0.001;
  }

	if (destMetric === "in") {
    size = size * 39.3700787 ; 
  }

	if (destMetric === "mi") {
    size = size * 0.000621371192 ; 
  }

	console.log (size + " " + destMetric) ;
	

	
}
