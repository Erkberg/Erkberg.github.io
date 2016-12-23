import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import Game from '../components/game'

export default class Index extends React.Component {
	render () {
		var styleMarginLeft = { marginLeft: 32 };

		return (
			<div>
				<Helmet	title="Erik Schulze Portfolio" />

				{/* About me section */}
				<h2>About me</h2>
				<p>
					Hi, my name is Erik Schulze. I am a freelance programmer and hobby game developer. <span><br/></span>
					I am available for hire, so if you need anything done, just contact me and we can work it out together.
				</p>

				<a href="mailto: erisch01@web.de">
					<img src="assets/contact_mail.png" width="64x" height="64px" alt="Mail" title="Mail"/>
				</a>
				<a href="https://twitter.com/Erk_Berg" target="_blank">
					<img src="assets/contact_twitter.png" width="64px" height="64px"  alt="Twitter" title="Twitter" style={styleMarginLeft}/>
				</a>
				<a href="https://de.linkedin.com/in/erik-schulze-3b8185110" target="_blank">
					<img src="assets/contact_linkedin.png" width="64px" height="64px"  alt="LinkedIn" title="LinkedIn" style={styleMarginLeft}/>
				</a>
				<a href="https://www.xing.com/profile/Erik_Schulze19" target="_blank">
					<img src="assets/contact_xing.png" width="64px" height="64px"  alt="Xing" title="Xing" style={styleMarginLeft}/>
				</a>
				<a href="https://www.youtube.com/channel/UChhuYN7penG8doaFJvIwW8w" target="_blank">
					<img src="assets/contact_youtube.png" width="64px" height="64px"  alt="Youtube" title="Youtube" style={styleMarginLeft}/>
				</a>
				<span><br/><br/></span>


				{/* Skills section */}
				<h2>Skills</h2>
				<img src="assets/skills_gamedev.png" width="64px" height="64px" alt="Game Development / Design" title="Game Development / Design"/>
				<img src="assets/skills_unity.png" width="176px" height="64px"  alt="Unity" title="Unity" style={styleMarginLeft}/>
				<img src="assets/skills_csharp.png" width="64px" height="64px"  alt="C#" title="C#" style={styleMarginLeft}/>
				<img src="assets/skills_android.png" width="64px" height="64px"  alt="Android" title="Android" style={styleMarginLeft}/>
				<img src="assets/skills_java.png" width="64px" height="64px"  alt="Java" title="Java" style={styleMarginLeft}/>

				<p>
					These are just my core skills. There are lots of other things I have worked with or tried out, like UnrealEngine 4, JavaScript, React, C++, pixel art, 3D modeling and animation, music composition and many more. 
					<span><br/></span>
					If the above don't match what you imagine for your project, don't hesitate to contact me anyway. I am always eager to learn something new and am more than willing to do so in preparation for an interesting project.
				</p>
				<span><br/></span>


				{/* Previous work section */}
				<h2>Previous work</h2>
				<p>
					I worked on an <a href="https://chatcat.binpress.com/product/chat-messaging-sdk-for-android/2326" target="_blank">Android ChatSDK</a> for <a href="http://www.binpress.com/profile/ben-smiley/14290" target="_blank">Smiley Brothers Ltd</a>. This included realizing several smaller client requests, 
					but also bigger extensions to the SDK like audio and video messages as well as location based messaging. <span><br/></span>
					I also did a project for <a href="http://www.avanga.de/" target="_blank">Avanga Filmproduktion</a> and to a further extent for <a href="http://www.enercon.de/" target="_blank">Enercon</a>, in which I build a showcase application for an exhibition.
				</p>
				<span><br/></span>


				{/* Games section */}
				<h2>Games</h2>
				<p>
					I regularly participate in game jams, especially <a href="http://ludumdare.com/compo/" target="_blank">Ludum Dare</a>. <span><br/></span>
					I am also currently working on a bigger project for mobile in my spare time. <span><br/></span>
					Here's a list of all the games I created over the years:
				</p>
				
				<Game title="Void Inc." 
					desc="is an incremental game created within 48h for Ludum Dare 37 using Unity, Piskel, GIMP and FL Studio." 
					link="https://erkberg.itch.io/void-inc" 
					image="assets/game_voidinc.png"
					platform="itch.io" />
				<span><br/></span>

				<Game title="Ravan" 
					desc="is a 3d action platformer created within 48h for Ludum Dare 36 using Unity, Blender, GIMP and FL Studio." 
					link="https://erkberg.itch.io/ravan" 
					image="assets/game_ravan.png"
					platform="itch.io" />
				<span><br/></span>

				<Game title="Elements guide me" 
					desc="is a shapeshifting platformer created within 48h for Ludum Dare 35 using Unity, GIMP, Spriter and FL Studio." 
					link="https://erkberg.itch.io/elements-guide-me" 
					image="assets/game_elementsguideme.png"
					platform="itch.io" />
				<span><br/></span>

				<Game title="You are them, on s.t.e.r." 
					desc="is a 3d platformer with elements of stealth and bullet hell created within 48h for Ludum Dare 33 using Unity, Blender, GIMP and FL Studio." 
					link="https://erkberg.itch.io/you-are-them-on-ster" 
					image="assets/game_youarethemonster.png"
					platform="itch.io" />
				<span><br/></span>

				<Game title="Silence" 
					desc="is a musical shooter created within 48h for Ludum Dare 32 using Unity, GIMP and FL Studio." 
					link="https://erkberg.itch.io/silence" 
					image="assets/game_silence.png"
					platform="itch.io" />
				<span><br/></span>

				<Game title="No way out?" 
					desc="is an experience created within a couple of days for Mini Ludum Dare 58 using Unity, Blender and FL Studio." 
					link="https://erkberg.itch.io/no-way-out" 
					image="assets/game_nowayout.png"
					platform="itch.io" />
				<span><br/></span>

				<Game title="The Greenening" 
					desc="is an incremental game about nature created within 48h for Ludum Dare 31 using Construct 2, GIMP and FL Studio." 
					link="https://erkberg.itch.io/the-greenening" 
					image="assets/game_thegreenening.png"
					platform="itch.io" />
				<span><br/></span>

				<Game title="Fear - Friendly Extraterrestrial Assembly Robot" 
					desc="is an action puzzle game created within 72h for Ludum Dare 30 using Construct 2, Inkscape and FL Studio." 
					link="https://erkberg.itch.io/fear-friendly-extraterrestrial-assembly-robot" 
					image="assets/game_fear.png"
					platform="itch.io" />
				<span><br/></span>

				<Game title="Panda Run" 
					desc="is an endless runner created within a couple of weeks for Android using Construct 2, Photoshop, Inkscape and FL Studio. My brother created most of the graphics for this one." 
					link="https://play.google.com/store/apps/details?id=com.erisch01web.de.pandarun" 
					image="assets/game_pandarun.png"
					platform="Google Play Store" />
				<span><br/></span>

				<Game title="All is one" 
					desc="is a philosophical exploration-adventure game created within 48h for Ludum Dare 29 using Construct 2, Inkscape and FL Studio." 
					link="https://erkberg.itch.io/all-is-one" 
					image="assets/game_allisone.png"
					platform="itch.io" />
				<span><br/></span>

				<Game title="Incomplete" 
					desc="is a point and click adventure created within 72h for Ludum Dare 28 using Construct 2, Photoshop and LMMS. My brother created all the graphics for this one." 
					link="https://erkberg.itch.io/incomplete" 
					image="assets/game_incomplete.png"
					platform="itch.io" />
				<span><br/></span>

				<Game title="Run, Panda, Run!" 
					desc="is a top down shooter created within 48h for Ludum Dare 27 using Construct 2, Inkscape and Photoshop." 
					link="https://erkberg.itch.io/run-panda-run" 
					image="assets/game_runpandarun.png"
					platform="itch.io" />
				<span><br/></span>

				<Game title="How to train your hero" 
					desc="is a collection of minigames created within a few weeks using Flash/ActionScript3/Flixel and Inkscape. My brother created most of the graphics for this one." 
					link="http://www.kongregate.com/games/Erkberg/how-to-train-your-hero" 
					image="assets/game_howtotrainyourhero.png"
					platform="Kongregate" />
				<span><br/></span>

				<Game title="Asteroid storm" 
					desc="is an avoider game created within a few weeks using Flash/ActionScript3/Flixel and Photoshop. My brother created all the graphics for this one." 
					link="http://www.kongregate.com/games/Erkberg/asteroid-storm" 
					image="assets/game_asteroidstorm.png"
					platform="Kongregate" />
				<span><br/></span>

				<Game title="Pentagon survival" 
					desc="is a top down shooter as well as my first ever publicly released game created within a few weeks using Flash/ActionScript3/Flixel." 
					link="http://www.kongregate.com/games/Erkberg/pentagon-survival" 
					image="assets/game_pentagonsurvival.png"
					platform="Kongregate" />
				<span><br/></span>
			</div>
		)
	}
}
