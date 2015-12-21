<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package tester
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">

	<header class="header">
		<nav class="navigation navigation--main">
			<img class="logo navigation--main__logo" src="<?php echo get_stylesheet_directory_uri(); ?>/images/global/logo.png" alt="Logo">

			<ul class="navigation__menu navigation--main__menu">
				<li class="navigation__menu-item navigation--main__menu-item navigation__menu-item--current"><a href="">Work</a>
				</li>
				<li class="navigation__menu-item navigation--main__menu-item"><a href="">Contact</a></li>
				<li class="navigation__menu-item navigation--main__menu-item"><a href="">About</a></li>
			</ul>
		</nav>

		<nav class="navigation navigation--mobile">
			<button class="button navigation--mobile__open-button">MENU</button>

			<img class="logo navigation--mobile__logo" src="<?php echo get_stylesheet_directory_uri(); ?>/images/global/logo-mobile.png" alt="Logo">

			<div class="navigation--mobile__overlay navigation--mobile__overlay--inactive">
				<div class="navigation--mobile__overlay__menu-container">
					<ul class="navigation__menu navigation--mobile__overlay__menu">
						<li class="navigation__menu-item navigation--mobile__overlay__menu-item navigation__menu-item--current"><a
									href="">Work</a>
						</li>
						<li class="navigation__menu-item navigation--mobile__overlay__menu-item"><a href="">Contact</a></li>
						<li class="navigation__menu-item navigation--mobile__overlay__menu-item"><a href="">About</a></li>
					</ul>
				</div>
				<button class="button navigation--mobile__close-button ion-android-close"></button>

			</div>
		</nav>
	</header>

	<div id="content" class="site-content">
