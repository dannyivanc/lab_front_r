
$(document).ready(()=>{
  
/*
  $.get( "http://localhost:7777/api/practica", function(data,status,error) {
    console.log( data.practica[0]._id);
  });
 */ 
  /*$.ajax(
    {
        url: 'http://localhost:7777/api/practica',
        async: true,
        type:'GET',
        cache:false,
        dataType: "json",
        success: function(result) {
            console.log('result',result);
        },
        error: function(res, stat) {
            alert(res.toString());
            alert(stat.toString());
        }
    });
return false;*/
  // Perform other work here ...
   
  // Set another completion function for the request above
  //2.8.0
  //var ctx = document.getElementById('myChart');
  //var ctx = document.getElementById('pieChart').getContext('2d');
  var ctx = $('#pieChart');
  //var ctx = 'myChart';
  
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['REVISADOS', 'NO REVISADOS', 'FALTANTES'],
      datasets: [{
        label: 'Label',
        data: [19 , 7, 4],
        backgroundColor: [
          '#008d4c',
          '#db8b0b',
          '#d33724'
        ],
        borderWidth: 1
      }]
    },
    options: {
       cutoutPercentage: 30,
      responsive: true,
      animation : {
        animateScale:true,
        animateRotate:true
      }
      
  
    }
  });

  var ctxBar = document.getElementById("barChart");
  var myChartBar = new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ["Lab 1", "Lab 2", "Lab 3", "Lab 4", "Lab 5", "Lab 6", "Lab 7", "Lab 8", "Lab 9", "Lab 10"],
      datasets: [{
        label: 'REVISADOS',
        data: [15, 13, 20, 20, 19, 20, 18, 17, 15, 16],
        backgroundColor: [
          '#00a65a',
          '#00a65a',
          '#00a65a',
          '#00a65a',
          '#00a65a',
          '#00a65a',
          '#00a65a',
          '#00a65a',
          '#00a65a',
          '#00a65a',
        ],
        borderWidth: 1
      },
      {
        label: 'NO REVISADOS',
        data: [10, 9, 7, 5, 2, 3, 8, 3, 8, 7],
        backgroundColor: [
          '#f39c12',
          '#f39c12',
          '#f39c12',
          '#f39c12',
          '#f39c12',
          '#f39c12',
          '#f39c12',
          '#f39c12',
          '#f39c12',
          '#f39c12',
        ],
        borderWidth: 1
      },
      {
        label: 'FALTANTES',
        data: [5, 8, 3, 5, 9, 7, 4, 3, 5, 7],
        backgroundColor: [
          '#f56954',
          '#f56954',
          '#f56954',
          '#f56954',
          '#f56954',
          '#f56954',
          '#f56954',
          '#f56954',
          '#f56954',
          '#f56954',
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      scales: {
        
        yAxes: [{
          ticks: {
            beginAtZero: true,
            
          }
        }]
      }
    }
  });
}); 
