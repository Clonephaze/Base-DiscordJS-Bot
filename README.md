<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=80px src="https://discord.js.org/logo.svg" alt="Project logo"></a>
</p>
<h3 align="center">Base Discord.js Bot</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/Clonephaze/Clones-Test-Bot)](https://github.com/Clonephaze/Clones-Test-Bot/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/Clonephaze/Clones-Test-Bot/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Welome! This repository exists as an easy to install base DiscordJS based Discord Bot. 
    <br> 
</p>


## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About ](#-about-)
- [🏁 Getting Started ](#-getting-started-)
- [✔ Prerequisites ](#-prerequisites-)
- [💻 Installing ](#-installing-)
- [🎈 Usage ](#-usage-)
- [⛏️ Built Using ](#️-built-using-)
- [✍️ Authors ](#️-authors-)
- [🎉 Acknowledgements ](#-acknowledgements-)


## 🏁 Getting Started <a name = "getting_started"></a>

&nbsp;&nbsp;&nbsp; I created this setup script and repository to exist as easy starting point for anyone who is interesting in beginning creating their own hosted discord bot! My script will make sure you have all required dependencies and libraries and even create the required config.json file with your own personal keys! If you choose to install through this script then you will be able to start [Discord.js's&nbsp;own&nbsp;guide](https://discordjs.guide/creating-your-bot/event-handling.html#resulting-code) at the point right after creating an event handler. I also include an easy to use "bot start.bat" file that will quickly launch and log in your bot for you. If you would rather use the manual install instructions, you can find them [HERE](./manualInstallInstructions.md). 

![Alt Text](https://i.imgur.com/vxPkm4Z.gif)

## ✔ Prerequisites <a name = "prerequisites"></a>

If you choose to use my setup script then it will install *all* of the necessary missing dependencies, get all your files ready, and leave you with a completely prepared environment for your bot as seen in the above example!

You will need to have already made a bot-account/application through discord. You can do so [HERE](https://discord.com/developers/applications). Afterwards youll need to invite your bot to whatever server you want it working in. Under your [Developer&nbsp;Portal](https://discord.com/developers/applications) open your application and on the left side chose OAuth2->URL Generator. In the "scopes" box choose "bot". In the permissions box that pops up choose the permissions you want. Copy the url at the bottom of the page and paste it into your address bar and choose whichever server you'll be inviting your bot to. 


## 💻 Installing <a name = "installing"></a>

 If you've gotten your bot token and are ready to install the bot, you can download the install script [HERE](https://github.com/Clonephaze/Base-Discordjs-Bot/releases/latest) and place it anywhere you would like you would like the folder for your bot to live! For instance, if placed and executed in the Documents folder the batch file will create the bot folder at: "Documents/Base-Discordjs-Bot".

You absolutely ***MUST RUN THE SCRIPT AS AN ADMINISTRATOR!*** It will not run properly without it. Right click the script and select "Run as Administrator". If prompted if you would like to proceed then choose to run anyway.

At this point the script will proceed to install all of the missing dependencies and download (clone) my entire git repository to the folder you placed the script in. Before we can wrap up however you will need to supply the following information for the bot to work:

- Your Discord bot token found [HERE](https://discord.com/developers/applications) *aplication->Bot->Bot Token*
- Your Application ID found [HERE](https://discord.com/developers/applications) *aplication->General Information->Application ID*
- Your Server ID found [HERE](https://support.discord.com/hc/en-us/articles/206346498) *Open discord application->Right click your server->Copy server ID*

After that last prompt it will close and you're left with a completely prepared environment for your bot! If you look inside "base-discordjs-bot" you'll see a file named "bot start.bat". So long as you gave your keys correctly then running that script will start up and log in your bot!


## 🎈 Usage <a name="usage"></a>
Congrats! You've sucessfully set up a working discordjs dev environment for your bot! At this point you should follow [Discord.js's&nbsp;own&nbsp;guide](https://discordjs.guide) for continuing development of your bot! As stated at the beginining of the guide, the script has taken you to the point right after creating an event handler. 

## ⛏️ Built Using <a name = "built_using"></a>

- [Discord.js](https://discord.js.org/) - Powerful node.js library
- [Chocolatey](https://chocolatey.org/) - Package manager, used for Setup Script

## ✍️ Authors <a name = "authors"></a>

- [@Clonephaze](https://github.com/Clonephaze)


## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- [@kylelobo](https://github.com/kylelobo) -ReadMe Generator. Very useful as a template builder.
- [@torphedo](https://github.com/torphedo) -Told me how I could use batch scripts to install things that python could not. Ty sir.
