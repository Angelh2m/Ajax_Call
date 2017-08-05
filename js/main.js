


    var page = 1;

    document.getElementById("btn").addEventListener("click", function(){
      if (page < 5) {


          var request = new XMLHttpRequest();

          request.open('GET', 'index-'+ page +'.html');


          request.onload = function (){
            if(request.readyState === 4 ){
              var load = document.getElementById('ajax');
              load.insertAdjacentHTML('beforeend', request.responseText);

              loader();

            }
          };


          request.send();

          page++;

      }else{
        console.log('No more to show!');
        document.getElementById('btn').innerHTML = 'Action Finished :)';
      }

    });

    function loader() {

      var images = document.getElementsByClassName('fadein');

      for(i = 0; i < images.length; i++ ){
        images[i].classList.add('loaded');
      }

    }
