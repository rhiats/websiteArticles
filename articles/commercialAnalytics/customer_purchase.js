function customer_purchase_bar_chart() {

  const dataset = [
    { name: "Sign-In", value: 99}, 
    { name: "Revisit", value: 68},
    { name: "Log-In", value: 2}
  ];

  const w = 500;
  const h = 400;

  const svg = d3.select("body").append("svg").attr("width", w).attr("height", h).attr("class","graph");

  const x = d3.scaleBand().domain(d3.range(dataset.length)).range([0,w])

  const y = d3.scaleLinear().domain([0,100]).range([0,400])

  svg.selectAll("rect").data(dataset).enter()
    .append("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", (d) => y(d.value))
    .attr("width", 50)
    .attr("height", (d, i) => d * 3)
    .attr("fill", "navy")
    .attr("class", "bar")
    .append("title")
    .text((d)=>(d)+" %")
    .attr("class","bar")


  function xAxis(g){

    g.call(d3.axisBottom(x).tickFormat(i => data[i].name)
  }

}