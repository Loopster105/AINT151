function Page1()
{
  document.getElementById('Room').innerHTML="Test"
  document.getElementById('equipment').innerHTML="torch"
  document.getElementById('treasure').innerHTML="$0"
  document.getElementById('description').innerHTML="You've regained your torch and light it. You notice you're in a small enclosed room with two doors. there are a few sarcophaguses scattered around the room. Maybe they have a weapon or something inside one of them? or does it contain soemthing else more scary?</br> </br> What will you do?"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page2();\">Open sarcophaguses</button></br>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page3();\">Open the left door</button>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page4();\">Open the right door</button>"
}

function Page2()
{
  document.getElementById('Room').innerHTML="Test 2"
  document.getElementById('equipment').innerHTML="torch, old rusty dagger"
  document.getElementById('description').innerHTML="You've found a old rusty dagger... at least you have something to defend youreself with. You notice there is and odd looking sarcophagus hidden in the wall. It gives of a eary vibe but you have an urge to open it.</br> </br>What will you do?</br> </br> You obtained a old rusty dagger!"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page5();\">Open Odd sarcophagus</button>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page3();\">Open the left door</button>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page4();\">Open the right door</button>"
}

function Page3()
{
  document.getElementById('Room').innerHTML="Test 3"
  document.getElementById('description').innerHTML="As you make your way through the left door you notice that the door opened a lot easier than you imagined. You peer around the door and notice that the room is empty. You enter the room with caution, and the room starts to violently shake. You try and find something to hold onto but all there is the door behind you or the door on the opposite side of the room.<br/> <br/What do you do?"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page6();\">Jump forwards</button>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page7();\">Stay where you are</button>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page8();\">Grab the door behind you</button>"
}

function Page4()
{
  document.getElementById('Room').innerHTML="Test 4"
  document.getElementById('description').innerHTML="The door is very stiff to open. You decide to do a run up at it to see if you can lodge it open. You go to the back of the room and turn around to face the door. You breath in deaply and make a charge for the door. Just as you get to the door it swings itself open and you notice that there is a deep and dark hole in the floor. Before you even have the chance to stop you fall down the hole and fall into the deep abyss, You black out and don't wake up again.</br> </br> YOU DIE.... "
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page1();\">Next</button>"
}

function Page5()
{
  document.getElementById('Room').innerHTML="Test 5"
  document.getElementById('description').innerHTML="You open the odd and eary sarcophagus and green smoke pours out of the sarcophagus, you notice that the smoke isn't poisnonous, you ignore the smoke and notice a load of bandages in the bottom of the sarcophagus and you find a Rare Jewel! gain $500 You turn around and notice that the room is engulfed in the green smoke that is pouring out the sarcophagus. You can barely see anything, until you notice a faint shadow at the opposit end of the room guarding the left door.</br> </br>You call out to it but there's no reply.</br> </br>What do you do?"
  document.getElementById('treasure').innerHTML="$500"
}

function Page6()
{
  document.getElementById('Room').innerHTML="Test 6"
  document.getElementById('description').innerHTML="You try to leap forward as the floor begins to crumble beneath your feet.You make it to the otherside only just until the edge that you landed on disolves and you fall down into the deep abyss with the blocks that formed the floor falling what feels like forever until you feel a sudden burst of pain that is excrutiating. You black out due to the pain.</br> </br>YOU HAVE DIED......."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page1();\">Back to the Start</button>"
}

function Page7()
{
  document.getElementById('Room').innerHTML="Test 7"
  document.getElementById('description').innerHTML="You stay in the middle of the room as the room to continously shake vigerously. Just when you think it is about to subside the floor gives out from underneath you. You fall down into the deep abyss with the blocks that formed the floor falling what feels like forever until you black out.</br> </br>YOU HAVE DIED......."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page1();\">Back to the start</button>"
}

function Page8()
{
  document.getElementById('Room').innerHTML="Test8"
  document.getElementById('description').innerHTML="You lunge yourself at the door behind you just being about to grab ahold of it as the room continues to vigerously shake. All of a sudden you heard a loud noise, you describe it as the sound of crumbling rock as the floor crumbles down and creates a dark and deep hole in the middle of the room.</br> </br>You scan the room as the room gradually stops shaking. As you scan the room you notice that a part of the floor is still connected to the other side of the room. You look at your options and think about what could be awaiting for you in the room you just came out of.</br> </br>What do you do next?"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page9();\">Go back to the other room</button></br>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page10();\">Try and cross the track</button></br>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page11();\">Scan the room</button></br>"
}

function Page9()
{
  document.getElementById('Room').innerHTML="Test9"
  document.getElementById('description').innerHTML=""
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page2();\">Open sarcophaguses</button></br>"
}

function Page10()
{
  document.getElementById('Room').innerHTML="Test10"
  document.getElementById('description').innerHTML="You go towards the track and shuffle along the track as slowly and carefully as you can. You manage to make it and you sigh in relif, You go towards the door at the end of the track and open the door."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page15();\">Next</button></br>"
}

function Page11()
{
  document.getElementById('Room').innerHTML="Test11"
  document.getElementById('description').innerHTML="You stand there and scan the room more. Trying to think of another plan to get out of this room. Nothing comes to mind. You consider your current options again.</br> </br>What do you do next?"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page9();\">Go back to the other room</button></br>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page10();\">Try and cross the track</button></br>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page12();\">Scan the room again?</button></br>"
}

function Page12()
{
  document.getElementById('Room').innerHTML="Test12"
  document.getElementById('description').innerHTML="You scan the room once more and you notice nothing new again. You consider your options. Surely you have something better to do with your time?</br> </br>What do you do next?"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page9();\">Go back to the other room</button></br>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page10();\">Try and cross the track</button></br>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page13();\">Scan the room again??</button></br>"
}

function Page13()
{
  document.getElementById('Room').innerHTML="Test13"
  document.getElementById('description').innerHTML="Seriously? You're realy going to... FINE whatever... You scan the room for the final time and notice a glow of light appear out the dark hole.... Typical.... You're tempted to look and find out what is causing the light.</br> </br>What do you do?"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page9();\">Go back to the other room</button></br>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page10();\">Try and cross the track</button></br>"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page14();\">Find the glow of light</button></br>"
}

function Page14()
{
  document.getElementById('Room').innerHTML="Test14"
  document.getElementById('description').innerHTML="You look down the hole and notice that hanging between some of the bricks that there is an Amulet and A dagger. The dagger appears used but in a better condition compared to the other one you picked up.</br> </br>You gained an Amulet and a Used dagger.</br> </br>You decide to make your way to the track and try to get to the other side of the room."
  document.getElementById('equipment').innerHTML="torch, old rusty dagger, used dagger"
  document.getElementById('treasure').innerHTML="$750"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page10();\">Try and cross the track</button></br>"
}

function Page15()
{
  document.getElementById('Room').innerHTML="Test15"
  document.getElementById('description').innerHTML="You enter a massive room that is barily lit by the light that is creeping through the pyramid shaped roof. You notice in the middle of the room that there is markings all across the floor in the shape of a circle and in the middle of it contains a large sarcophagus. You make a slow step towards it and all of a sudden all the candles in the room become lit and then an eary noise fills your ears.</br> </br>The sarcophagus starts to shake and the lid begins to float about the sarcophagus.</br> </br>You feel your heart beating like a drum.</br> </br>An arm reaches out of the sarcophagus and you hear the words...</br> </br>This is the tomb of Nabuna. You have disturbed my resting and stolen my precious jewels now you shall pay with your life.</br> </br>Guess it's time to fight for your life or do you decide to run away???."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page16();\">Try to run and flee"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page17();\">Stand and fight"
}

function Page16()
{
  document.getElementById('Room').innerHTML="Test16"
  document.getElementById('description').innerHTML="You run around the room trying to find somewhere to get out. You can't help but start to panic as you can feel Nabuna's presence get closer and closer as he drags himself out of his sarcophagus. You find a small crack in the wall. You can try to pry it open with an item or do you turn and fight Nabuna."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page18();\">Try to pry the crack open"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page17();\">Stand and fight"
}

function Page17()
{
  document.getElementById('Room').innerHTML="Test17"
  document.getElementById('description').innerHTML="You take up a fighting stance as Nabuna comes out of his tomb. His shrivelled and rotting skin is very distinctive as the room fills with an onomous purple mist. You stare directly into his beaming red eyes. You blink and he has disappeared. Suddenly you take a hit on your back and you go onto one knee in pain.</br> </br>You hear his meniacle laugh as you try to pinpoint where he is.</br> </br> Another hit from the side sends you flying and hitting the wall on the opposite side of the room. You look up as he bares down on you.</br></br>What do you do?"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page20();\">Squirm and use the used dagger"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page19();\">Stand and use the old dagger"
}

function Page18()
{
  document.getElementById('Room').innerHTML="Test18"
  document.getElementById('description').innerHTML="You decide to try and pry the crack open but what itme do you use to get out?"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page21();\">Old dagger"
  document.getElementById('ButtonChoices').innerHTML+="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page22();\">Used dagger"
}

function Page19()
{
  document.getElementById('Room').innerHTML="Test19"
  document.getElementById('description').innerHTML="You use the old dagger against Nabuna but it does very minamal damage. Nabuna pulls out the dagger and stabs you in the heart without a sudden moment of hesitation.</br></br> YOU HAVE DIED......."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page1();\">Back to the Start</button>"
}

function Page20()
{
  document.getElementById('Room').innerHTML="Test20"
  document.getElementById('description').innerHTML="You manage to squirm around Nabuna before he ends your life. You plung the Used dagger into Nabuna's chest, exposing his life source. You plung the dagger several times into the life source and Nabuna turns to dust whilst he shrieks in pain.</br></br> You gather through his remains and manage to find an excotic sword and jewels that ecumalate to $10,000. Moments later a part of the tomb opens up and you are able to escape."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page23();\">Escape</button>"
}

function Page21()
{
  document.getElementById('Room').innerHTML="Test21"
  document.getElementById('description').innerHTML="You used the Used dagger. It creates a bigger gap but not enough to escape with. Nabuna charges at you, grabs you and breaks your spine. You weren't able to escape Nabuna and his temple of soucery.</br></br> YOU HAVE DIED........"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page1();\">Back to the Start</button>"
}

function Page22()
{
  document.getElementById('Room').innerHTML="Test22"
  document.getElementById('description').innerHTML="You try to pry it open with the old dagger. The dagger barely makes a dent as it breaks after the first hit. You hear Nabuna getting closer. What's the plan?"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page24();\">DIE</button>"
}

function Page23()
{
  document.getElementById('Room').innerHTML="Escaped!!!"
  document.getElementById('treasure').innerHTML="$10,750"
  document.getElementById('description').innerHTML="You manged to escape and successfully gain all the treasure in Nabuna's tomb.</br></br> CONGRATULATIONS!!!!!!!!</br></br>Please refresh the page to start again."
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page24();\">DIE</button>"
}

function Page24()
{
  document.getElementById('Room').innerHTML="YOU DIED"
  document.getElementById('description').innerHTML="YOU DIED YOU DIED YOU DIED YOU DIED YOU DIED YOU DIED YOU DIED YOU DIED"
  document.getElementById('ButtonChoices').innerHTML="<button type=\"button\" class=\"btn btn-default\" onclick=\"Page1();\">Back to the start</button>"
}
