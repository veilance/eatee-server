
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {name: "Fonda Ioannidis", address: "41100 Nadene Mcneish", city: "Equatorial Guinea", country: "Nauru", phone: "3719521234", longitude: "63.8321", latitude: "61.1766"},
        {name: "Beau Mahrenholz", address: "695 Oralia Mrvan", city: "Turkmenistan", country: "North Korea", phone: "9741627868", longitude: "19.3568", latitude: "33.7743"},
        {name: "Gabriella Cachero", address: "8088 Rich Bohorquez", city: "Cambodia", country: "Madagascar", phone: "1755681449", longitude: "45.9023", latitude: "53.6929"},
        {name: "Simonne Rutten", address: "6084 Giovanni Reper", city: "Spain", country: "Tanzania", phone: "3532443184", longitude: "2.70753", latitude: "80.9369"},
        {name: "Jackqueline Ogen", address: "7799 Denyse Schoenfeld", city: "Maldives", country: "Bulgaria", phone: "1839577775", longitude: "72.1657", latitude: "51.5711"},
        {name: "Mignon Fromdahl", address: "847 Theodora Mcglown", city: "Vanuatu", country: "Bangladesh", phone: "5966946424", longitude: "26.4064", latitude: "67.7631"},
        {name: "Nannie Schorsch", address: "881 Blake Dellano", city: "Brunei", country: "St. Kitts and Nevis", phone: "1284349691", longitude: "82.5342", latitude: "17.998"},
        {name: "Akilah Lightning", address: "3276 Joanne Egloff", city: "Togo", country: "Iceland", phone: "3422346592", longitude: "19.7375", latitude: "27.1373"},
        {name: "Carole Laclaire", address: "1935 Tiffani Davern", city: "Oman", country: "Thailand", phone: "9257765235", longitude: "41.3125", latitude: "57.7538"},
        {name: "Neda Sturdy", address: "1765 Laticia Cenci", city: "Zimbabwe", country: "Marshall Islands", phone: "1771739547", longitude: "24.7449", latitude: "84.8953"},
        {name: "Shirlene Dettinger", address: "9878 Deshawn Schlechten", city: "South Africa", country: "Dominican Republic", phone: "8129654977", longitude: "87.0503", latitude: "1.43207"}
      ]);
    });
};
