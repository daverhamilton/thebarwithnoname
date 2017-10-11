'use strict';


angular.module('bwnnApp')
          .service('bwnnDB', function() {

          	var daily_special = [
          	{
          		id: 0,
          		name: 'Weekend',
          		image: 'images/MondaySpecial.jpg',
          		promotion: 'TBD',
          		bar_open: '4pm',
          		bar_close: '2am',
          		kitchen_open: '4pm',
          		kitchen_close: '11pm',
          		title: 'MONDAY',
          		title_image: 'images/weekend.png',
          		show: false,
          		font: 'blue',
                    border: 'none'

          	},
          	{
          		id: 1,
          		name: 'Monday',
          		image: 'images/MondaySpecial.jpg',
          		promotion: '$12 Pitchers & $3.75 Bar Rail',
          		bar_open: '4pm',
          		bar_close: '2am',
          		kitchen_open: '4pm',
          		kitchen_close: '11pm',
          		title: 'TODAY',
          		title_image: 'images/monday.png',
          		show: true,
          		font: '#fe0002',
                    border: '2px solid white'
          	},
          	{
          		id: 2,
          		name: 'Tuesday',
          		image: 'images/TuesdaySpecial.jpg',
          		promotion: '$3.50 Bottles',
          		bar_open: '4pm',
          		bar_close: '2am',
          		kitchen_open: '4pm',
          		kitchen_close: '11pm',
          		title: 'TODAY',
          		title_image: 'images/tuesday.png',
          		show: true,
          		font: '#fc4f00',
                    border: '2px solid white'
          	},
          	{
          		id: 3,
          		name: 'Wednesday',
          		image: 'images/WednesdaySpecial.jpg',
          		promotion: '$12 Pitchers & $3.75 Bar Rail Until 11pm',
          		bar_open: '4pm',
          		bar_close: '2am',
          		kitchen_open: '4pm',
          		kitchen_close: '11pm',
          		title: 'TODAY',
          		title_image: 'images/today.png',
          		show: true,
          		font: '#ffffff',
                    border: '2px solid white'
          	},
          	{
          		id: 4,
          		name: 'Thursday',
          		image: 'images/ThursdaySpecial.jpg',
          		promotion: '$5 Tall Cans',
          		bar_open: '4pm',
          		bar_close: '2am',
          		kitchen_open: '4pm',
          		kitchen_close: '11pm',
          		title: 'TODAY',
          		title_image: 'images/thursday.png',
          		show: true,
          		font: '#02fe15',
                    border: '2px solid white'
          	},
          	{
          		id: 5,
          		name: 'Friday',
          		image: 'images/FridaySpecial.jpg',
          		promotion: '$25 Veggie Nachos & Pitcher',
          		bar_open: '4pm',
          		bar_close: '2am',
          		kitchen_open: '4pm',
          		kitchen_close: '11pm',
          		title: 'TODAY',
          		title_image: 'images/friday.png',
          		show: true,
          		font: '#fcd800',
                    border: '2px solid white'
          	}
          	];

          	this.getPromotion = function() {
          		return daily_special;
          	};

          	this.getTodayPromotion = function(index) {
          		return daily_special[index];
          	}

          });