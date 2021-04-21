$(document).ready(function () {
  var xmlHttp = new XMLHttpRequest();
  var url = "https://cparros.github.io/football-visualization-project/data/derekCarrData.json";
  xmlHttp.open("GET", url, true);
  xmlHttp.send();
  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      //  console.log(data)

      var week = data.map(function (game) {
        return game.week;
      });

      var yards = data.map(function (game) {
        return game.PsYds;
      });

      var comp = data.map(function (game) {
        return game.Cmp;
      });

      var att = data.map(function (game) {
        return game.Att;
      });

      var sacks = data.map(function (game) {
        return game.Sack;
      });

      var ints = data.map(function (game) {
        return game.Int;
      });

      var tds = data.map(function (game) {
        return game.PsTD;
      });

      var opponent = data.map(function (game) {
        return game.opponent;
      });

      var ctx = $("#baker-chart");

      window.myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: week,
          datasets: [
            {
              label: "Derek Carr Yards Per Game/Week",
              data: yards,
              backgroundColor: ["red"],
              borderColor: ["red"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Derek Carr Completions Per Game/Week",
              data: comp,
              backgroundColor: ["green"],
              borderColor: ["green"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Derek Carr Pass Attempts Per Game/Week",
              data: att,
              backgroundColor: ["orange"],
              borderColor: ["orange"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Derek Carr Sacks Per Game/Week",
              data: sacks,
              backgroundColor: ["aqua"],
              borderColor: ["aqua"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Derek Carr Interceptions Per Game/Week",
              data: ints,
              backgroundColor: ["pink"],
              borderColor: ["pink"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Derek Carr Passing TDs Per Game/Week",
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


      var ctxTwo = $("#derek-chart-two");
      window.myChart = new Chart(ctxTwo, {
        type: "radar",
        data: {
          labels: opponent,
          datasets: [
            {
              label: "Derek Carr Interceptions Per Game/Week",
              data: ints,
              backgroundColor: ["silver"],
              borderColor: ["silver"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Derek Carr Passing TDs Per Game/Week",
              data: tds,
              backgroundColor: ["black"],
              borderColor: ["black"],
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





    }
  };
});