var current_item = 0;

$(document).ready(function() {
	setLogin();
});
function setRegistrationHandlers() {
	$(".registration>#register-btn").click(function(){
		setLogin();
	})
}
function setPreferencesHandlers() {
	$(".category").click(function(){
		var subcat = "#" + $(this).attr("id") + "-subcats";
		var flag = ($(subcat).css("display")==="none")? true : false;
		$(".category").css("text-decoration", "none");
		$(".subcategories").hide();
		if (flag) {
			$(subcat).show();
			$(this).css("text-decoration", "underline");
		}
	});
	$(".preferences>input[type='checkbox']").click(function() {
		var subcat = "." + $(this).attr("id").substring(0,4) + "-subcat-checkbox";
		var checked = $(this).prop("checked");
		$(subcat).prop("checked", checked);
	});
	$(".preferences button").click(function(){
		setProduct(current_item);
	})
}
function setLoginHandlers() {
	$("#login-btn").click(function() {
		setProduct(current_item);
	});
	$("#register-btn").click(function(){
		setRegistration();
	})
}

function setProductHandlers() {
	$("#left-arrow").click(function(){
		if (current_item>0) {
			current_item = current_item-1;
			setProduct(current_item);
		}
	});
	$("#right-arrow").click(function(){
		if (current_item<data.length-1) {
			current_item = current_item+1;
			setProduct(current_item);
		}
	});

	var detailsOpen = false;
	//Open product details
	$(".more-details").click(function(){
		if (detailsOpen) {
			$(".more-details").text("More details+");
			$(".product-details").slideToggle("slow");
			$("body").scrollTo(".more-details");
			detailsOpen = false;
		} else {
			$(".more-details").text("Less details-");
			$(".product-details").slideToggle("slow");
			$("body").scrollTo(".product-details");
			detailsOpen = true;
		}
	});	//End more-details click listener

	//Update previous/next arrows
	if (current_item==0) {
		$("#left-arrow").css("opacity", 0.1);
		$("#left-arrow").css("cursor", "not-allowed");
	}
	if (current_item==data.length-1) {
		$("#right-arrow").css("opacity", 0.1);
		$("#right-arrow").css("cursor", "not-allowed");
	}

	//Nav buttons
	$("#logout-btn").click(function(){
		setLogin();
	})
	$("#preferences-btn").click(function() {
		setPreferences();
	})
}

function setProduct(i) {
	var new_html = PRODUCT_HTML.replace(P_IMG, data[i].img);
	new_html = new_html.replace(P_TITLE, data[i].title);
	new_html = new_html.replace(P_PRICE, data[i].price);
	new_html = new_html.replace(P_URL, data[i].url);
	new_html = new_html.replace(P_DESC, data[i].description);
	new_html = new_html.replace(P_RETAILER, data[i].retailer);
	$(".content").html(BANNER_HTML2+new_html);
	setProductHandlers(i);
}

function setLogin() {
	$(".content").html(BANNER_HTML+LOGIN_HTML);
	setLoginHandlers();
}

function setRegistration() {
	$(".content").html(BANNER_HTML+REGISTRATION_HTML);
	setRegistrationHandlers();
}

function setPreferences() {
	$(".content").html(BANNER_HTML+PREFERENCES_HTML);
	setPreferencesHandlers();
}

//Data
var data = [{title: "World Famous Vintage Camper Rucksack", price: 48, img: "files/img/p_img1.jpg",
description: "World Famous' canvas and leather backpack series is back by popular demand! This stylish canvas pack with leather detailing, features one main compartment with 2 outside pockets. With a true vintage feel, you can carry everything you need wherever you go.",
url: "https://goo.gl/pcqw07", retailer: "Wal Mart"},
{title: "Scarleton Soft Multi Pocket Crossbody Bag H1812", price: 29, img: "files/img/p_img2.jpg",
description: `The Scarleton Soft Multi Pocket Crossbody Bag is a classic handbag, an ever-ready accessory for work or play, spacious and economically priced. This vintage style purse has enough room for your cell phone, wallet, makeup and toiletries with ample space left over.

When you are an active fashionista, and want your essentials within reach at any time, this is the bag for you. If you always have too many irons in the fire, it can be difficult to find the time to hunt for stylish purses and handbags at reasonable prices. Fashionable, affordable and convenient, you'll want a Scarleton bag in every style! Please note: The bag color may vary slightly from the online image due to monitor color settings.`,
url: "https://goo.gl/kbhkts", retailer: "Amazon"},
{title: "Travelon Anti-Theft Cross-Body Bag", price: 56, img: "files/img/p_img3.jpg",
description: `This bag fits snuggly up against your body and looks great doing it! The slash-proof construction and adjustable, cut-proof shoulder strap is great, you can attach it to any post or chair for added safety and convienience.
Also comes with an RFID blocking card slots as well as a handy removable LED light. For more than 35 years, Travelon has been making travel easier and safer with products that provide protection, peace-of-mind, safety, security and organization. Travelon’s Anti-Theft Crossbody and travel bags protect from pickpockets and thieves and are customer top rated. Classic silhouettes in soft fabrics provide great function and fashion.`,
url: "https://goo.gl/GwhUuj", retailer: "Amazon"},
{title: "Lewis N Clark 1267 Luggage Rfid Neck Stash", price: 13, img: "files/img/p_img4.jpg",
description: `Lewis N. Clark RFID-Blocking Neck Stash Anti-Theft Hidden Wallet, Taupe, One Size`,
url: "https://goo.gl/QRnnCw", retailer: "Amazon"},
{title: "Fjällräven 'Mini Kånken' Water Resistant Backpack", price: 82, img: "files/img/p_img5.jpg",
description: `Scandinavian design has long been known for offering practical, functional pieces that are beautiful to behold but are meant to be used. Originally designed in the '70s for Swedish school children, a now-iconic backpack is crafted from durable, water-resistant Vinylon F™ fabric and features a stylish, contemporary silhouette.`,
url: "https://goo.gl/ARPq1U", retailer: "Nordstrom"}
];



var P_IMG = "XXPRODUCTIMGXX";
var P_TITLE = "XXPRODUCTTITLEXX";
var P_PRICE = "XXPRODUCTPRICEXX";
var P_URL = "XXPRODUCTURLXX";
var P_DESC = "XXPRODUCTDESCRIPTIONXX";
var P_RETAILER = "XXPRODUCTRETAILERXX";

var BANNER_HTML = `
<div class="banner">
	<br>
	<img src="files/img/logo1.png" alt="">
</div>`
var BANNER_HTML2 = `
<div class="banner">
	<br>
	<img src="files/img/logo1.png" alt="">
	<a id="preferences-btn">Preferences</a><br>
	<a id="logout-btn">Logout</a>
</div>`

var PRODUCT_HTML = `
<div class="product"><div class="space"></div>
	<img src="files/img/left-arrow.png" alt="" class="arrow" id="left-arrow"> 
	<img src="XXPRODUCTIMGXX" alt="" class="product-img"> 
	<img src="files/img/right-arrow.png" alt="" class="arrow" id="right-arrow">
</div>
<div class="description">
	<div class="product-title">XXPRODUCTTITLEXX</div>
	<div class="product-price">$XXPRODUCTPRICEXX</div>
	<div class="links">
	<div class="links"><span class="more-details">More details+</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="XXPRODUCTURLXX" target="_blank"><span class="buy">Buy now$</span></a></div>
	<div class="product-details">
		XXPRODUCTDESCRIPTIONXX
		<br><br>
		Retailer: XXPRODUCTRETAILERXX
	</div>
</div>`;

var LOGIN_HTML = `
<div class="login-form">
	<br><br><br>
	Username: <input type="text" value="guest">
	<br><br>
	Password: <input type="password" value="guest">
	<br><br><br>
	<button id="login-btn">Login</button> <button id="register-btn">Register</button>
</div>`

var PREFERENCES_HTML = `
<div class="preferences">
	<br>
	<h1>Preferences</h1>
	<br><br>
	Price range: <input type="text" value="0" size="4"> to <input type="text" value="99" size="4">
	<br><br>
	Categories: (click to expand)
	<br><br>
	<input type="checkbox" value="Fashion" id="cat1-checkbox"><span id="cat1" class="category">Fashion</span>
	<input type="checkbox" value="Accessories" id="cat2-checkbox"><span id="cat2" class="category">Accessories</span>
	<input type="checkbox" value="Sports" id="cat3-checkbox"><span id="cat3" class="category">Sports</span>
	<input type="checkbox" value="Books" id="cat4-checkbox"><span id="cat4" class="category">Books</span>
	<br><br>
	<div class="subcategories" id="cat1-subcats">
		<input type="checkbox" class="cat1-subcat-checkbox">Men's Shirts
		<input type="checkbox" class="cat1-subcat-checkbox">Men's Pants
		<input type="checkbox" class="cat1-subcat-checkbox">Women's Shirts
		<input type="checkbox" class="cat1-subcat-checkbox">Women's Pants
	</div>
	<div class="subcategories" id="cat2-subcats">
		<input type="checkbox" class="cat2-subcat-checkbox" checked>Bags
		<input type="checkbox" class="cat2-subcat-checkbox">Jewelry
		<input type="checkbox" class="cat2-subcat-checkbox">Men's Watches
		<input type="checkbox" class="cat2-subcat-checkbox">Women's Watches
	</div>
	<div class="subcategories" id="cat3-subcats">
		<input type="checkbox" class="cat3-subcat-checkbox">Basketball
		<input type="checkbox" class="cat3-subcat-checkbox">Soccer
		<input type="checkbox" class="cat3-subcat-checkbox">Football
		<input type="checkbox" class="cat3-subcat-checkbox">Hockey
		<input type="checkbox" class="cat3-subcat-checkbox">Training
	</div>
	<div class="subcategories" id="cat4-subcats">
		<input type="checkbox" class="cat4-subcat-checkbox">Fiction - Fantasy
		<input type="checkbox" class="cat4-subcat-checkbox">Fiction - Mystery
		<input type="checkbox" class="cat4-subcat-checkbox">Nonfiction - Autobiography
		<input type="checkbox" class="cat4-subcat-checkbox">Nonfiction - Educational
	</div>
	<br><br>
	<button id="save-btn">Save</button> <button>Back</button>
</div>`

var REGISTRATION_HTML = `
<div class="registration">
	<br><br><br>
	Username: <br>
	<input type="text">
	<br>
	Password: <br>
	<input type="password">
	<br>
	Confirm Password: <br>
	<input type="password">
	<br>
	Email: <br>
	<input type="text">
	<br><br><br>
	<button id="register-btn">Register</button>
</div>`

//Scroll function
$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}