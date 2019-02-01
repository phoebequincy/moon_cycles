'use strict'
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('moonphase').del()
    .then(function() {
      // Inserts seed entries
      return knex('moonphase').insert(
        [{
          id: 1,
          phase:"New Moon",
          title:"Beginings",
          description: "The new moon has no illumination. As it is dark, it denotes the beginning, with a primal instinct for birthing. The seed, as a symbol, is beneath the ground. So this represents the germination stage, where you can initiate the emergence of something new by setting your intentions for what you wish to grow.",
          symptomatic_experience:"The new moon carries a fresh energy and potency, one that may spark a clarity of purpose and being within us. The sky is darker at this time, turning us inward to our own creative light. You may be feeling like garnering your resources, being alone, being restful." ,
          mindful_ways: "The New Moon is a great time to set your intentions, write down goals or begin new projects for the forthcoming cycle.  In the darkness, the fertile ground, you plant the seeds of your heartfelt desires on the New Moon, consciously focusing your Mind/Body/Spirit on the ‘feeling’ of your desires.",

        }, {
          id: 2,
          phase:"Waxing Crescent",
          title:"Purpose",
          description:"After the new moon, the illuminated portion of the moon is increasing, but less than half. Thus it gets bigger and builds up in strength and intensity, signifying the sprouting growth of the seed.",
          symptomatic_experience:"At this stage, there is forward motion and a hope for something more to come. There is a gush of energy and a forward moving strength that you can utilize. Moreover, plans, dreams and ideas are growing and it is at this time that you can identify your focus for growth and commitment.",
          mindful_ways:"The time between the new and full moon is excellent to enact on the new intentions that you had set on the new moon. It is a time to be positive, motivated and take action. There is an energy expansion that supports new ideas and even the meeting of new people in your life. It’s also a great time to lay the mental groundwork for your next project",
        }]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('moonphase_id_seq', (SELECT MAX(id) FROM moonphase));")
    })
}
