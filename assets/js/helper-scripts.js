// This function loads the Nav bar across the site
let navPlacementFunc = (() => {
    let navBar = document.getElementById('navigation'); 
console.log(navBar); 

let navHTML = ` <div id="nav-wrapper" class="wrapper">
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
							</li>
							<li class="header-nav_li"><a href="entrepreneurship.html" class="header-nav_a">Entrepreneurship </a></li>
							<li class="header-nav_li"><a href="health.html" class="header-nav_a">Health</a></li>
							<!--<li><a href="#" class="button">Log In</a></li>-->
						</ul>
					</nav>
             
			</header>
        </div>`;

navBar.innerHTML = navHTML; 
})(); 




