import os
import json

# Function to prompt the user for input
def prompt_user(question):
    return input(question)

# Set the working directory to the root of the project
os.chdir("..")

# Run command to install dependencies
npm_install_command = "npm install"
os.system(npm_install_command)

# Edit and rename template-config.json
template_config_filename = 'template-config.json'
config_filename = 'config.json'

# Edit template-config.json
with open(template_config_filename, 'r') as template_file:
    template_data = json.load(template_file)

template_data['token'] = prompt_user('Enter your Discord bot token: ')
template_data['clientId'] = prompt_user('Enter your application\'s client ID: ')
template_data['guildId'] = prompt_user('Enter your server ID: ')

with open(config_filename, 'w') as config_file:
    json.dump(template_data, config_file, indent=2)

# Delete template files
os.remove(template_config_filename)

# Set the working directory back to the location of the install.bat file
os.chdir("..")

# Delete the install.bat file
installScript = 'install.bat'
os.remove(installScript)