#steamid-converter

Simple conversion between Steam's ID formats, and also an example of the validation
of inputs that require the various Steam ID formats (not actually handled by this library, but I figured
hey, while I'm doing things with Regex...").

##Installation

If you just want to cut to the chase and use it in your software, simply
download converter-min.js and link it in your html files where you need it:

```html
<script src="http://peterolson.github.com/BigInteger.js/BigInteger.min.js"></script>
<script src="js/converter.js"></script>
```

Peterolson's [BigInteger.js](http://peterolson.github.com/BigInteger.js) is required for steamid-converter
to work, as Steam IDs are BigIntegers, unfortunately.

##Usage

An example of using every part of steamid-converter can be found in the file `ui.js`. Here's a brief overview:

```javascript
SteamIDConverter.toSteamID64("STEAM_0:1:50279161");
// => "76561198060824051"

SteamIDConverter.toSteamID("76561198060824051");
// => "STEAM_0:1:50279161"

SteamIDConverter.toSteamID3("STEAM_0:1:50279161");
// => "[U:1:100558323]"
```

All three methods can take any of the other two forms of ID. I.e. `toSteamID()` can take a steamid64 or a steamid3.

There are also equivalent functions that check if the given string is a steamID, steamID64, or steamID3:

```javascript
SteamIDConverter.isSteamID("STEAM_0:1:50279161");
// => true

SteamIDConverter.isSteamID64("bacon");
// => false

SteamIDConverter.isSteamID64("76561198060824051");
// => true

SteamIDConverter.isSteamID3("[U:1:100558323]");
// => true
```

Also included is a helper function to generate profile links based on the user's steam id:

```javascript
SteamIDConverter.profileURL("[U:1:100558323]");
// => "http://steamcommunity.com/profiles/76561198060824051"
```

