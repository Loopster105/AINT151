var playerName;
var playerColour;
var playerHealth;
var playerWeapon;

function CreatePlayer()
{
  playerName = document.getElementById("playername").value;
  playerColour = document.getElementById("playercolour").value;
  playerHealth = document.getElementById("playerhealth").value;
  playerWeapon = document.getElementById("playerweapon").value;

  console.log(playerName);
  console.log(playerColour);
  console.log(playerHealth);
  console.log(playerWeapon);

  document.getElementById("name").innerHTML = playerName;
  document.getElementById("colour").style.backgroundColor = playerColour;
  document.getElementById("health").innerHTML = playerHealth;

  //if(playerWeapon == 1) {
  //  playerWeapon = "Crossbow of much hurting";
//  }
//  else if (playerWeapon == 2) {
  //    playerWeapon = "Broadsword of so slicing";
//  }
  //else {
  //  playerWeapon = "Wand of amaze magics";
//  }
  //document.getElementById("weapon").innerHTML = playerWeapon;

  //Challange
    switch (playerWeapon) {
        case '1':
            document.getElementById('weapon').innerHTML = "Crossbow of much hurting";
            break;

        case '2':
            document.getElementById('weapon').innerHTML = "Broadsword of so slicing";
            break;

        default:
            document.getElementById('weapon').innerHTML = "Wand of amaze magics";
            break;

    }
}
