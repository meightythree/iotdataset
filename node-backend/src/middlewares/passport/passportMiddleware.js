const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const Admin = require("../../models/Admin").Admin;
const jwtSecretKey = require("../../config/keys/keys").jwtSecretKey;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.jwtSecretKey = jwtSecretKey;

//passport.authenticate("jwt",{session:false})
module.exports = passport => {
  passport.use(
    new JwtStrategy(options, (jwt_paylod, done) => {
      Admin.findById(jwt_paylod.id)
        .then(admin => {
          if (user) {
            done(null, admin);
          } else {
            done(null, false);
          }
        })
        .catch(err => {
          console.log(err);
        });
    })
  );
};
