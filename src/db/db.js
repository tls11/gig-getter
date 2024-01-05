const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gig-getter', { useNewUrlParser: true });

const Cat = mongoose.model('Venue',
  {
    name: String
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
  const venueSchema = new mongoose.Schema({
    name: String,
    email: String,
    bookingURL: String,
    played: Boolean,
  });
});
