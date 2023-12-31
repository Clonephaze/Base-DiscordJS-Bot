// Import required modules and packages
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const { token } = require('./config.json');

// Create a new Discord client with the Guilds intent
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages] });

// Create a collection to store commands
client.commands = new Collection();

// Find all command folders in the commands directory
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

// Loop through each command folder
for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);

	// Find all command files in the folder
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

	// Loop through each command file
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);

		// Load the command module from the file
		const command = require(filePath);

		// Check if the loaded module has the required "data" and "execute" properties
		if ('data' in command && 'execute' in command) {

			// Add the command to the collection using its name as the key
			client.commands.set(command.data.name, command);
		}
		else {

			// Log a warning if the loaded module is missing the required properties
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// Event Handler
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Log in to Discord with the bot token
client.login(token);
