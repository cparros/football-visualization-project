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
      

      var ctx = $("#blake-chart");

      window.myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: week,
          datasets: [
            {
              label: "Blake Bortles Yards Per Game/Week",
              data: yards,
              backgroundColor: ["red"],
              borderColor: ["red"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Blake Bortles Completions Per Game/Week",
              data: comp,
              backgroundColor: ["green"],
              borderColor: ["green"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Blake Bortles Pass Attempts Per Game/Week",
              data: att,
              backgroundColor: ["orange"],
              borderColor: ["orange"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Blake Bortles Sacks Per Game/Week",
              data: sacks,
              backgroundColor: ["aqua"],
              borderColor: ["aqua"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Blake Bortles Interceptions Per Game/Week",
              data: ints,
              backgroundColor: ["pink"],
              borderColor: ["pink"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Blake Bortles Passing TDs Per Game/Week",
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


      var ctxTwo = $("#blake-chart-two");
      window.myChart = new Chart(ctxTwo, {
        type: "radar",
        data: {
          labels: opponent,
          datasets: [
            {
              label: "Blake Bortles Interceptions Per Game/Week",
              data: ints,
              backgroundColor: ["#D8A328"],
              borderColor: ["#D8A328"],
              borderWidth: 3,
              tension: 0.2,
            },
            {
              label: "Blake Bortles Passing TDs Per Game/Week",
              data: tds,
              backgroundColor: ["#136677"],
              borderColor: ["#136677"],
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