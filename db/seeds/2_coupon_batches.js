
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coupon_batches').del()
    .then(function () {
      // Inserts seed entries
      return knex('coupon_batches').insert([
        {name: "Sidney Cunico", timestamp: new Date('2017-07-18T20:50:53+04:00').toISOString(), time_limit: 37, quantity: 10, image: "", price: 72.1203, discount: 14, restaurant_id:1},
        {name: "Ardith Vrana", timestamp: new Date('2010-03-09T20:36:59-07:00').toISOString(), time_limit: 112, quantity: 53, image: "", price: 13.055, discount: 1, restaurant_id:2},
        {name: "Hyacinth Baggs", timestamp: new Date('2014-01-11T03:54:50+01:00').toISOString(), time_limit: 84, quantity: 17, image: "", price: 92.8963, discount: 6, restaurant_id:3},
        {name: "Eugenie Derrico", timestamp: new Date('2017-06-28T16:16:51+08:00').toISOString(), time_limit: 72, quantity: 83, image: "", price: 67.6934, discount: 15, restaurant_id:4},
        {name: "Elizbeth Golderer", timestamp: new Date('2026-11-28T23:09:56-09:00').toISOString(), time_limit: 19, quantity: 83, image: "", price: 12.0116, discount: 22, restaurant_id:2},
        {name: "Nannie Linkert", timestamp: new Date('2022-11-20T06:56:01-08:00').toISOString(), time_limit: 35, quantity: 47, image: "", price: 65.3683, discount: 19, restaurant_id:2}
      ]);
    });
};
