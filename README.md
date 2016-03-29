# StickyNav
StickyNav is a Vanilla JS lightweight Sticky Navbar script using animate.css

## Basic Usage
```javascript
bower install
```

And then..
```html
<script src="stickynav.js"></script>

<script type="text/javascript">
	stickyNav.init();
</script>
```

## Options

### Defaults
```javascript
{
	scrollNav: document.getElementById('scrollNav'),
	mainNav: document.getElementById('mainNav'),
	scrollY: 72,
	callback: function () {}
}
```

### Options
```html
<script src="stickynav.js"></script>

<script type="text/javascript">
	stickyNav.init({
		scrollNav: document.getElementById('youID'), // ID reference of scroller menu
		mainNav: document.getElementById('youID'), // ID reference that appoint to your main navigate menu hides, then the 'scrollNav' appears.
		scrollY: 100, // Scroll Y nav reference that starts hide 'mainNav' to show 'scrollNav'.
		callback: function () {} // Executes a callback function when you scrolling page with 'scrollNav' showing.
	});
</script>
```
...

## Author

#### João Firmino
* http://twitter.com/firminoweb