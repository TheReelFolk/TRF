angular.module('myApp', ['ngAnimate'])
    .controller('MainController',  function($scope, $sce) {
        $scope.gigs = [
            {
            title    : "Barn Dance",
            month    : 1,
            day      : 27,
            year     : 2023,
            time     : "7:30 PM",
            location : "Utah State Hospital Chapel, Provo",
            link     : "https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NjRxajJjMW82MWozMGI5amM0b2o0YjlrNjBwajhiYjE3NHJtMmI5bmNjcWplZHI0Y2RnajRwMWc3MCA1djc0dm9pMHEzOHZpc2p0M3F2ajhiOWVtZ0Bn&amp;tmsrc=5v74voi0q38visjt3qvj8b9emg%40group.calendar.google.com"
            },
            {
                title    : "Edison Recording Studio Open Mic",
                month    : 2,
                day      : 7,
                year     : 2023,
                time     : "6:30 PM",
                location : "Grove Station, Pleasant Grove",
                link     : "https://grovestationpg.com/"
            },
            {
                title    : "Valentine's Dinner",
                month    : 2,
                day      : 11,
                year     : 2023,
                time     : "5:00 PM & 6:30 PM",
                location : "Evermore Fantasy Park, Pleasant Grove",
                link     : "https://www.evermore.com/winter/valentines-day"
            },
            {
                title    : "Valentine's Dinner",
                month    : 2,
                day      : 14,
                year     : 2023,
                time     : "5:00 PM & 6:30 PM",
                location : "Evermore Fantasy Park, Pleasant Grove",
                link     : "https://www.evermore.com/winter/valentines-day"
            },
            {
                title    : "Book Store Birthday",
                month    : 2,
                day      : 18,
                year     : 2023,
                time     : "1:00 PM - 3:00 PM",
                location : "Printed Garden, Union Park",
                link     : "https://www.theprintedgarden.com/index.html"
            },
            {
                title    : "Small Concert Series",
                month    : 3,
                day      : 3,
                year     : 2023,
                time     : "6:00 PM & 8:00 PM",
                location : "Davis Arts Council, Layton",
                link     : "https://www.davisarts.org/show/the-reel-folk-8-p-m/"
            },
            // TEMPLATE FOR GIGS: 
            //   {
            //     title    : "Small Concert Series", // Include title/name of event as a String (quotes)
            //     month    : 3, // Month of year as number (no quotes) [ex. Jan would be 1]
            //     day      : 3, // Day of month as number (no quotes)
            //     year     : 2023, // Full year as number (no quotes)
            //     time     : "6:00 PM & 8:00 PM", // Time EXACTLY as you want it displayed as String (quotes)
            //     location : "Davis Arts Council, Layton", // Location EXACTLY as you want it displayed as String (quotes); a Google Map link is also created based on this input!
            //     link     : "https://www.davisarts.org/show/the-reel-folk-8-p-m/" // Link EXACTLY as you would type in in browser as String (quotes)
            //   },
        
        ];

        $scope.slides = [
            {
                index    : 1,
                src      : "slideshow/5.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 2,
                src      : "slideshow/6.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 3,
                src      : "slideshow/7.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 4,
                src      : "slideshow/9.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 5,
                src      : "slideshow/10.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 6,
                src      : "slideshow/12.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 7,
                src      : "slideshow/13.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 8,
                src      : "slideshow/14.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 9,
                src      : "slideshow/15.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 10,
                src      : "slideshow/17.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 11,
                src      : "slideshow/19.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 12,
                src      : "slideshow/20.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 13,
                src      : "slideshow/21.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 14,
                src      : "slideshow/22.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 15,
                src      : "slideshow/23.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 16,
                src      : "slideshow/24.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 17,
                src      : "slideshow/25.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 18,
                src      : "slideshow/26.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 19,
                src      : "slideshow/28.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 20,
                src      : "slideshow/29.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
            {
                index    : 21,
                src      : "slideshow/31.JPG",
                attr     : "Photo by Shirley Lam",
                loc      : "Location",
            },
        ];

        
        $scope.getMap = function(event){
            // Creates a Google Map URL
            return "https://maps.google.com/?q=" + event.location;
        };

        $scope.getGigs = function(){
            return $scope.gigs;
        } 

        $scope.getMonthName = function(monthNumber){
            const date = new Date();
            date.setMonth(monthNumber - 1);
            return date.toLocaleString('en-US', { month: 'short' });
        } 

        $scope.getFullDateTime = function(event){
            const d = new Date(event.year, event.month-1, event.day);
            return event.time + ' | ' + d.toLocaleString('en-US', { weekday:"short", year:"numeric", month:"short", day:"numeric"});
        } 


        $scope.getSlides = function(){
            return $scope.slides;
        } 

        $scope.getTrustedSrc = function(slide) {
            return $sce.trustAsResourceUrl(slide.src);
        };




        // Slideshow 

        let timeout;

        $scope.currentSlide = function (n) {
            clearTimeout(timeout);
            $scope.showSlides(n, true);
        }

        $scope.showSlides = function (n, stop = false) {
            let slideIndex = n;
            let slides = document.getElementsByClassName("slides");
            let dots = document.getElementsByClassName("demo");


            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";

            if(!stop) {
                timeout = setTimeout(() => $scope.showSlides(slideIndex+1), 2000)
            }
        }

    });