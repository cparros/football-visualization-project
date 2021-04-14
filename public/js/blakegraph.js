$(document).ready(function () {
  var xmlHttp = new XMLHttpRequest();
  var url = "http://127.0.0.1:5500/data/blakeBortlesData.json";
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

      var ctx = $("#baker-chart");

      window.myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: week,
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
              data: comp,
              backgroundColor: ["green"],
              borderColor: ["green"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Baker Mayfield Pass Attempts Per Game/Week",
              data: att,
              backgroundColor: ["orange"],
              borderColor: ["orange"],
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