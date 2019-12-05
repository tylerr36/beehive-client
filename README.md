# Beehive
This is a single page applicaton that allows the user to view. In addition, the user can RSVP to events, view all events created by other user, view events they've RSVPed to, and edit or delete events they've created.

## Important Links
- [Deployed front end client](https://tylerr36.github.io/beehive-client/)
- [Front end client repository](https://github.com/tylerr36/beehive-client)
- [Deployed back end API](https://tranquil-tor-91715.herokuapp.com/)
- [GitHub Repo for project's back end](https://github.com/tylerr36/beehive-api)

## Technologies Used
  - Node.js
  - Handlebars.js
  - HTML5
  - CSS3
  - bootstrap
  - sass
  - Javascript
  - jQuery
  - Git

## The Approach
Day one began with pair-programming, before each team member felt comfortable enough to work on his or her own. All branch pushes and pulls to or from the development branch were done as a team to minimize any risk of merge conflicts. After completing wireframes, user stories, and our ERD, we diligently planned out all of the files and folders that we anticipated needing throughout the project. we normally start out our day with morning stand to plan out what we need to target as a team and individual.

After testing all CRUD actions on the backend, we built Handlebars templates for the auth, event, and rsvp actions. We then began testing the actions from the front end. After successfully implementing all client-side functions and AJAX calls, we began styling the app and adjusting Handlebars templates.

Our team also utilized our slack channel to communicate ideas, helpful links for a problem,
and updates to other team members if changes were being made outside of our fixed on working hours.

## Future Goals
 - We want to finish our mobile accessibility for the site (we have the landing age as a WIP)
 - We want to remove the form fields for Update/Delete Event and Create RSVP and turn them into hyperlinks to create a more user friendly site. This would also include a hidden form field for rsvps that references the listing id when used.
 - We want to utilize a calendar api in the future so that users can search by date/month and view events within, and try Moments.js to clean up the displayed times for events.
 - refactor, refactor, refactor!

# User Stories

## Auth:
<li>As an unregistered user, I would like to sign up with a unique email and password.</li>
<li>As a registered user, I would like to sign in with my email and password</li>
<li>As a signed in user, I would like to change my password</li>
<li>As a signed in user, I would like to sign out.</li>

## API:

<li>As an unregistred user, I would like to see all events.</li>
<li>As an unregistred user, I would like to navigate through events by date.</li>
<li>As an unregistred user, I would like to see a list of all my created and rsvp's events.</li>
<li>As a signed in user, I would like to RSVP to an event.</li>
<li>As a signed in user, I would like to create my own event.</li>
<li>As a signed in user, I would like to update my own events.</li>
<li>As a signed in user, I would like to delete my own event.</li>

# Wire Frames
![Screenshot](./public/wireframes_landing_page_1_2.png)
![Screenshot](./public/wireframes_2.png)
![Screenshot](./public/wireframe_3.png)
![Screenshot](./public/wireframe_4.png)
