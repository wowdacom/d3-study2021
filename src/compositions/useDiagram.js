import * as d3 from "d3";

export default function({ dashboard }) {
  const myData = ["A", "B", "C", "D", "E"];
  const element = dashboard.value;
  console.log(dashboard.value);
  const drawDiagram = () => {
    const svg = d3.select(element);
    svg
      .selectAll("rect")
      .data(myData)
      .enter()
      .append("rect")
      .attr("x", (d, i) => `${i * 100 + i * 10}`)
      .attr("width", "100")
      .attr("height", "100")
      .attr("fill", "yellow");
    // ... usual append, attr, and transform methods
  };

  const redrawDiagram = () => {
    // update props or the whole diagram based on use-case
  };

  const resizeDiagram = () => {
    // resize the diagram to match viewport props
  };

  return {
    drawDiagram,
    redrawDiagram,
    resizeDiagram,
  };
}
