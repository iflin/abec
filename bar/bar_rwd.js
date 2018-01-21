  // SETUP
      var bar_tooltip = d3.select("#p2").append("div").attr("id", "bar_tooltip");


  var svg_bar = d3.select("#people_paper_bar"),
      margin = {
          top: 20,
          right: 40,
          bottom: 30,
          left: 60
      },
      x = d3.scaleBand().padding(0.1),
      y = d3.scaleLinear(),
      theData = undefined;




  var g = svg_bar.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  g.append("g")
      .attr("class", "axis axis--x");

  g.append("g")
      .attr("class", "axis axis--y");


  // DRAWING

  function draw() {

      //    抓取所在區域的box尺寸  
      var bounds = svg_bar.node().getBoundingClientRect(),
          width = bounds.width - margin.left - margin.right,
          height = bounds.height - margin.top - margin.bottom;

      x.rangeRound([0, width]);
      y.rangeRound([height, 0]);

      g.select(".axis--x")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

      g.select(".axis--y")
          .call(d3.axisLeft(y).ticks(10));

      g.append("text")
          //    .attr("transform", "rotate(-90)")
          .attr("x", -8)
          .attr("y", -8)
          .attr("dy", "0.71em")
          .attr("text-anchor", "end")
          .text("人數");

      var bars = g.selectAll(".bar")
          .data(theData);

      // ENTER
      bars
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function (d) {
              return x(d.letter);
          })
          .attr("y", function (d) {
              return y(d.frequency);
          })
          .attr("width", x.bandwidth())
          .attr("height", function (d) {
              return height - y(d.frequency);
          })
          .on("mousemove", function (d) {

        bar_tooltip.style("left", d3.event.pageX + "px")
                  .style("top", d3.event.pageX + "px")
                  .style("display", "inline-block")
                  .html((d.letter) + "<br><span>" +
                   "人數" + (d.frequency) + "人" + "<br><span>" +
                   "佔比" + Math.round(((d.frequency / 4732) * 100) * 100) / 100 + "%" + "</span>");
          })
          .on("mouseout", function (d) {
              bar_tooltip.style("display", "none");
          });

      // UPDATE
      bars.attr("x", function (d) {
              return x(d.letter);
          })
          .attr("y", function (d) {
              return y(d.frequency);
          })
          .attr("width", x.bandwidth())
          .attr("height", function (d) {
              return height - y(d.frequency);
          });

      // EXIT
      bars.exit()
          .remove();

  }

  // LOADING DATA

  function loadData(tsvFile) {

      d3.tsv(tsvFile, function (d) {
          d.frequency = +d.frequency;
          return d;

      }, function (error, data) {
          if (error) throw error;

          theData = data;

          x.domain(theData.map(function (d) {
              return d.letter;
          }));
          y.domain([0, d3.max(theData, function (d) {
              return d.frequency;
          })]);

          draw();

      });
  }

  // START!

  window.addEventListener("resize", draw);
  loadData("bar/data.tsv");