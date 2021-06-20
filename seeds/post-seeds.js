const { Post } = require('../models');

const postdata = [
  {
    title: 'Hunter',
    post_text: 'Hunter was the nickname of a clone commando sargeant who served as the commanding officer of Clone Force 99 in the Grand Army of the Republic during the Clone Wars.',
    user_id: 10
  },
  {
    title: 'Wrecker',
    post_text: 'Wrecker was a clone commando who served in the Grand Army of the Republic during the Clone Wars as a part of Clone Force 99.',
    user_id: 8
  },
  {
    title: 'Tech',
    post_text: 'Tech was the nickname of a clone commando who served in the Grand Army of the Republic during the Clone Wars as a member of Clone Force 99.',
    user_id: 1
  },
  {
    title: 'Crosshair',
    post_text: 'CT-9904, nicknamed Crosshair, was a clone commando who served in the Grand Army of the Republic during the Clone Wars as part of Clone Force 99.',
    user_id: 4
  },
  {
    title: 'Omega',
    post_text: 'Omega was an enhanced human female clone who lived in the years following the Clone Wars.',
    user_id: 7
  },
  {
    title: 'Rex',
    post_text: 'Rex, formerly designated CT-7567, was a veteran Clone Captain, Clone Commander, and Advanced Recon Commando who commanded the Grand Army of the Republic\'s famed 501st Legion of clone troopers.',
    user_id: 4
  },
  {
    title: 'Cid',
    post_text: 'Cid was a Trandoshan female residing on Ord Mantell, where she ran a cantina called Cid\'s Parlor.',
    user_id: 1
  },
  {
    title: 'Rampart',
    post_text: 'Rampart was a human male who held the rank of Vice Admiral in the Galactic Empire shortly after its formation from the Galactic Republic.',
    user_id: 1
  },
  {
    title: 'Cad Bane',
    post_text: 'Cad Bane was a Duros male bounty hunter in the galaxy during the Clone Wars. He was considered the leading bounty hunter in the galaxy due to the death of Jango Fett at the First Battle of Geonosis in 22 BBY.',
    user_id: 9
  },
  {
    title: 'Ahsoka Tano',
    post_text: 'Ahsoka Tano was a former Jedi Padawan who, after the Clone Wars, helped establish a network of various rebel cells against the Galactic Empire.',
    user_id: 5
  },
  {
    title: 'Obi-Wan Kenobi',
    post_text: 'Obi-Wan Kenobi, also known as Ben Kenobi, was a human male Jedi Master who served on the Jedi High Council during the final years of the Republic Era and in the Grand Army of the Republic during the Clone Wars',
    user_id: 3
  },
  {
    title: 'Maul',
    post_text: 'Once known as Darth Maul, Maul was a force-sensitive Dathomirian Zabrek male who established himself as a crime lord during the reign of the Galactic Empire.',
    user_id: 10
  },
  {
    title: 'Ezra Bridger',
    post_text: 'Ezra Bridger, a Force-sensitive human male, was a Jedi Padawan, a freedom fighter, and a revolutionary leader in the early rebellion against the Galactic Empire.',
    user_id: 8
  },
  {
    title: 'Hera Syndulla',
    post_text: 'Hera Syndulla was a Twi\'lek female revolutionary who became a central figure in the early rebellion against the Galactic Empire and the formation of the Alliance to Restore the Republic.',
    user_id: 3
  },
  {
    title: 'Chopper',
    post_text: 'C1-10P, commonly known as Chopper, was a masculine C1-series astromech droid that was active during the Clone Wars and the early years of the Galactic Empire.',
    user_id: 3
  },
  {
    title: 'Kanan Jarrus',
      post_text: 'Kanan Jarrus, born Caleb Dume, was a Force-sensitive human male Jedi Knight who survived Order 66 during the Clone Wars.',
    user_id: 7
  },
  {
    title: 'Grievous',
    post_text: 'Grievous, born as Qymaen jai Sheelal, was a Kaleesh male warlord who served as a commanding officer in the military forces of the Confederacy of Independent Systems during the last years of the Galactic Republic.',
    user_id: 6
  },
  {
    title: 'Han Solo',
    post_text: 'Han Solo, known only as Han until being given the surname Solo, and formerly known as Cadet 124-329 while serving as an Imperial cadet, was a human male smuggler',
    user_id: 4
  },
  {
    title: 'Din Djarin',
    post_text: 'Din Djarin, also known as The Mandalorian or simply Mando, was a human male Mandalorian who worked as a famous bounty hunter during the New Republic Era.',
    user_id: 6
  },
  {
    title: 'K-2SO',
    post_text: 'K-2SO (Kay-Too-Ess-Oh), abbreviated K-2 (Kay-Tu or Kaytoo) or Kay, was a KX-series security droid originally created for use in the Galactic Empire\'s armed forces.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
