$(document).ready(function () {

  function getBakerData() {
    $.getJSON("./data/bakerMayfieldData.json", function (data) {
      var game = "";
      $.each(data, function (key, value) {
        game += "<tr>";
        game += "<td>" + value.week + "</td>";
        game += "<td>" + value.opponent + "</td>";
        game += "<td>" + value.Att + "</td>";
        game += "<td>" + value.Cmp + "</td>";
        game += "<td>" + value.Sack + "</td>";
        game += "<td>" + value.Int + "</td>";
        game += "<td>" + value.PsYds + "</td>";
        game += "<td>" + value.PsTD + "</td>";
        game += "<td>" + value.Rush + "</td>";
        game += "<td>" + value.RshYds + "</td>";
        game += "<td>" + value.RshTD + "</td>";
      });

      //INSERTING ROWS INTO TABLE
      $("#table").append(game);
    });
  }
  getBakerData();

  function getBlakeData() {
    $.getJSON("./data/blakeBortlesData.json", function (data) {
      var game = "";
      $.each(data, function (key, value) {
        game += "<tr>";
        game += "<td>" + value.week + "</td>";
        game += "<td>" + value.opponent + "</td>";
        game += "<td>" + value.Att + "</td>";
        game += "<td>" + value.Cmp + "</td>";
        game += "<td>" + value.Sack + "</td>";
        game += "<td>" + value.Int + "</td>";
        game += "<td>" + value.PsYds + "</td>";
        game += "<td>" + value.PsTD + "</td>";
        game += "<td>" + value.Rush + "</td>";
        game += "<td>" + value.RshYds + "</td>";
        game += "<td>" + value.RshTD + "</td>";
      });

      //INSERTING ROWS INTO TABLE
      $("#tabletwo").append(game);
    });
  }
  getBlakeData();

  function getDerekData() {
    $.getJSON("./data/derekCarrData.json", function (data) {
      var game = "";
      $.each(data, function (key, value) {
        game += "<tr>";
        game += "<td>" + value.week + "</td>";
        game += "<td>" + value.opponent + "</td>";
        game += "<td>" + value.Att + "</td>";
        game += "<td>" + value.Cmp + "</td>";
        game += "<td>" + value.Sack + "</td>";
        game += "<td>" + value.Int + "</td>";
        game += "<td>" + value.PsYds + "</td>";
        game += "<td>" + value.PsTD + "</td>";
        game += "<td>" + value.Rush + "</td>";
        game += "<td>" + value.RshYds + "</td>";
        game += "<td>" + value.RshTD + "</td>";
      });

      //INSERTING ROWS INTO TABLE
      $("#tablethree").append(game);
    });
  }
  getDerekData();
});