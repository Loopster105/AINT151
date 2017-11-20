var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];


function OnLoad()
{
	for (var i = 0; i < weaponsArray.length; i++)
	{
		var weaponTag = "<option value='" + i + "'>" + weaponsArray[i] + "</option>";
		document.forms[0]["weapons"].innerHTML += weaponTag;
		console.log(weaponTag);
	}
}


function SelectWeapon()
{
	var selectWeapon = document.forms[0]["weapons"].value;
	  document.getElementById("currentWeapon").innerHTML = weaponsArray[selectWeapon];
}
