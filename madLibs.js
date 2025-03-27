const TIME_OF_DAY ='On a stormy night' ;
const MATH_RESULT = 10 - 7;
const BOOLEAN_VALUE = TIME_OF_DAY.includes("night");
const PERSON = {name: 'ghost', appearance: 'glowing eyes'};
let storyTitle = 'The Haunted House';


let madLib = `${TIME_OF_DAY} , I ventured into the haunted house.
The creaking walls seemed to whisper, sending chills down my spine.Suddenly,
 a ${PERSON.name}  appeared, its ${PERSON.appearance} piercing through the darkness. 
My heart raced as it floated silently toward me. Did you know 10 - 7 equals ${MATH_RESULT}? Spooky, right?`;

  
  let title = document.getElementById('story-template');
  const STORY = document.getElementById('madlibs-output');
//   document.getElementById('madlibs-output') = story
  title.textContent = storyTitle;
  STORY.textContent = madLib;
  console.log(storyTitle)
  console.log(madLib);


