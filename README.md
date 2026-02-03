# 🎤 Sound Detection Circle

Detect sound and use it as an input in p5JS.🎵✨

## 🎨 What Does This Do?

This project listens to sounds through your microphone and draws a pulsing circle that grows and shrinks based on how loud the sound is.

- **Quiet sounds** (like whispers 🤫) keep the circle small
- **Loud sounds** (like clapping 👏 or shouting 🗣️) make the circle BIG
- The circle responds in **real-time** as you make noise!

## 📁 Project Files

Here's what each file does:

- **`index.html`** - The webpage that holds everything together 🏠
- **`sketch.js`** - Where the magic happens! This code draws and updates the circle ✨
- **`style.css`** - Makes everything look sleek and modern 💅
- **`p5.js` and **`p5.sound`\*\* - Libraries that make creative coding with sound super easy 📚

## 🚀 How to Run This Project

1. **Open this folder in VS Code** - Drag and drop the `sound-detection` folder onto the VS Code icon 🌐
2. **Install the Live Server extension** - Search "Live Server" in the Extensions panel and click Install 🔌
3. **Click "Go Live"** - You'll see this button in the bottom right corner of VS Code 🎬
4. **Click anywhere on the page** - This allows your browser to access your microphone 🖱️
5. **Allow microphone access** - Click "Allow" when your browser asks for permission ✅
6. **Make some noise!** - Sing, clap, talk, play music, and watch the circle pulse! 🎉

## 📡 Play online instead

If you want to play with this online go here:
https://editor.p5js.org/amcc/sketches/LDls3PJkh

## 🔧 How the Code Works

Let's break down what's happening in `sketch.js`:

### Setup (Getting Ready)

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  audioInput = new p5.AudioIn();
  audioInput.start();
}
```

- Creates a canvas that fills your entire screen 🖼️
- Starts listening to your microphone 🎤
- Gets ready to measure sound levels ⚡

### Draw (Making It Visual)

```javascript
function draw() {
  background(0); // Black background
  let amplitude = audioInput.getLevel(); // Measure how loud the sound is
  circle(width / 2, height / 2, amplitude * 1000); // Draw the pulsing circle
}
```

- Runs about 60 times per second ⚡
- Measures the sound amplitude (how loud it is)
- Draws a circle in the center that changes size based on the sound
- Multiplies by 1000 to make the effect more dramatic 📊

## 🎮 Try Experimenting!

Want to customize it? Here are some fun things you can try:

### Change the Circle Color 🎨

In `sketch.js`, add this line after `background(0);`:

```javascript
fill(255, 0, 0); // Red circle
```

Try these colors:

- `fill(0, 255, 0);` for green 💚
- `fill(0, 0, 255);` for blue 💙
- `fill(255, 255, 0);` for yellow 💛
- `fill(255, 0, 255);` for pink/magenta 💜

### Change the Background Color 🌈

Replace `background(0);` with:

- `background(255);` for white ⚪
- `background(50);` for dark gray ⚫
- `background(100, 150, 200);` for blue 🔵

### Make Multiple Circles 🔄

Add more circles that react differently:

```javascript
circle(width / 4, height / 2, amplitude * 800);
circle((3 * width) / 4, height / 2, amplitude * 800);
```

### Change the Responsiveness 📢

Modify the `amplitude * 1000` part:

- `amplitude * 500` - Circle is less sensitive (smaller changes)
- `amplitude * 1500` - Circle is more dramatic (bigger changes)
- `amplitude * 2000` - MEGA dramatic! 💥

### Add a Border 🎯

Make the circle have an outline:

```javascript
stroke(255, 100, 0); // Orange border
strokeWeight(5); // 5 pixel thick border
circle(width / 2, height / 2, amplitude * 1000);
noStroke(); // Turn off stroke for next shapes
```

## 📚 Learn More About p5.js

This project uses **p5.js**, a JavaScript library that makes creating interactive art and visualizations easy and fun!

### Helpful p5.js Resources:

- 🏠 [p5.js Main Website](https://p5js.org/)
- 📖 [p5.js Reference Guide](https://p5js.org/reference/) - Look up what any function does!
- 🎓 [p5.js Learn](https://p5js.org/learn/) - Tutorials and examples
- 🔊 [p5.sound Reference](https://p5js.org/reference/#/libraries/p5.sound) - Sound functions
- 🎨 [p5.js Examples](https://p5js.org/examples/) - Cool projects to explore

### Key p5.js Concepts Used Here:

- 🖼️ [`createCanvas()`](https://p5js.org/reference/#/p5/createCanvas) - Makes your drawing area
- 🎨 [`background()`](https://p5js.org/reference/#/p5/background) - Sets the background color
- ⭕ [`circle()`](https://p5js.org/reference/#/p5/circle) - Draws a circle
- 🎤 [`p5.AudioIn`](https://p5js.org/reference/#/p5.AudioIn) - Gets sound from your microphone
- 📊 [`getLevel()`](https://p5js.org/reference/#/p5.AudioIn/getLevel) - Measures sound amplitude

## 💡 Tips for New Coders

- **Don't be afraid to break things!** You can always undo with Cmd+Z (Mac) or Ctrl+Z (Windows) 🔄
- **Change one thing at a time** - This helps you understand what each part does 🔍
- **Save often!** Use Cmd+S or Ctrl+S to save ⌨️
- **Check the console** - If something breaks, press F12 to open developer tools and see the error message 🐛
- **Experiment freely!** There's no "wrong" code when you're learning - just fun discoveries! 🎉

## 🤔 Troubleshooting

**Nothing happens when I click?**

- Make sure you allowed microphone access in your browser
- Try refreshing the page and clicking again
- Check if another app is using your microphone

**The circle isn't moving?**

- Make sure your microphone is actually working
- Try making louder sounds!
- Check the browser console (F12) for error messages

**I see an error message?**

- Press F12 to open the browser's developer tools
- Look at the Console tab to see what went wrong
- Make sure all files (HTML, JS, CSS) are in the same folder
- Check that you're running it through a local server (not just opening the HTML file)

**The circle is too big or too small?**

- Try changing the `1000` in `amplitude * 1000` to a different number
- Smaller numbers = less dramatic, larger numbers = more dramatic

## 🎯 Challenge Ideas

Once you've got the hang of it, try these challenges:

1. 🌈 **Rainbow Circle** - Make the circle change color based on how loud the sound is
2. 📍 **Multiple Circles** - Add 3-5 circles that pulse at different rates
3. 🎪 **Different Shapes** - Replace the circle with rectangles, triangles, or other shapes
4. 🔤 **Text Response** - Display the sound level as text on the screen
5. 🎆 **Pattern Generator** - Draw repeating patterns that react to sound
6. 📈 **Sound Visualizer** - Create a bar graph of different frequency ranges
7. 🎵 **Color Reactivity** - Change the background color based on sound levels

## 🚀 Next Steps

- **Explore the FFT library** - Analyze different sound frequencies instead of just volume
- **Add interactivity** - Use mouse/keyboard to control the visualizer
- **Play with animation** - Add trails, fading effects, or particle systems
- **Sound reactive UI** - Make buttons, text, or other elements react to sound

## 🎉 Have Fun!

This is just the beginning of what you can create with p5.js and sound! Keep experimenting, tweaking, and having fun with your code. There's no limit to what you can make!

---

_Made with p5.js and a lot of ❤️_
