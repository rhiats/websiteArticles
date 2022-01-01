function customer_purchase_bar_chart() {

  var canvas = document.getElementById('svg');

  const dataset = [99, 68, 2];

  const w = 500;
  const h = 500;

  const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

  svg.selectAll("rect").data(dataset).enter().append("rect").attr("x", (d, i) => i * 30)
     .attr("y", (d, i) => h - 3 * d)
     .attr("width", 25)
     .attr("height", (d, i) => d * 3)
     .attr("fill", "navy")
     .attr("class", "bar")

}