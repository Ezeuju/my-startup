// for users
let users=require("./../models/userModel");

 exports.signup=async (req, res,next) => {
    const { username,email, password } = req.body;
  
    try {
      // Check if the username is already taken
      const existingUser = await users.findOne({ name:username });
  
      if (existingUser) {
        return res.status(400).send('Username already exists');
      }
  
      // Create a new user in the database
      const newUser = new users({
        name:username,
        email:email,
        password:password, // In practice, hash and salt the password
      });
  
      await newUser.save();
  
      // Store the user data in the session
      req.session.user = newUser;
      res.send('Signup successful');
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).send('Internal Server Error');
    } finally{
        next()
    }
  };

  //Login


exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database based on the provided username
    const user = await users.findOne({ username });

    if (!user) {
      return res.status(401).send('User not found');
    }

    // Check the password (in a production application, you should hash and compare the password securely)
    if (user.password === password) {
      // Store the user data in the session
      req.session.user = user;
      res.send('Logged in');
    } else {
      res.status(401).send('Invalid password');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal Server Error');
  }
};

// You can define other controller functions for user-related actions here
