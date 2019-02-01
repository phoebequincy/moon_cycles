'use strict'
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('moonphase').del()
      .then(function() {
          // Inserts seed entries
          return knex('moonphase').insert(
            [
              {
                id: 1,
                phase: "New Moon",
                title: "Beginings",
                description: "The new moon has no illumination. As it is dark, it denotes the beginning, with a primal instinct for birthing. The seed, as a symbol, is beneath the ground. So this represents the germination stage, where you can initiate the emergence of something new by setting your intentions for what you wish to grow.",
                symptomatic_experience: "The new moon carries a fresh energy and potency, one that may spark a clarity of purpose and being within us. The sky is darker at this time, turning us inward to our own creative light. You may be feeling like garnering your resources, being alone, being restful.",
                mindful_ways: "The New Moon is a great time to set your intentions, write down goals or begin new projects for the forthcoming cycle.  In the darkness, the fertile ground, you plant the seeds of your heartfelt desires on the New Moon, consciously focusing your Mind/Body/Spirit on the ‘feeling’ of your desires.",

              },
              {
                id: 2,
                phase: "Waxing Crescent",
                title: "Purpose",
                description: "After the new moon, the illuminated portion of the moon is increasing, but less than half. Thus it gets bigger and builds up in strength and intensity, signifying the sprouting growth of the seed.",
                symptomatic_experience: "At this stage, there is forward motion and a hope for something more to come. There is a gush of energy and a forward moving strength that you can utilize. Moreover, plans, dreams and ideas are growing and it is at this time that you can identify your focus for growth and commitment.",
                mindful_ways: "The time between the new and full moon is excellent to enact on the new intentions that you had set on the new moon. It is a time to be positive, motivated and take action. There is an energy expansion that supports new ideas and even the meeting of new people in your life. It’s also a great time to lay the mental groundwork for your next project",
              },
              {
                id: 3,
                phase: "First Quarter Moon",
                title: "Endeavor",
                description: "This phase is called the “half moon” since it is illuminated one-half and increasing. The seed is now starting to make roots and the forward growth of the plant structure. At this phase, it symbolizes a period of strength, determination, focus, decision-making or re-evaluation, and commitment to action.",
                symptomatic_experience: "Because the first quarter moon occurs a week after the new moon, this is when we start to feel some resistance in the form of obstacles. If your intentions were planted during the new moon, your first hurdles at achieving these goals are experienced here. The themes surrounding this moon are challenges, decisions, and action. Your week of rest and intention-setting is over, and now you must work harder than before. Be prepared to make decisions on the spot, and do not lose your cool when things come at you out of nowhere.",
                mindful_ways: "The best way to handle this moon is to be flexible. Keep the intention you set during the last new moon in your mind the entire time, and make decisions that will ultimately bring about the outcome of your previously set intentions. The best way to start acting on them is to keep a to-do list and a journal. There should be a physical representation of you writing and acting out your intentions. Write yourself a daily to-do list and cross off things as you complete them."
              },
              {
                id: 4,
                phase: "Waxing Gibbous",
                title: "Refine",
                description: "After the first quarter, the illuminated portion is still increasing, but now it is more than half. At this phase, there are buds preparing to bloom. The themes surrounding this moon are adjustment, refining, and editing.",
                symptomatic_experience: "Things don’t always work out the way we planned them to, and this phase of the moon will help you realize what you need to reevaluate, give up, or change direction on.",
                mindful_ways: "If you want to reap the benefits of the full moon, maybe you need to make some sacrifices. Maybe you need to change course. Don’t resist the feeling of change during this moon.  Make note of what feels in need of adjustment and prune carefully. Be aware of what is essential and what is unnecessary."
              },
              {
                id: 5,
                phase: "Full Moon",
                title: "Havest",
                description: "At this phase, the moon, earth and sun are aligned like the new moon, but the moon is on the other side of the earth directly opposite the sun. Thus, the entire illuminated portion can be seen on earth, full and round. The seed has grown to full blossom. This represents fertility, transformation, completion and abundance and is a potent time for guidance, healing and positive intentions.",
                symptomatic_experience: "Full moon energy can also create tension, polarity and intense thoughts and emotional behavior. If you’re feeling intense, irritable, easily moved, it may be that you are being influenced by the powerful pull of the Moon’s full energy.",
                mindful_ways: "A full Moon is a good time to experience gratitude. To gracefully acknowledging the beauty of life itself and all you have brought into beingness. The Full moon is the perfect period to let go of anything that no longer serves your higher purpose, that you want to let go of, release or end. This can be anything from certain relationships, jobs, thoughts, situations and emotions, to de-cluttering and weight-loss."
              },
              {
                id: 6,
                phase: "Waning Gibbous",
                title: "Gratitude",
                description: "During this time the moon is more than one-half but not fully illuminated and decreasing. As the moon appears to be getting smaller, it is a good time to focus on getting rid of bad habits, stresses or negative thinking. This is also known as dissemination moon, which brings about energy for better communication, revelation and completion.",
                symptomatic_experience: "The themes surrounding this moon are gratitude, sharing, and enthusiasm. You should be feeling the benefits of your hard work from the last two weeks. Your metaphorical crops are in abundance and you should be seeing some (albeit small) outcome from your previously set goals and intentions. This is one of those weeks where you may find yourself burning a hole in your wallet — try not to go overboard but don’t feel bad about spending some extra time and money on those you love. Giving back is a big theme during this time.",
                mindful_ways: "Now's the time you'll be feeling full of love. You'll want to give back to those around you — maybe treat your special someone or best friend because you saw something and thought of them. Give gratitude to those who love you, and whom you love. Tell them why you’re grateful - write a note and place it where you know they’ll find it. Write that note to yourself, and put it in a book to find another day. Small gestures can be more meaningful than grand gestures."
              },
              {
                id: 7,
                phase: "Last Quarter Moon",
                title: "Release",
                description: "The last quarter moon is the reverse process of the first quarter, making its way back to another new moon. At this time, the seeds planted were grown and harvests reaped. It is the point where you stop, contemplate, introspect, reflect & re-evaluate for the future. There is a sense of thinking about what has been accomplished, and getting rid of the negative thoughts and energy for good in preparation for another beginning.",
                symptomatic_experience: "Throughout the month you may have experienced hur or anger. It's under this moon that you will let go of negative energy  and release anger. Purging yourself to be able to receive the new intentions you will set again during the next new moon.",
                mindful_ways: "A great practice during this moon is a cleanse. Clean out your apartment, your closet, your friendships. Look at anything that's no longer serving you and get rid of it. Pay attention to the unnecessary emotional and physical clutter you’ve accumulated during this past cycle and rid yourself of it. To shed this unnecessary emotional weight, try participating in a class or any type of physical activity."
              },
              {
                id: 8,
                phase: "Waning Crescent",
                title: "Reflect",
                description: "At this phase, the moon is partly illuminated less than one-half, and decreasing until the light is completely gone and forms a new moon. It is the end of the old cycle, and the start of an approaching new one. It is a time to detach from the world and rest yourself. It is a time to think things over and contemplate what you have achieved and what you would like to shed. It is a time to prepare for the start of a new beginning.",
                symptomatic_experience: "You may be feeling empty during this time. You’ve gone through an entire moon cycle and things have come and gone — willingly or not. You may be feeling drained or unimaginative. Motivation may not come easily to you right now. Be accepting and forgiving of yourself. Now is the time for surrendering the outcome.",
                mindful_ways: "Some things will always be out of your control and fate must take its course. This is a good time to reflect on the past weeks and begin to form your intentions for the New Moon, but not vigorously. This is a time for rest, reflection and renewal. Catch up on sleep, do peaceful activities and give yourself permission to be gentle with yourself."
              }])
              .then(() => {
                return knex.raw("SELECT setval('moonphase_id_seq', (SELECT MAX(id) FROM moonphase));"
              )
          })
      })
  }
