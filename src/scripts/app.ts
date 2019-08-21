import * as $ from 'jquery'

const FullPageJS = require('fullpage.js');

new FullPageJS('#fullpage', {
	//options here
	autoScrolling: true,
	scrollHorizontally: true,
	navigation: true,
	anchors: ['home', 'about', 'schedule', 'registration', 'organizers', 'contactus'],
	menu: '#navigation-items-container',
	responsiveWidth: '768',
	onLeave: function(origin:any, destination:any, direction:string){
		const navigation = $.default('#nvigation');
		if (direction == 'up') {
			navigation.animate({
				top:'0'
			})
		}else if (direction == 'down') {
			navigation.animate({
				top:'-56px'
			},'slow')
		}
	},
	afterResponsive: function(isResponsive: boolean){
		if (isResponsive) {
			$.default('#contact-us, #contact-us .fp-tableCell').css('height','auto')			
		}
	},
});

require('./smoke');
// require('./email');

const mobile_responsive_nav_show_btn: any = $.default("#mobile-responsive-btn");

const mobileResponsiveNavShowBtnClickAction = () => {
	const nav_dropdown_container = $.default('#navigation-item-container');
	nav_dropdown_container.slideToggle(300, () => {
		if (nav_dropdown_container.is(':hidden')) {
			mobile_responsive_nav_show_btn[0].lastElementChild.textContent = 'menu'
		} else {
			mobile_responsive_nav_show_btn[0].lastElementChild.textContent = 'close'
		}
	})
};
mobile_responsive_nav_show_btn.click((e: any) => {
	mobileResponsiveNavShowBtnClickAction()
});

$.default('#navigation-items-container .nav-item button').click(e => {
	if (mobile_responsive_nav_show_btn[0].lastElementChild.textContent == 'close') {
		mobileResponsiveNavShowBtnClickAction()
	}
});

$.default('#fullpage').click(e => {
	if (mobile_responsive_nav_show_btn[0].lastElementChild.textContent == 'close') {
		mobileResponsiveNavShowBtnClickAction()
	}
	

});
// $.default('#mail').click(e => {
	
// 	console.log("entered");
//     const sgMail = require('@sendgrid/mail');

//     sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//         console.log();
//         const msg = {

//         to: 'kasundimuthuwp@outlook.com',

//         from: $.default('#from').val(),

//         subject: $.default('#sender-name').val(),

//         text: $.default('#content').val(),

//         html: '<strong>and easy to do anywhere, even with Node.js</strong>',

//         };

//     sgMail.send(msg);

// });