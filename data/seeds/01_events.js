
exports.seed = async function(knex) {
    // Inserts seed entries
  await knex('events').insert([
        { name: 'Amy\'s Birthday', description: 'Come celebrate as Amy turns 21', location: 'Paddy\'s Bar', when: 'Jan 14 at 2.30 pm' },
        { name: 'Graduation Party for Milo', description: 'Milo graduated puppy training', location: 'AB Dog Park 123 Howl Pkwy', when: 'June 1st, 3-9 pm' },
        { name: 'Homegoing for Merle', description: 'Celebrate Merle and his life with his family', location: 'Big Orchard 123 Park Way', when: '4/16/20 at 12 pm' },
        { name: 'PTA Fundraiser', description: 'Rasie funds for the upcoming school year', location: 'Elm Grove Elementary School', when: 'Sat May 15 from 6-9 pm' },
      ]);
  };
