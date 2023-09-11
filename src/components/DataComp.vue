<template>
  <div class="chart-container">
    <div class="bar-chart"></div>
    <div class="pie-chart"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
import axios from "axios";

export default {
  name: "CombinedChart",
  mounted() {
    this.fetchBarChartDataAndDrawChart();
    this.fetchPieChartDataAndDrawChart();
  },
  methods: {
    fetchBarChartDataAndDrawChart() {
      axios
        .get("http://localhost:8201/student") // 替换为第一个图表的数据API地址
        .then((response) => {
          const dataset = response.data;
          this.drawBarChart(dataset);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchPieChartDataAndDrawChart() {
      axios
        .get("http://localhost:8201/course") // 替换为第二个图表的数据API地址
        .then((response) => {
          const dataset = response.data;
          this.drawPieChart(dataset);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    drawBarChart(data) {
      
      const xField = "name"; // 数据表中作为横坐标的字段名
      const yField = "gpa"; // 数据表中作为纵坐标的字段名

      const svg = d3
        .select(".bar-chart")
        .append("svg")
        .attr("width", 1500)
        .attr("height", 1500)
        .attr("transform", "translate(25, 70)");

      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d[xField]))
        .range([0, 500])
        .paddingInner(0.3)
        .paddingOuter(0.01);

      const yScale = d3.scaleLinear().domain([0, 5.0]).range([300, 0]);

      const xAxis = d3.axisBottom(xScale);
      xAxis.tickFormat((d) => d); //x轴

      svg.append("g").attr("transform", "translate(30, 300)").call(xAxis); //向右移动30
      svg
        .selectAll(".tick text")
        .attr("transform", "rotate(-45)") // 旋转标签以适应空间
        .style("text-anchor", "end"); // 将标签锚定在末尾
      //定义Y轴
      const yAxis = d3.axisLeft(yScale);

      //创建Y轴
      svg
        .append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + 30 + ",0)")
        .call(yAxis);
        svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d) => xScale(d[xField]) + 30)
  .attr("y", (d) => yScale(d[yField]))
  .attr("width", xScale.bandwidth())
  .attr("height", (d) => 300 - yScale(d[yField]))
  .attr("fill", "steelblue")
  svg.append("text")
        .attr("x", 270) // 设置标题的X坐标位置
        .attr("y", 25) // 设置标题的Y坐标位置
        .attr("text-anchor", "middle") // 设置文本居中对齐
        .style("font-size", "16px") // 设置标题的字体大小
        .text("学生总绩点条形图"); // 设置标题内容


    

    },
    drawPieChart(data) {
      
      const width = 350;
      const height = 350;
      const radius = Math.min(width, height) / 2;

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const arc = d3.arc().outerRadius(radius - 10).innerRadius(0);

      const pie = d3
        .pie()
        .sort(null)
        .value((d) => d.credit);
        

      const svg = d3
        .select(".pie-chart")
        .append("svg")
        .attr("width", 400)
        .attr("height", 600)
        .append("g")
        .attr("transform", `translate(${width / 2+20}, ${height / 2+90})`);
        

      const g = svg
        .selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");

      g.append("path")
        .attr("d", arc)
        .style("fill", (d) => color(d.data.name));

      g.append("text")
        .attr("transform", (d) => `translate(${arc.centroid(d)+30})`)
        .attr("dy", ".35em")
        .style("font-size", "14px")
        .text((d) => `${d.data.name} - ${d.data.credit}学分`); 
      svg.append("text")
        .attr("x", 0)
        .attr("y", -height / 2) // 根据需要设置标题的y坐标
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .text("学生课程学分占比饼图"); // 根据需要设置标题内容
    },
  },
};
</script>

<style scoped>
.chart-container {
  width:100%;
  display: flex;
  flex-wrap: wrap;   
  /* 超出自动换行 */
  /* justify-content: space-between; */
  /* flex-direction:row;  */
}

.bar-chart {
  width: 48%;
  height: 450px;

  
 
}

.pie-chart {
  width: 48%;
  height: 450px;
  padding: 0px;
  
 
}


.y-axis text {
  font-size: 12px; /* 调整刻度标签的字体大小 */
}
</style>
