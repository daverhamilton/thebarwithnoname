'use strict';

angular.module('bwnnApp')

			.controller('MainController', ['$scope', '$location', 'bwnnDB', '$document', function($scope, $location, bwnnDB, $document) {

				//dates for Magic events; needs to be automated
				$scope.magic1 = "September 5";
				$scope.magic2 = "August 19";
				$scope.magic3 = "October 3";
				$scope.magic4 = "October 17";
				$scope.magic5 = "October 31";

				//var currentTime = new Date().getHours();
				//$scope.openOrNot = false;

				//time is UTC, so 20 = 8pm UTC = 4pm ET; 6 UTC = 2am ET; may need to adjust for DST
				//if (currentTime >= 16 || currentTime <= 2) {
				//	$scope.openOrNot = true; 
				//} else {
				//	$scope.openOrNot = false;
				//};

				var today = new Date();
				var dayofweek = today.getDay();
				var weekOrder = [];

				for (var i = 0; i < 6; i++) {
					if (dayofweek < 6) {
						weekOrder.push(dayofweek);
						dayofweek++;
					} else {
						weekOrder.push(dayofweek - 6);
						dayofweek++;
					}
				}

				$scope.getTodayPromotion = bwnnDB.getTodayPromotion(weekOrder[0]);
				$scope.getPromotion1 = bwnnDB.getTodayPromotion(weekOrder[1]);
				$scope.getPromotion2 = bwnnDB.getTodayPromotion(weekOrder[2]);
				$scope.getPromotion3 = bwnnDB.getTodayPromotion(weekOrder[3]);
				$scope.getPromotion4 = bwnnDB.getTodayPromotion(weekOrder[4]);
				$scope.getPromotion5 = bwnnDB.getTodayPromotion(weekOrder[5]);

				var otherPromoWidth = ((document.getElementById('otherPromo').clientWidth)*0.8 - 50) / 5;

				$scope.otherPromoImgStyle1 = {
					"width" : otherPromoWidth,
					"color" : $scope.getPromotion1.font
				};

				$scope.otherPromoImgStyle2 = {
					"width" : otherPromoWidth,
					"color" : $scope.getPromotion2.font
				};

				$scope.otherPromoImgStyle3 = {
					"width" : otherPromoWidth,
					"color" : $scope.getPromotion3.font
				};

				$scope.otherPromoImgStyle4 = {
					"width" : otherPromoWidth,
					"color" : $scope.getPromotion4.font
				};

				$scope.otherPromoImgStyle5 = {
					"width" : otherPromoWidth,
					"color" : $scope.getPromotion5.font
				};


		    var duration = 0;
		    var offset = 0; //pixels; adjust for floating menu, context etc
		    //Scroll to #some-id with 100 px "padding"
		    //Note: Use this in a directive, not with document.getElementById 
		    var promoSection = angular.element(document.getElementById('superduper'));
		    $document.scrollToElement(promoSection, offset, duration);

				var scrollTop = $(window).scrollTop();
				var elementOffsetPromo = $('#promos').offset().top,
				    distancePromo = (elementOffsetPromo - scrollTop);

				$(function() {
				    $(window).on("scroll", function() {
				        if($(window).scrollTop() > distancePromo) {
				            $(".Promo").addClass("highlight");
				            $(".Home").removeClass("highlight");
				        } else {
				            //remove the background property so it comes transparent again (defined in your css)
				           $(".Promo").removeClass("highlight");
				           $(".Home").addClass("highlight");
				        }
				    });
				});

				var elementOffsetMenu = $('#menu').offset().top,
				    distanceMenu = (elementOffsetMenu - scrollTop)*1.1;

				$(function() {
				    $(window).on("scroll", function() {
				        if($(window).scrollTop() > distanceMenu) {
				            $(".Menu").addClass("highlight");
				            $(".Promo").removeClass("highlight");
				        } else {
				            //remove the background property so it comes transparent again (defined in your css)
				           $(".Menu").removeClass("highlight");
				        }
				    });
				});

				var elementOffsetEvents = $('#events').offset().top,
				    distanceEvents = (elementOffsetEvents - scrollTop);

				$(function() {
				    $(window).on("scroll", function() {
				        if($(window).scrollTop() > distanceEvents) {
				            $(".Events").addClass("highlight");
				            $(".Menu").removeClass("highlight");
				        } else {
				            //remove the background property so it comes transparent again (defined in your css)
				           $(".Events").removeClass("highlight");
				        }
				    });
				});

				var elementOffsetContact = $('#contact').offset().top,
				    distanceContact = (elementOffsetContact - scrollTop);

				$(function() {
				    $(window).on("scroll", function() {
				        if($(window).scrollTop() > distanceContact) {
				            $(".Contact").addClass("highlight");
				            $(".Events").removeClass("highlight");
				        } else {
				            //remove the background property so it comes transparent again (defined in your css)
				           $(".Contact").removeClass("highlight");
				        }
				    });
				});

				//tooltip for promos
				$(document).ready(function(){
    			$('[data-toggle="todayPromo"]').tooltip();   
				});

				$(".navbar-nav li a").click(function(event) {
				    if (!$(this).parent().hasClass('dropdown'))
				        $(".navbar-collapse").collapse('hide');
				});


			}])
;

