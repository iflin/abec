        var margin_bar = {
                top: 20,
                right: 40,
                bottom: 30,
                left: 60
            },
            width_bar = 600 - margin_bar.left - margin_bar.right,
            height_bar = 400 - margin_bar.top - margin_bar.bottom;

        var bar_tooltip = d3.select("#people_paper_bar").append("div").attr("id", "bar_toolTip");

        var x_bar = d3.scaleBand()
            .range([0, width_bar], .1);

        var y_bar = d3.scaleLinear()
            .range([height_bar, 0]);

        var xAxis_bar = d3.axisBottom(x_bar);

        var yAxis_bar = d3.axisLeft(y_bar)
            .ticks(10);

        var svg_bar = d3.select("#people_paper_bar").append("svg")
            .attr("width", width_bar + margin_bar.left + margin_bar.right)
            .attr("height", height_bar + margin_bar.top + margin_bar.bottom)
            .append("g")
            .attr("transform", "translate(" + margin_bar.left + "," + margin_bar.top + ")");

        d3.tsv("bar/data.tsv", type, function (error, data) {
            if (error) throw error;

            x_bar.domain(data.map(function (d) {
                    return d.letter;
                }))
                .paddingInner(0.1)
                .paddingOuter(0.5);
            y_bar.domain([0, d3.max(data, function (d) {
                return d.frequency;
            })]);

            svg_bar.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height_bar + ")")
                .call(xAxis_bar);

            svg_bar.append("g")
                .attr("class", "y axis")
                .call(yAxis_bar)
                .append("text")
                .attr("class", "label")
                //          .attr("transform", "rotate(-90)")
                .attr("y", -8)
                .attr("x", -8)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("人數");

            svg_bar.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function (d) {
                    return x_bar(d.letter);
                })
                .attr("width", x_bar.bandwidth())
                .attr("y", function (d) {
                    return y_bar(d.frequency);
                })
                .attr("height", function (d) {
                    return height_bar - y_bar(d.frequency);
                })
                .on("mousemove", function (d) {
                    bar_tooltip
                        .style("left", d3.event.pageX+ "px")
                        .style("top", d3.event.pageY+ "px")
//                        .style("display", "inline-block")
                        .html((d.letter) + "<br><span>" + (d.frequency / 4732) * 100 + "%" + "</span>");
                })
                .on("mouseout", function (d) {
                    bar_tooltip.style("display", "none");
                });
        });

        function type(d) {
            d.frequency = +d.frequency;
            return d;
        }
