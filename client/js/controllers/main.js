myPage.controller('UsersController', function ($scope, $location, $log, $uibModal, $document, $window) {


    $scope.projects = {
        Vibe: {
          title: "Vibe",
          slides: [
              {pic: '../img/Vibe/Vibe.png',
              caption: "Home Page"},
              {pic: "../img/Vibe/VibeSearchPage.png",
              caption: "Search page"},
              {pic: "../img/Vibe/VibeProfile.png",
              caption: "Profile page"}
          ],
          description: "Scheduling app oriented for musicians looking to find time to record. Studios can choose their schedule, and musicians can see a studios calendar and book time based on that schedule",
          tech:[
              {pic: "../img/logos/mongodb.png", caption: "Mongodb"},
              {pic:  "../img/logos/expressLogo.png", caption: "ExpressJS"},
              {pic:"../img/logos/angularyes.png", caption: "AngularJS"},
              {pic: "../img/logos/nodeLogo2.png", caption: "NodeJS"},
              {pic: "../img/logos/bootstrap_logo.svg", caption: "Bootstrap"},
              {pic: "../img/logos/PassportLogo.svg", caption: "PassportJS"},
               {pic: "../img/logos/awslogo.png", caption: "AWS"}
           ],
           link: "http://www.vibestudionetwork.com"
      } ,
      FlixnGrub: {
          title: "FlixnGrub",
          description: "Randomizer service to find a randomized delivery service and movie to solve the eternal mystery dinner and a movie ",
          tech: [
              {pic:"../img/logos/angularyes.png", caption: "AngularJS"},
              {pic: "../img/logos/nodeLogo2.png", caption: "NodeJS"},
              {pic: '../img/logos/yelpLogo.png', caption: "Yelp API"},
              {pic: "../img/logos/bootstrap_logo.svg", caption: "Bootstrap"},
              {pic:  "../img/logos/expressLogo.png", caption: "ExpressJS"}
          ],
          slides: [
              {pic: "../img/FlixnGrub/FlixnGrub2.png",
              caption: "Automatic Search Results"},
              {pic: "../img/FlixnGrub/FlixnGrubAdvanced.png",
              caption: "Advanced Search for more specific results"}
          ],
          github: "https://www.github.com/cdg510/FlixnGrub"
      },
      Giphtionary: {
         title: "Giphtionary",
         description: "iOS game/AV player using the Giphy API and a user's local music library. Users can synchronize Gif's to their current song name, or play a pictionary style game where others guess the song name based on the Gif's displayed ",
         tech: [
             {pic: "../img/logos/swiftLogo3.png", caption: "Swift"},
              {pic: "../img/logos/nodeLogo2.png", caption: "NodeJS"},
              {pic: "../img/logos/giphyLogo.png", caption: "Giphy API"},
              {pic: "../img/logos/socketIcon.gif", caption: "Sockets"},
              {pic:  "../img/logos/expressLogo.png", caption: "ExpressJS"},
          ],
          slides: [
              {pic: "../img/Giphtionary/Giphtionary3.jpg",
              caption: "intro-screen"},
              {pic: "../img/Giphtionary/Giphtionary.jpg",
              caption: "A/V player"},
              {pic: "../img/Giphtionary/Giphtionary2.jpg",
              caption: "User selects from local collection"}
          ],
         github: "https://www.github.com/cdg510/giphtionary"
     },

      MEANTrivia: {
          title: "MEAN Trivia",
          description: "Trivia app that allows users to add questions, test themselves, filter, and compare scores from previous quizzes. Less front-end focus as was completed in under 5 hours.",
          tech: [
              {pic: "../img/logos/mongodb.png", caption: "Mongodb"},
              {pic:  "../img/logos/expressLogo.png", caption: "ExpressJS"},
              {pic:"../img/logos/angularyes.png", caption: "AngularJS"},
              {pic: "../img/logos/nodeLogo2.png", caption: "NodeJS"},
              {pic: "../img/logos/bootstrap_logo.svg", caption: "Bootstrap"},
              {pic: "../img/logos/awslogo.png", caption: "AWS"}
          ],
          slides: [
              {pic: "../img/MEANTrivia/MEANTrivia.png", caption: "Dashboard"},
              {pic: "../img/MEANTrivia/MEANTriviaFilter.png", caption: "Filter results"},
              {pic: "../img/MEANTrivia/MEANTriviaAdd.png", caption: "Add a Question to the quiz"},
          ],
          link: "https://ec2-52-53-232-51.us-west-1.compute.amazonaws.com"
      },


    PropertyFindr: {
        title: "Property Findr",
        description: "iOS/Android app that allows users search for properties in the UK area, see pictures, prices, and descriptions of property for sale",
        tech: [
            {pic: "../img/logos/nodeLogo2.png", caption: "NodeJS"},
            {pic: "../img/logos/reactLogo1.svg", caption: "React-Native"},
             {pic: "../img/logos/nestoria.png", caption: "Nestoria API"}

        ],
        slides: [
        { pic: "../img/reactProperty/reactProperty1.png",
            caption: "Intro/Search Page"},
        {pic: "../img/reactProperty/reactProperty2.png",
        caption: "Results Page"},
        {pic: "../img/reactProperty/reactProperty3.png",
            caption: "Results details"}
    ],
        github: "https://github.com/CDG510/React_native_PropertyFinder",
    },

    DojoParty: {
        title: "Dojo Party",
        description: "Python app which allows users to search a song and GIF's to accompany for an audio visual experience",
        tech: [
            {pic: "../img/logos/pythonLogo.png", caption: "Python"},
            {pic: "../img/logos/MySQL-icon.png", caption: "mySQL"},
            {pic: "../img/logos/flask2.png", caption: "Flask"},
            {pic: "../img/logos/MaterializeLogo.png", caption: "MaterializeCSS"},
            {pic: "../img/logos/jqueryLogo.png", caption: "jQuery"}
        ],
        slides: [
            {pic: "../img/DojoParty/dojoPartyLogin.png", caption: "Login/Register page"},
            {pic: "../img/DojoParty/dojoPartyPlay.png", caption: "hidden search fields & audio player"},
            {pic: "../img/DojoParty/dojoParty.png", caption: "Adjust song & gifs"}
        ],
        github: "https://github.com/Tellefsonjr/dojoparty"
    }
}


    	   $scope.openModal = function(name){
    		   var modalInstance = $uibModal.open({
    		                 templateUrl: '../partials/Static/projectModal.html',
    		                 controller: 'ModalInstanceCtrl',
    		                 scope: $scope,
                             size: 'lg',
    		   	 			resolve: {
    							project: function() {
    								return $scope.projects[name]
    							}
    						}
    		               })
    	   		}

                $scope.sendMail = function(emailId,subject,message){
                    $window.open("mailto:"+ emailId + "?subject=" + subject+"&body="+message,"_self");
                };

$scope.email = function() {
    $scope.sendMail("christian.d.gonzalez.92@gmail.com","Inquiry","");
    return
}

})
