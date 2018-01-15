function Page1()
{
  document.getElementById('Room').innerHTML="Test"
  document.getElementById('equipment').innerHTML="None"
  document.getElementById('treasure').innerHTML="$0"
  document.getElementById('description').innerHTML="You awake in an unfamiliar place. Not knowing who you are or where you've come from."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page2();\">Look around the room</button></br>"
}

function Page2()
{
  document.getElementById('Room').innerHTML="Test 2"
  document.getElementById('equipment').innerHTML="None"
  document.getElementById('description').innerHTML="You look around the jail cell type room you are currently contained in. The air in the place feels like an oven, your mouth feels dry like a desert, there are scratches all over your arms and legs, yet your body doesn't feel weak. It feels warm and alive.  You have a ring on your finger glowing yellow but that’s the last of your worries. You notice the door is a bit loose but you can’t force it open with your hands. Maybe you could find something to force the door open?"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page3();\">Search the bed</button>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page4();\">Search the sink</button>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page5();\">Search the toilet</button>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page6();\">Check the cell door</button>"
}

function Page3()
{
  document.getElementById('Room').innerHTML="Test 3"
  document.getElementById('description').innerHTML="You find nothing that can help you get out. The bed looks like it is made out of wood, the pillow and duvet look like they have the same material as your clothing, You continue to look around the room to find a way out."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page2();\">Back to room</button>"
}

function Page4()
{
  document.getElementById('Room').innerHTML="Test 4"
  document.getElementById('description').innerHTML="You don’t find anything useful here. The sink is somewhat clean however a strong wretched stench emanates from the plughole that makes your eyes water. You cough briefly and then continue to look for a way out."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page2();\">Back to room</button>"
}

function Page5()
{
  document.getElementById('Room').innerHTML="Test 5"
  document.getElementById('description').innerHTML="You notice that the handle attached to the toilet is loose. It has very sharp edges so you slowly apply pressure using your foot until it breaks off. Now you just need to find something to create enough force to break the door and a way to distract the guard."
  document.getElementById('equipment').innerHTML="Toilet handle"
  document.getElementById('treasure').innerHTML="$0"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page2();\">Back to room</button>"
}

function Page6()
{
  document.getElementById('Room').innerHTML="Test 6"
  document.getElementById('description').innerHTML="A cold draft blows through the door. You look out the small window and see a guard by the door. You notice a small piece of metal wedged in the door. You slowly pull it out without making too much noise."
  document.getElementById('equipment').innerHTML="Toilet handle, Piece of metal"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page2();\">Back to room</button>"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page7();\">Break Open the door</button>"
}

function Page7()
{
  document.getElementById('Room').innerHTML="Test 7"
  document.getElementById('description').innerHTML="A voice from a distant room calls the guard, who exits the room, leaving you alone in your cell. You breathe a sigh of relief as your luck turns for the better. You use the toilets handle and metal to wedge the door to break the lock and open the cell. Hopefully no one heard that you say to yourself"
  document.getElementById('equipment').innerHTML="None"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page8();\">Enter Cell Hallway</button>"
}

function Page8()
{
  document.getElementById('Room').innerHTML="Test8"
  document.getElementById('description').innerHTML="There are two doors leading out of the jail. A door to the west, a door to the north (where the guard went). The door to the north has a heat emanating from it unlike the the door to the west which seems cold and peaceful yet something still feels off about it."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page9();\">Go through the west door</button></br>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page10();\">Go through the north door</button></br>"
}

function Page9()
{
  document.getElementById('Room').innerHTML="Test9"
  document.getElementById('description').innerHTML="You find yourself in an empty hallway. It feels cold and there is a smell of dampness in the air. All of a sudden the floor beneath you starts to crumble and break. You start falling and on the way down you see a red glow and the faint look of a demonical face laughing. All the light you felt when you awoke is gone as you are stuck in a never ending freefall."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page2();\">Go back to the start</button></br>"
}

function Page10()
{
  document.getElementById('Room').innerHTML="Test10"
  document.getElementById('description').innerHTML="A guard is asleep in a nearby chair to your left. You also notice that there is a door right in front of you and to the left. Both of them appear to be unlocked so if you’re quiet enough then you should be able to get through the doors without waking the guard up."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page11();\">Go through the north door</button></br>"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page12();\">Inspect the guard</button></br>"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page13();\">Go through the west door</button></br>"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page34();\">Kill the guard</button></br>"
}

function Page11()
{
  document.getElementById('Room').innerHTML="Test11"
  document.getElementById('description').innerHTML="A storage room, there is a lot of cleaning equipment at the back of the room and there are a few coats on the wall to the right of you. Out of the corner of your eye you catch a glint from one of the coats. You move closer to inspect the item it appears to be a key for a room somewhere. You put the key in one of the pouches attached to your shorts and Go to walk out the door you came in."
  document.getElementById('equipment').innerHTML="Strange Key"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page13();\">Go through east door</button></br>"
}

function Page12()
{
  document.getElementById('Room').innerHTML="Test12"
  document.getElementById('description').innerHTML="You inspect the guard. He looks like he is soundly asleep until you nudge the keys out of his hand. The keys sounded like a giant symbol that had just been hit. It echos in your ears and the next thing you know there are three demon type creatures surrounding you. You turn around and run back into the storage room and lock the door. This is your prison now. You’ll Never Be Free..."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page2();\">Go back to the start</button></br>"
}

function Page13()
{
  document.getElementById('Room').innerHTML="Test13"
  document.getElementById('description').innerHTML="An outside hallway. some guards are standing at a large front gate to the north. You could distract them and get in but how would you do that? On another note there is another door to the east which is unguarded you could sneak into that building without being noticed."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page14();\">Distract the guards</button></br>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page15();\">Go through the west door</button></br>"
}

function Page14()
{
  document.getElementById('Room').innerHTML="Test14"
  document.getElementById('description').innerHTML="You hear more guards coming. It appears that they have noticed you are missing. You’ll have to take extra care now. Luckily enough for you the guard took the other guards with him. You appear to be in some sort of lab but you can’t tell what any of the equipment is. There is a lot of funny shaped bottles across the desks. You pick one up and keep it for a distraction."
  document.getElementById('equipment').innerHTML="Funny shaped bottle with liquid in"
  document.getElementById('treasure').innerHTML="0"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page13();\">Go back outside</button></br>"
}

function Page15()
{
  document.getElementById('Room').innerHTML="Test15"
  document.getElementById('description').innerHTML="You enter the building unnoticed. You find yourself in what appears to be a kitchen for these devilish people. You should probably look around and see what you can find in here and proceed quickly to the next room. The room looks like a giant office. There is paperwork and folders everywhere. Now is your best chance to find something about this place and maybe about yourself."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page16();\">Move onto the next room and contine to look"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page13();\">Go back outside"
}

function Page16()
{
  document.getElementById('Room').innerHTML="Test16"
  document.getElementById('description').innerHTML="You don’t seem to find anything useful linking to what’s going on or who you are, you’ve gathered enough courage to move through the door on the opposite side of the room. This room smells very damp yet it doesn’t have any windows and there isn’t any water in the building but there are two doors both with logo on them with an unknown language written on it. Your gut is telling you left but your head is telling you to go right."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page18();\">Hallway"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page17();\">Go right"
}

function Page17()
{
  document.getElementById('Room').innerHTML="Test17"
  document.getElementById('description').innerHTML="You walk through the door and suddenly the door slams behind you. You try to open in but it refuses to open. You start walking down the halway shaped room but for some reason you don’t seem to be getting any closer to the other side of the room. You’re stuck in a never ending hallway and you have no way to get out."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page1();\">Game Over"
}

function Page18()
{
  document.getElementById('Room').innerHTML="Test18"
  document.getElementById('description').innerHTML="You walk out into another room this one seems very different to the last one there are a lot more ornaments and the place seems like a symbol of royalty. There is a passage to the left but it appears to be a dead end with lots of covered up picture frames."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page19();\">Some strange gallery"
}

function Page19()
{
  document.getElementById('Room').innerHTML="Test19"
  document.getElementById('description').innerHTML="You walk into what appears to be a gallery where you see these weird and devilish creatures. Your brain hurts as you look at this one creature in particular, you begin to have flashbacks of memories you don’t remember and you’re not sure why. You continue to ponder around until you decide to carry on and find a way out of this place."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page20();\">Outside Pathway</button>"
}

function Page20()
{
  document.getElementById('Room').innerHTML="Test20"
  document.getElementById('description').innerHTML="You walk your way around outside. There is a cliff at the edge at least 5 meters away from the path. You hear a voice cry out from the edge of the cliff. You pear over and you see one of the creatures from the gallery. He immediately asks how you got out. You say nothing so he asks for you to help him back up. What do you do?"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page21();\">Save him</button>"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page22();\">Don't save him </button>"
}

function Page21()
{
  document.getElementById('Room').innerHTML="Test21"
  document.getElementById('description').innerHTML="You decide to pull him up. And eventually pull him off the edge of the cliff. You ask him about if he owns the gallery. He replies by saying no but he is the owner of a storage room to the right of the castle entrance. You follow him to the storage building and it looks like a house more than a room. He gives you a potion of some sort as a thank you for the trouble of saving him and says he won’t tell anyone about him seeing you. You thank him and proceed to go to the castle."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page22();\">Castle Entrance</button>"
}

function Page22()
{
  document.getElementById('Room').innerHTML="Test22"
  document.getElementById('description').innerHTML="You carry on walking until you come across what appears to be the castle gates , you walk in through the big metal gate, The courtyard is huge so much to see yet it feels eary and evil at the same time. You walk up to a brown door and open it. You find yourself in a long hallway the appears to go on forever but you muster the courage and continue to walk the hallway."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page23();\">Machine Room</button>"
}

function Page23()
{
  document.getElementById('Room').innerHTML="Test 23"
  document.getElementById('treasure').innerHTML="0"
  document.getElementById('description').innerHTML="Whilst walking down the hallway you come across a lone door to the left as the pathway continues to the right. You look at the key in your pocket and think would this work but you’re curious to see where the pathway leads. After about 5 minute you use the key and find a weird machine. The ring begins to glow a bright white as you point it towards the machine. The machine begins to whine and all of a sudden explodes. You feel uneasy and worried the guards will find you so you run out of the room and continue down the halway."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page24();\">Libary</button>"
}

function Page24()
{
  document.getElementById('Room').innerHTML="Test 24"
  document.getElementById('description').innerHTML="You walk into a room stacked with shelves of books. You carry on looking through the shelves but find nothing interesting yet at the same time you’re worried you could get lost due how the room is arranged until you find another doorway which carries you through the castle."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page25();\">Kings Dining Room</button>"
}

function Page25()
{
  document.getElementById('Room').innerHTML="Test25"
  document.getElementById('description').innerHTML="You walk into a massive room with a long table in the middle of the room. At one end of the table a dog bowl and at the other a massive chair lording over the rest of the chairs. You observe the table and the arrangement of the table and think nothing of it. You pick up a fork and knife for good measure."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page26();\">Pinnacle of Heaven</button>"
}

function Page26()
{
  document.getElementById('Room').innerHTML="Test26"
  document.getElementById('description').innerHTML="You feel like you are at the pinnacle of heaven but there is a door in front of you and the hallway splits before the door as if the door is floating in a forbidden space. Maybe there is another way to get to the door? You decide to go through the door to your right instead of the one in front of you."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page27();\">Go through the door</button>"
}

function Page27()
{
  document.getElementById('Room').innerHTML="Test27"
  document.getElementById('description').innerHTML="You walk into the room and suddenly you remember everything all because you saw his face. He looks at you in amazement and beckons you closer but you don’t know what to do. You notice a door to the right of the room. Maybe you could run for the door? Or turn back and hope he doesn't catch you."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page28();\">Make a break for the door on the right</button>"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page31();\">Talk to the Devil King</button>"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page32();\">Run and leave the way you came in</button>"
}

function Page28()
{
  document.getElementById('Room').innerHTML="Test28"
  document.getElementById('description').innerHTML="You manage to break for the bedroom door and lock it before the devil can get in here too. You feel the rage emanating off of him go cross your back. You don’t have much time to find something to get you out of this situation."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page29();\">Golden Dagger</button>"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page30();\">Sharp Crown</button>"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page31();\">Keep Looking!</button>"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page33();\">Do Nothing?</button>"
}

function Page29()
{
  document.getElementById('Room').innerHTML="Freedom"
  document.getElementById('description').innerHTML="You see the gate and immediately feel a lot warmer and your field of vision isn’t seething in a pool of red and anger. You feel light and feel very happy, a hand reaches towards you and as you out your hand closer to it you vision starts turning white. You hear a voice say “You have been set free”. “Welcome To Heaven”."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page1();\">Restart Game</button>"
}

function Page30()
{
  document.getElementById('Room').innerHTML="Become The Devil King"
  document.getElementById('description').innerHTML="The Devil King bursts the door open and a deep red aura protrudes into the room. You grasp hold of the pointy crown and pierce it through his heart. He laughs as he is impaled to the wall of the room. And with his dying breath he says “You’re the devil king now” as he laughs and begins to melt like he had been touched by lava. You Have Become The Devil King!!!"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page1();\">Restart Game</button>"
}

function Page31()
{
  document.getElementById('Room').innerHTML="Your light has been Consumed"
  document.getElementById('description').innerHTML="You got consumed by the Devil King as you couldn’t find anything to defend yourself with and now you’ll never see the light of day again."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page1();\">Restart Game</button>"
}

function Page32()
{
  document.getElementById('Room').innerHTML="Captured"
  document.getElementById('description').innerHTML="You leave the room and you hear the devil kings anger roar through the room. You try to make a dash to the gate but the devil king’s minions have already blocked off your escape. They trap you and awate for their master to deal with you and as he looks into your eyes you know that you are done for."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page1();\">Restart Game</button>"
}

function Page33()
{
  document.getElementById('Room').innerHTML="Pretty Pixies and Unicorns"
  document.getElementById('description').innerHTML="You sit there and start thinking about random things like pixies and Unicorns. Oh, sorry, were you expecting a happy ending from this? Nahh you still got consumed by the Devil King but at least you had fun in the process."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page1();\">Restart Game</button>"
}

function Page34()
{
  document.getElementById('Room').innerHTML="Killed the guard"
  document.getElementById('description').innerHTML="Whilst the guard is sleeping you quickly twist his neck and double check to make sure he won’t come after you from the grave and you move on through the door."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page13();\">Outside Hallway</button>"
}
