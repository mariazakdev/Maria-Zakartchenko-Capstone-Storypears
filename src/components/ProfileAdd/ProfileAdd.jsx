import "./ProfileAdd.scss";

function ProfileAdd() {
  return (
    <div className="create-profile">
      <section className="create-profile__heading">
        <h3>Create your writer profile</h3>
      </section>

      <section className="create-profile__form-wrapper">
        <form
        className="create-profile__form-wrapper__form"
          action="/create-profile"
          method="post"
        >
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Name for login"required />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Create a password" required />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Repeat a password" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Email for login" required />

          <label for="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" placeholder="Not visible on site" required />

          <label for="last_name">Last Name:</label>
          <input type="text" id="last_name" name="last_name" placeholder="Not visible on site" required />

          <label for="pen_first_name">Pen First Name:</label>
          <input
            type="text"
            id="pen_first_name"
            name="pen_first_name"
            placeholder="Name to be used on site" 
            required
          />

          <label for="pen_last_name">Pen Last Name:</label>
          <input type="text" id="pen_last_name" name="pen_last_name" placeholder="Last name optional"  required />

          <label for="bio">Bio:</label>
          <textarea id="bio" name="bio" placeholder="Tell us something about yourself" rows="4" cols="50" />

          <label for="links">Links:</label>
          <input type="text" id="links" name="links" />

          <input type="submit" value="Create Profile" />
        </form>
      </section>
    </div>
  );
}

export default ProfileAdd;
