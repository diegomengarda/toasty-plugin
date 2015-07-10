#Toasty Plugin
##A jQuery plguin to show easter egg like Mortal Kombat Toasty

###Autor
Diego Mengarda / <a href="http://www.twitter.com/diegomengarda">@diegomengarda</a>

###Licença
Lançado sob a licença MIT - http://opensource.org/licenses/MIT

##Instalação

###Include files

```html
<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="js/toasty.min.js"></script>
<link href="css/toasty.min.css" rel="stylesheet" />
```

###Show typing text

```html
<script>
$(function(){
	$('body').toasty({
		event: 'type',
		typeWord: 'hello'
	});
});
</script>
```

###Show with click in some button

```html
<script>
$(function(){
	$('button').click({
		$('body').toasty('show');
	});
});
</script>

<button>Show now</button>
```

##Settings

**sound**
File to play when toasty is call
```
default: 'assets/toasty.mp3'
options: String 
```

**image**
Image to show when toasty is call
```
default: 'assets/toasty.png'
options: String 
```

**event**
Event to fire toasty
```
default: 'default'
options: String ('default', 'type')
```

**typeWord**
Word to fire toasty when propriety event is type
```
default: ''
options: String
```