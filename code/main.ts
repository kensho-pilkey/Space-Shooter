import kaboom from "kaboom"
import "kaboom/global"

// initialize context
kaboom()

loadSprite("blue", "backgrounds/blue.png");


// load assets
loadSprite("bean", "sprites/bean.png")
loadSprite("bean", "sprites/bean.png")

// add a character to screen
let background = add([
	// list of components
	sprite("blue"),
	pos(width() / 2, height() / 2),
	area(),
  fixed(),
  //scale(width(), height())
  
])


// add a kaboom on mouse click
onClick(() => {
	//addKaboom(mousePos())
})

