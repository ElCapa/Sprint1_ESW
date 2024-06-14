const logout = (req, res) => {
    res.cookie("token", "", {
      path: "/",
      expires: new Date(0),
      secure: true,
      httpOnly: true,
      sameSite: "None",
    });
 
    res.status(200).send("Logout concluido");
  };

  module.exports = logout;