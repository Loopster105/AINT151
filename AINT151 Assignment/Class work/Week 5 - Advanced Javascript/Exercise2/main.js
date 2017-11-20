var playerName;
var playerHealth;
var playerColour;

function StorePlayerData()
{
	playerName = document.forms[0]["playername"].value;
	playerHealth = document.forms[0]["playerhealth"].value;
	playerColour = document.forms[0]["playercolour"].value;

	localStorage.setItem("Name", playerName);
	localStorage.setItem("Health", playerHealth);
	localStorage.setItem("Colour", playerColour);
}
