function customer_purchase_bar_chart() {

  var canvas = document.getElementById('canvas');

  if (canvas.getContext) {
    var context=canvas.getContext('2d');
    const dataset = [99, 68, 2];

    const w = 500;
    const h = 500;

    const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

    
  }

}