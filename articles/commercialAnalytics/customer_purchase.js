function customer_purchase_bar_chart() {

  const dataset = [99, 68, 2];

  const w = 500;
  const h = 500;

  const svg = d3.select("body").append("svg").attr("width", w).attr("height", h).attr("class","graph");

  svg.selectAll("rect").data(dataset).enter()
    .append("rect")
    .attr("x", (d, i) => i * 55)
    .attr("y", (d, i) => h - 3 * d)
    .attr("width", 50)
    .attr("height", (d, i) => d * 3)
    .attr("fill", "navy")
    .attr("class", "bar")
    .append("title")
    .text((d)=>(d)+" %")
    .attr("class","bar")
}