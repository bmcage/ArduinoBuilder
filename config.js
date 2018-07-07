var config = {};

// Local port to host the nodejs-server
config.port = 7000;

// Path to the local Arduino directory where you can add libraries for the projects
config.localArduinoPath = '/home/mcciocci/Arduino';

// Path to the arduino installation directory
config.builderPath = '/home/mcciocci/arduino-1.8.5';

// Path where you want to compile/build the sketches (tmp directory)
config.localBuildPath = '/home/mcciocci/zzzArduinoBuilder';

module.exports = config;
