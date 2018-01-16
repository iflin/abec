    var colors = d3.scaleOrdinal(d3.schemeCategory20c);


    var svg = d3.select("#people_net"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        node,
        link;


    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function (d) {return d.id;}).distance(100).strength(1))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

    //讀入json資料//
    d3.json("network/network.json", function (error, graph) {
        if (error) throw error;
        update(graph.links, graph.nodes);
    })

    function update(links, nodes) {
        link = svg.selectAll(".link")
            .data(links)
            .enter()
            .append("line")
            .attr("class", "link")
        .style("stroke-width", function(d) {
                return d.value;
            }) //連結線的寬度//
        .style("stroke","#a5a5a5") //連結線的顏色//


        node = svg.selectAll(".node")
            .data(nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .call(d3.drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
//                    .on("end", dragended)
            );

        node.append("circle")
            .attr("r", function(d) {
                return (d.N_report/2);
            }) //圓圈大小
            .style("fill", function (d, i) {return colors(i);})

        //圓圈的名字//
        node.append("title") 
            .text(function (d) {return d.id;});
        
        //圓圈的名字的位置//
        node.append("text")
            .attr("dy", -8)
            .text(function (d) {return d.name;});

        simulation
            .nodes(nodes)
            .on("tick", ticked);

        simulation.force("link")
            .links(links);
    }

    function ticked() {
        link
            .attr("x1", function (d) {return d.source.x;})
            .attr("y1", function (d) {return d.source.y;})
            .attr("x2", function (d) {return d.target.x;})
            .attr("y2", function (d) {return d.target.y;});

        node
            .attr("transform", function (d) {return "translate(" + d.x + ", " + d.y + ")";});

//        edgepaths.attr('d', function (d) {
//            return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
//        });
//
//        edgelabels.attr('transform', function (d) {
//            if (d.target.x < d.source.x) {
//                var bbox = this.getBBox();
//
//                rx = bbox.x + bbox.width / 2;
//                ry = bbox.y + bbox.height / 2;
//                return 'rotate(180 ' + rx + ' ' + ry + ')';
//            }
//            else {
//                return 'rotate(0)';
//            }
//        });
    }

    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }


