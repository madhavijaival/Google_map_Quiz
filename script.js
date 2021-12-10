var count = 0;
var rightA = 0;
var wrongA = 0;
// Initialize and add the map
function initMap() {
    // To remove labels and markers from default map...Styles set
    var removeStyles = [
        {
            //selects all points of interest
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
        },
        //Some color style set 
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#bbbbbb" }]
        },

        //turn off  labels on  man-made features, such as buildings and other structures.
        {
            featureType: "landscape.man_made",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
        },

        //For local road labels turn off
        {
            featureType: "road.local",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
        }
    ];



    // The location of csun
    const csun = { lat: 34.240, lng: -118.527 };
    // The map, centered at csun
    const csunmap = new google.maps.Map(document.getElementById("map"), {
        center: csun,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        zoom: 17,
        mapTypeControl: false,
        draggable: false,
        scaleControl: false,
        scrollwheel: false,
        styles: removeStyles,  // remove label and marker..
        mapTypeControl: false,
        zoomControl: false, //disabled zoom from here
        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: false
    });


    $(document).ready(function () {
        $(" .libR, .libW, .scR, .scW, .rhR, .rhW, .srR, .srW, .shR, .shW, .place, #tot").hide();
        $("#p1").fadeIn('slow');

    });

    function locdraw(a, b, c, d, z) {

        var rect = new google.maps.Rectangle({
            strokeColor: z,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: z,
            fillOpacity: 0.35,
            map: csunmap,
            bounds: new google.maps.LatLngBounds(
                new google.maps.LatLng(a, b),
                new google.maps.LatLng(c, d))
        });

    }

    // google map co-ordinate setup.....

    google.maps.event.addListener(csunmap, 'dblclick', function (event) {
        count++;

        var lat = event.latLng.lat();
        var lng = event.latLng.lng();

        if (count == 1) {
            if (lat <= 34.240399 && lat >= 34.239747 && lng >= -118.530039 && lng <= -118.528622) {
                locdraw(34.239743, -118.530031, 34.240399, -118.528620, 'green');
                $(".libR").fadeIn('slow');
                $("#p2").fadeIn('slow');
                rightA++;


            }
            else {
                locdraw(34.239743, -118.530031, 34.240399, -118.528620, 'red');
                $(".libW").fadeIn('slow');
                $("#p2").fadeIn('slow');
                wrongA++;

            }
        }
        if (count == 2) {
            if (lat >= 34.240644 && lat <= 34.240897 && lng >= -118.526774 && lng <= -118.526082) {
                locdraw(34.240897, -118.526774, 34.240644, -118.526082, 'green');
                $(".scR").fadeIn('slow');
                $("#p3").fadeIn('slow');
                rightA++;

            }
            else {
                locdraw(34.240897, -118.526774, 34.240644, -118.526082, 'red');
                $(".scW").fadeIn('slow');
                $("#p3").fadeIn('slow');
                wrongA++;

            }
        }
        if (count == 3) {
            if (lat >= 34.241319 && lat <= 34.242373 && lng >= -118.526957 && lng <= -118.525659) {
                locdraw(34.242373, -118.526957, 34.241319, -118.525659, 'green');
                $(".rhR").fadeIn('slow');
                $("#p4").fadeIn('slow');
                rightA++;
            }
            else {
                locdraw(34.242373, -118.526957, 34.241319, -118.525659, 'red');
                $(".rhW").fadeIn('slow');
                $("#p4").fadeIn('slow');
                wrongA++;
            }
        }
        if (count == 4) {
            if (lat >= 34.239444 && lat <= 34.240495 && lng >= -118.525165 && lng <= -118.524682) {
                locdraw(34.240495, -118.525165, 34.239444, -118.524682, 'green');
                $(".srR").fadeIn('slow');
                $("#p5").fadeIn('slow');
                rightA++;
            }
            else {
                locdraw(34.240495, -118.525165, 34.239444, -118.524682, 'red');
                $(".srW").fadeIn('slow');
                $("#p5").fadeIn('slow');
                wrongA++;
            }
        }
        if (count == 5) {
            if (lat <= 34.238447 && lat >= 34.238107 && lng >= -118.531385 && lng <= -118.530028) {
                locdraw(34.238107, -118.531385, 34.238447, -118.530028, 'green');
                $(".shR").fadeIn('slow');
                rightA++;
                $(".place").hide();
                $(".libR, .libW, .scR, .scW, .rhR, .rhW, .srR, .srW, .shR, .shW").hide();
                $("#tot").show().delay(10000).fadeOut("slow");
                document.getElementById('tot').innerHTML = "Out of 5 you Answered " + rightA + " right and " + wrongA + " Wrong";
                refresh();

            }
            else {
                locdraw(34.238107, -118.531385, 34.238447, -118.530028, 'red');
                $(".incorrect").show().delay(2000).fadeOut("slow");
                $(".shW").fadeIn('slow');
                wrongA++;
                $(".place").hide(); //hide the places again after finishes the quiz.
                $(".libR, .libW, .scR, .scW, .rhR, .rhW, .srR, .srW, .shR, .shW").hide(); //to hide the correct ans and incorrect ans sentence after completing.
                document.getElementById('tot').innerHTML = "Out of 5 you Answered " + rightA + " right and " + wrongA + " Wrong";

                $("#tot").show().delay(10000).fadeOut("slow");

                refresh();

            }

        }

        function refresh() {
            setTimeout(function () {
                alert('Refresh the page to play again..');
            }, 1500)
        }

    });



}

