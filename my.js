$(document).ready(function(){
					$(".map--1").click(function(){
				   		$(".map--4").delay("400").slideToggle("2000");
				   		$(".map--2").delay("200").slideToggle("4000");
				   		$(".map--3").delay("300").slideToggle("6000");
				   		$(".surroundings").delay("100").slideToggle("8000");
				   		if ($(".map--1").hasClass("rotation")) {
				   			$(".map--1").delay("500").animate({top:"22%"});
				   			$(".map--1").removeClass("rotation");
				   		}
				   		else{
				   			$(".map--1").delay("500").animate({top:"15%"});
				   			$(".map--1").addClass("rotation");
				   		}
					});

					$(".map--4").click(function(){
					   	$(".map--1").delay("300").slideToggle("2000");
					   	$(".map--2").delay("200").slideToggle("4000");
					   	$(".map--3").delay("400").slideToggle("6000");
					   	$(".surroundings").delay("100").slideToggle("8000");
					   	if ($(".map--4").hasClass("rotation")) {
					   		$(".map--4").delay("500").animate({top:"0%"});
					   		$(".map--4").removeClass("rotation");
					   	}
					   	else{
					   		$(".map--4").delay("500").animate({top:"15%"});
					   		$(".map--4").addClass("rotation");
				   		}
					});

					$(".map--2").click(function(){
					   	$(".map--4").delay("400").slideToggle("2000");
					   	$(".map--1").delay("200").slideToggle("4000");
					   	$(".map--3").delay("300").slideToggle("6000");
					   	$(".surroundings").delay("100").slideToggle("8000");
					   	if ($(".map--2").hasClass("rotation")) {
					   		$(".map--2").delay("500").animate({top:"32%"});
					   		$(".map--2").removeClass("rotation");
					   	}
					   	else{
					   		$(".map--2").delay("500").animate({top:"15%"});
					   		$(".map--2").addClass("rotation");
				   		}
					});

					$(".map--3").click(function(){
					   	$(".map--4").delay("400").slideToggle("2000");
					   	$(".map--2").delay("200").slideToggle("4000");
					   	$(".map--1").delay("300").slideToggle("6000");
					   	$(".surroundings").delay("100").slideToggle("8000");
					   	if ($(".map--3").hasClass("rotation")) {
					   		$(".map--3").delay("500").animate({top:"12%"});
					   		$(".map--3").removeClass("rotation");
					   	}
					   	else{
					   		$(".map--3").delay("500").animate({top:"15%"});
					   		$(".map--3").addClass("rotation");
				   		}
					});


					$("#mcd").click(function(){
						document.getElementById("shopname").innerHTML="Mc Donald's";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";

						$(".map__space").css("fill",'#bdbdbd');
						$("#mcdo").css("fill",'#f39c12');
					});


					$("#max").click(function(){
						document.getElementById("shopname").innerHTML="MAX";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Buy 2 shirts and get 80% OFF on next Shirt!";

						$(".map__space").css("fill",'#bdbdbd');
						$("#ma").css("fill",'#f39c12');
					});		

					$("#pizza").click(function(){
						document.getElementById("shopname").innerHTML="Pizza Hut";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";

						$(".map__space").css("fill",'#bdbdbd');
						$("#piz1,#piz").css("fill",'#f39c12');
					});

					$("#panta").click(function(){
						document.getElementById("shopname").innerHTML="Pantaloon";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";

						$(".map__space").css("fill",'#bdbdbd');
						$("#pan2,#pan1").css("fill",'#f39c12');
					});

					$("#van").click(function(){
						document.getElementById("shopname").innerHTML="Van Heusen";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Clearance Sale.Get upto 60% OFF on Selected items";

						$(".map__space").css("fill",'#bdbdbd');
						$("#va").css("fill",'#f39c12');
					});

					$("#sc").click(function(){
						document.getElementById("shopname").innerHTML="Sports Club";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";

						$(".map__space").css("fill",'#bdbdbd');
						$("#sc1,#sc2,#sc3,#sc4,#sc5,#sc6").css("fill",'#d35400');
					});

					$("#apple").click(function(){
						document.getElementById("shopname").innerHTML="Apple Store";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";

						$(".map__space").css("fill",'#bdbdbd');
						$("#app").css("fill",'#d35400');
					});

					$("#lee").click(function(){
						document.getElementById("shopname").innerHTML="Lee";
						document.getElementById("timing").innerHTML="Opens At: 10:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";

						$(".map__space").css("fill",'#bdbdbd');
						$("#le1,#le2").css("fill",'#d35400');
					});

					$("#puma").click(function(){
						document.getElementById("shopname").innerHTML="Puma";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";

						$(".map__space").css("fill",'#bdbdbd');
						$("#pma").css("fill",'#d35400');
					});

					$("#bb").click(function(){
						document.getElementById("shopname").innerHTML="Big Bazaar";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";

						$(".map__space").css("fill",'#bdbdbd');
						$("#bazaar").css("fill",'#27ae60');
					});

					$("#rolex").click(function(){
						document.getElementById("shopname").innerHTML="Rolex";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";

						$(".map__space").css("fill",'#bdbdbd');
						$("#rol").css("fill",'#27ae60');
					});

					$("#mufti").click(function(){
						document.getElementById("shopname").innerHTML="Mufti";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";

						$(".map__space").css("fill",'#bdbdbd');
						$("#mfti").css("fill",'#27ae60');
					});

					$("#reebok").click(function(){
						document.getElementById("shopname").innerHTML="Reebok";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Get upto 50% OFF on each items!";

						$(".map__space").css("fill",'#bdbdbd');
						$("#rbk").css("fill",'#27ae60');
						$("#rbk1").css("fill",'#27ae60');
					});

					$("#wrangler").click(function(){
						document.getElementById("shopname").innerHTML="Wrangler";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";

						$(".map__space").css("fill",'#bdbdbd');
						$("#wrang").css("fill",'#27ae60');
					});

					$("#paintball").click(function(){
						document.getElementById("shopname").innerHTML="Paintball";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";

						$(".map__space").css("fill",'#bdbdbd');
						$("#pb").css("fill",'#27ae60');
					});

					$("#pvr").click(function(){
						document.getElementById("shopname").innerHTML="PVR";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Buy 5 movie tickets and get 1 free!";

						$(".map__space").css("fill",'#bdbdbd');
						$("#theater").css("fill",'#3498db');
					});

					$("#matrix").click(function(){
						document.getElementById("shopname").innerHTML="Matrix Hair Salon";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";
						
						$(".map__space").css("fill",'#bdbdbd');
						$("#hair").css("fill",'#3498db');
					});

					$("#foodcourt").click(function(){
						document.getElementById("shopname").innerHTML="Food Court";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";

						$(".map__space").css("fill",'#bdbdbd');
						$("#food").css("fill",'#3498db');
					});

					$("#tp").click(function(){
						document.getElementById("shopname").innerHTML="Tattoo Parlor";
						document.getElementById("timing").innerHTML="Opens At: 9:00 AM to 11:30 PM";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";

						$(".map__space").css("fill",'#bdbdbd');
						$("#tattoo").css("fill",'#3498db');
					});

					$("#pe").click(function(){
						document.getElementById("shopname").innerHTML="Peter England";
						document.getElementById("timing").innerHTML="Opens At: 11:00 AM to 11:30 PM";
						document.getElementById("contact").innerHTML="Contact: +91-22134847";
						document.getElementById("offers").innerHTML="Oops Sorry! No offers Available.";

						$(".map__space").css("fill",'#bdbdbd');
						$("#petereng").css("fill",'#3498db');

					});

					$(".map-1").click(function(){
						if ($(".map--2").hasClass("rotation")) {
							$(".map--2").trigger("click");
						}
						if ($(".map--3").hasClass("rotation")) {
							$(".map--3").trigger("click");
						}
						if ($(".map--4").hasClass("rotation")) {
							$(".map--4").trigger("click");
						}
						$(".map--1").trigger("click");
					});
					
					$(".map-2").click(function(){
						if ($(".map--1").hasClass("rotation")) {
							$(".map--1").trigger("click");
						}
						if ($(".map--3").hasClass("rotation")) {
							$(".map--3").trigger("click");
						}
						if ($(".map--4").hasClass("rotation")) {
							$(".map--4").trigger("click");
						}
						$(".map--2").trigger("click");
					});
					
					$(".map-3").click(function(){
						if ($(".map--2").hasClass("rotation")) {
							$(".map--2").trigger("click");
						}
						if ($(".map--1").hasClass("rotation")) {
							$(".map--1").trigger("click");
						}
						if ($(".map--4").hasClass("rotation")) {
							$(".map--4").trigger("click");
						}
						$(".map--3").trigger("click");
					});

					$(".map-4").click(function(){
						if ($(".map--2").hasClass("rotation")) {
							$(".map--2").trigger("click");
						}
						if ($(".map--3").hasClass("rotation")) {
							$(".map--3").trigger("click");
						}
						if ($(".map--1").hasClass("rotation")) {
							$(".map--1").trigger("click");
						}
						$(".map--4").trigger("click");
					});

					$(".abc").click(function(){
							if($(".sidebar").hasClass("side")){
								$(".sidebar").removeClass("side");
								$(".description").addClass("desc1");
								$(".description").removeClass("desc");
							}
							else{
								$(".sidebar").addClass("side");
								$(".description").addClass("desc");
								$(".description").removeClass("desc1");
							}
						});

						$(".abc").click(function(){
								if ($("#a").hasClass("a")) {
								$("#a").removeClass("a");
								$("#b").removeClass("b");
								$("#c").removeClass("c");
							}
							else{
								$("#a").addClass("a");
								$("#b").addClass("b");
								$("#c").addClass("c");
							}	
						});

						$(".map").click(function(){
							$(".abc").delay("2000").trigger("click");
						});

						$(".shops").click(function(){
							$( ".abc" ).trigger( "click" );
					});
				});