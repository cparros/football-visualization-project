$(document).ready(function () {
  // function getBakerData() {
    $.getJSON("/football-visualization-project/data/bakerMayfieldData.json", function (data) {
      // console.log(data);
      let weeks = [];
      let yards = [];
      let comps = [];
      let atts = [];
      let sacks = [];
      let ints = [];
      let tds = [];
      let opps = [];

      $.each(data, function (key, value) {
        let week = value.week;
        weeks.push(week);
        // console.log(weeks);

        let yard = value.PsYds;
        yards.push(yard);
        // console.log(yards);

        let comp = value.Cmp;
        comps.push(comp);
        // console.log(comps);

        let att = value.Att;
        atts.push(att);
        // console.log(atts);

        let sack = value.Sack;
        sacks.push(sack);
        // console.log(sacks);

        let int = value.Int;
        ints.push(int);
        // console.log(ints);

        let td = value.PsTD;
        tds.push(td);
        // console.log(tds);

        let opp = value.opponent;
        opps.push(opp);
        // console.log(opps);
      });
      
      var ctx = $("#baker-chart");

      window.myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: weeks,
          datasets: [
            {
              label: "Baker Mayfield Yards Per Game/Week",
              data: yards,
              backgroundColor: ["red"],
              borderColor: ["red"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Baker Mayfield Completions Per Game/Week",
              data: comps,
              backgroundColor: ["green"],
              borderColor: ["green"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Baker Mayfield Pass Attempts Per Game/Week",
              data: atts,
              backgroundColor: ["orange"],
              borderColor: ["orange"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Baker Mayfield Sacks Per Game/Week",
              data: sacks,
              backgroundColor: ["aqua"],
              borderColor: ["aqua"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Baker Mayfield Interceptions Per Game/Week",
              data: ints,
              backgroundColor: ["pink"],
              borderColor: ["pink"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Baker Mayfield Passing TDs Per Game/Week",
              data: tds,
              backgroundColor: ["yellow"],
              borderColor: ["yellow"],
              borderWidth: 3,
              tension: 0.2,
            },
          ],
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        },
      });

      var ctxTwo = $("#baker-chart-two");
      window.myChart = new Chart(ctxTwo, {
        type: "radar",
        data: {
          labels: opps,
          datasets: [
            {
              label: "Baker Mayfield Interceptions Per Game/Week",
              data: ints,
              backgroundColor: ["#ff3c00"],
              borderColor: ["#ff3c00"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Baker Mayfield Passing TDs Per Game/Week",
              data: tds,
              backgroundColor: ["#964800"],
              borderColor: ["#964800"],
              borderWidth: 3,
              tension: 0.2,
            },
          ],
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        },
      });
    });
  }


  // getBakerData();
);
