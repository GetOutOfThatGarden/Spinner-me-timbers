Hello readers,

I wanted to learn more about JS, HTML and CSS so I started to watch this chap's (Brian Design) video on youtube: https://www.youtube.com/watch?v=mCQ1-iDSnto.

I watched most of the first part with with monkies and decided to make an alternative to it.

Brian's first project made a mokey emoji open and close his eyes when clicking him.

I wanted to see if I could make an emoji spin around 90 degrees every time I clicked it instead.

I created four divs with the same rotating arrows emoji that I copy pasted from https://emojis.wiki/clockwise-vertical-arrows/.

Eac div had their own independent classes: straight, ninety, oneEighty and twoSeventy. These were to be used by the JS to declare constants. These constants were to have the same names: straight, ninety, oneEighty and twoSeventy.

Over in styles.css, I used the same initial styling that Brian used to place the monkeys in his project. I added some more classed though:

    .on {
    display: inline-block;
    }

The .on class is used to make the divs visible or not.

    .ninety {
    transform: rotate(90deg);
    }

    .oneEighty {
    transform: rotate(180deg);
    }

    .twoSeventy {
    transform: rotate(270deg);
    }

The other classes were used to rotate the divs by the required amount of degrees. I found out that you cannot rotate in-line objects, but you CAN rotate the block that they're in. I think I'm explaining that right, this is where I got the explainer from, thanks Anthony Craig: http://theoveranalyzed.net/2015/12/16/rotating-text-with-css

In app.js I used the querySelector method in the document library to define the const:

    const straight = document.querySelector('.straight')

querySelector scrolls through the HTML until it finds an element with the specified class (in this case, 'straight') and then associates the const with that element.

For the event listeners, I used the addEventListener() method. This takes two arguments. The first is the event, in this case it is 'click'. This means if the user clicks the object. Note that 'click' was not previously defined, instead, the addEventListener() method already knows what it means. The second argument is a function, which is what happens when the the event listener is triggered.

The function:

To change the rotation of the arrows upon every click, I used the same idea as Brian had for the monkeys. On each click of each arrows emoji, it would add the .on class to the next div and remove it from the current one. Remember the .on class used:

.on {
display: inline-block;
}

...all this was just to make the div visible, or invisible, whether it had the .on class or not.

As you can see there are four event listeners there in the JS.
Each one is listening out for a click on a specific div.

Technically, the user is not rotating the arrows. What is really happening is that whenever the current div is clicked, it disappears and the next, rotated element is displayed. Keep clicking until the div goes back to it's original (straight) position.

This has been a fun project. Looking forward to the next one.

TEST
