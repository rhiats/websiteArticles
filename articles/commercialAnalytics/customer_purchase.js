function customer_purchase_bar_chart() {

  const dataset = [99, 68, 2];

  const w = 500;
  const h = 400;

  const svg = d3.select("body").append("svg").attr("width", w).attr("height", h).attr("class","graph");

  const scale = d3.scaleLinear().domain([0,165]).range([0,165]);

  const x_axis = d3.axisBottom().scale(scale);


  svg.selectAll("rect").data(dataset).enter()
    .append("rect")
    .attr("x", (d, i) => i * 55)
    .attr("y", (d, i) => (h-3) - (3 * d))
    .attr("width", 50)
    .attr("height", (d, i) => d * 3)
    .attr("fill", "navy")
    .attr("class", "bar")
    .append("title")
    .text((d)=>(d)+" %")
    .attr("class","bar")


  const dataset_labels = ["Sign-In", "Revisit", "Log-In"];

  svg.selectAll("text")
       .data(dataset_labels)
       .enter()
       .append("text")
       .call(x_axis)
}