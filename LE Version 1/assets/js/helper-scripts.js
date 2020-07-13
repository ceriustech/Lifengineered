// This function loads the Nav bar across the site
const navPlacementFunc = (() => {
  let navBar = document.getElementById("navigation");
  console.log(navBar);
  let navHTML;

  let nav = ` <div id="nav-wrapper" class="wrapper">
            <header id="header">
				<!-- Logo -->
					<span class="logo">
						<a href="index.html" class="header-logo_a">Lif<span class="logo-txt-color">E</span>ngineered</a>
					</span>

				<!-- Nav -->
					<nav id="nav">
						<ul class="header-nav_ul">
							<li class="header-nav_li"><a href="index.html" class="header-nav_a">Home</a></li>
							<li class="header-nav_li"><a href="lifestyle.html" class="header-nav_a">Lifestyle</a></li>
							<li class="header-nav_li">
								<a href="technology.html" class="nav-tem header-nav_a">Technology</a>
								<!--<ul class="header-nav_sub-menu">
								<li><a href="#">Option One</a></li>
								<li><a href="#">Option Two</a></li>
								<li><a href="#">Option Three</a></li>
								<li>
									<a href="#">Submenu</a>
									<ul>
										<li><a href="#">Option One</a></li>
										<li><a href="#">Option Two</a></li>
										<li><a href="#">Option Three</a></li>
										<li><a href="#">Option Four</a></li>
									</ul>
								</li>
								</ul>-->
							</li>
							<li class="header-nav_li"><a href="entrepreneurship.html" class="header-nav_a">Entrepreneurship </a></li>
							<li class="header-nav_li"><a href="health.html" class="header-nav_a">Health</a></li>
							<!--<li><a href="#" class="button">Log In</a></li>-->
						</ul>
					</nav>
             
			</header>
        </div>`;

  let articleNav = `<div id="nav-wrapper" class="wrapper">
		        <header id="header">
				<!-- Logo -->
					<span class="logo">
						<a href="../../index.html" class="header-logo_a">Lif<span class="logo-txt-color">E</span>ngineered</a>
					</span>

				<!-- Nav -->
					<nav id="nav">
						<ul class="header-nav_ul">
							<li class="header-nav_li"><a href="../../index.html" class="header-nav_a">Home</a></li>
							<li class="header-nav_li"><a href="../../lifestyle.html" class="header-nav_a">Lifestyle</a></li>
							<li class="header-nav_li">
								<a href="../../technology.html" class="nav-tem header-nav_a">Technology</a>
							</li>
							<li class="header-nav_li"><a href="../../entrepreneurship.html" class="header-nav_a">Entrepreneurship </a></li>
							<li class="header-nav_li"><a href="../../health.html" class="header-nav_a">Health</a></li>
							<!--<li><a href="#" class="button">Log In</a></li>-->
						</ul>
					</nav>
             
			</header>
            </div>`;

  if (window.location.href.includes("articles")) {
    navHTML = articleNav;
  } else {
    navHTML = nav;
  }

  navBar.innerHTML = navHTML;
})();

// This function will load the footer accross the site

const footerPlacementFunc = (() => {
  let footer = document.getElementById("footer");
  console.log(footer);

  let footerHTML;

  let footerEl = `<div class="inner">
					<section class="info">
					    <div class="footer-info__heading">
					       <h3 class="logo footer-info__h3">Lif<span class="logo-txt-color">E</span>ngineered</h3> 
					    </div>
					    <div class="footer-link-container">
					       <div class="about">
							    <div class="col-6 col-12-small">
				                    <ul class="alt">
								        <li><a href="#" class="name">About Us</a></li>
								        <li><a href="#" class="name">Contact Us</a></li>
								    </ul>
				                </div>
						    </div>
						  <div class="footer-nav">
							<div class="footer-nav-item__container">
								<a href="#" class="name">
									Home
								</a>
							</div>
							<div class="footer-nav-item__container">
								<a href="#" class="name">
									Technology
								</a>
							</div>
							<div class="footer-nav-item__container">
								<a href="#" class="name">
									Entrepreneurship
								</a>
							</div>
							<div class="footer-nav-item__container">
								<a href="#" class="name">
									Health
								</a>
							</div>
						  </div>
					    </div>
						
						
					</section>
					<section class="contact">
						<h3 class="contact-heading"><span class="left-footer-dash">-</span> Social Media <span class="right-footer-dash">-</span></h3>
						<ul class="icons">
				            <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
				            <li><a href="#" class="icon brands fa-facebook"><span class="label">Facebook</span></a></li>
				            <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
				            <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
				        </ul>
					</section>
				</div>
				<div class="copyright">
					&copy; LifEngineered. ©2019 LimbleMedia. All rights reserved.
				</div>`;

  let articleFooter = `<div class="inner">
					<section class="info">
					    <div class="footer-info__heading">
					       <h3 class="logo footer-info__h3">Lif<span class="logo-txt-color">E</span>ngineered</h3> 
					    </div>
					    <div class="footer-link-container">
					       <div class="about">
							    <div class="col-6 col-12-small">
				                    <ul class="alt">
								        <li><a href="#" class="name">About Us</a></li>
								        <li><a href="#" class="name">Contact Us</a></li>
								    </ul>
				                </div>
						    </div>
						  <div class="footer-nav">
							<div class="footer-nav-item__container">
								<a href="#" class="name">
									Home
								</a>
							</div>
							<div class="footer-nav-item__container">
								<a href="#" class="name">
									Technology
								</a>
							</div>
							<div class="footer-nav-item__container">
								<a href="#" class="name">
									Entrepreneurship
								</a>
							</div>
							<div class="footer-nav-item__container">
								<a href="#" class="name">
									Health
								</a>
							</div>
						  </div>
					    </div>
						
						
					</section>
					<section class="contact">
						<h3 class="contact-heading"><span class="left-footer-dash">-</span> Social Media <span class="right-footer-dash">-</span></h3>
						<ul class="icons">
				            <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
				            <li><a href="#" class="icon brands fa-facebook"><span class="label">Facebook</span></a></li>
				            <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
				            <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
				        </ul>
					</section>
				</div>
				<div class="copyright">
					&copy; LifEngineered. ©2019 LimbleMedia. All rights reserved.
				</div>`;

  if (window.location.href.includes("articles")) {
    footerHTML = articleFooter;
  } else {
    footerHTML = footerEl;
  }

  footer.innerHTML = footerHTML;
})();
