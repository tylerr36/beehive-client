'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const listingEvents = require('./listing/events.js')
const rsvpEvents = require('./rsvp/event.js')

$(() => {
  // LANDING AUTH
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // LANDING INDEX/FIND LISTING
  $('.find-listing').on('click', () => {
    $('#find-listing').show()
    $('#find-user-listing').show()
    $('#profile').hide()
    $('#create-listing').hide()
    $('#change-pw').hide()
    $('.listing-index').html('')
  })
  $('#index').on('submit', listingEvents.onGetListings)
  $('#index-auth').on('submit', listingEvents.onGetAuthListings)

  // PROFILE
  $('.profile').on('click', () => {
    $('#profile').show()
    $('#find-listing').hide()
    $('#create-listing').hide()
    $('#change-pw').hide()
    $('.listing-index').html('')
    $('.listing-index').show()
    $('#find-user-listing').hide()
  })
  $('#user-index').on('submit', listingEvents.onGetUserListings)
  $('#rsvp-index').on('submit', rsvpEvents.onIndexRsvp)

  // CREATE LISTING
  $('.create-listing').on('click', () => {
    $('#create-listing').show()
    $('#profile').hide()
    $('#find-listing').hide()
    $('#change-pw').hide()
    $('.listing-index').html('')
    $('.listing-index').hide()
    $('#find-user-listing').hide()
  })

  // SHOW LISTING
  $('rsvps').show()
  $('#new-listing').on('submit', listingEvents.onCreateListing)

  // INDEX LISTINGS
  $('.find-listing').on('click', () => {
    $('#find-listing').hide()
    $('#find-user-listing').show()
    $('.listing-index').html('')
    $('.listing-index').show()
  })
  // CHANGE PASSWORD
  $('.change-pw').on('click', () => {
    $('#change-pw').show()
    $('#create-listing').hide()
    $('#profile').hide()
    $('#find-listing').hide()
    $('#find-user-listing').hide()
    $('.one-listing').hide()
    $('.listing-index').html('')
  })

  // SHOW LISTING
  $('.work').on('click', '.show-event', listingEvents.onShowListing)

  // UPDATE/DELETE LISTING
  // Buttons appear on handlebars template - show-user-listing.handlebars
  $('.work').on('submit', '#update-listing', listingEvents.onUpdateListing)
  $('.work').on('submit', '#delete-listing', listingEvents.onDeleteListing)

  // On click link inside handlebars template - user-listings.handlebars
  $('.work').on('click', '.show-user-event', listingEvents.onShowUserListing)

  // Show listing/event to Rsvp to - signed-in-listings.handlebars
  $('.work').on('click', '.show-event', listingEvents.onShowListing)

  // CREATE RSVP
  // Button appears on handlebars template - show-listing-handlebars
  $('.work').on('submit', '.create-rsvp', rsvpEvents.onCreateRsvp)
  $('#delete-rsvp').on('submit', rsvpEvents.onDeleteRsvp)

  // REGISTER/LOGIN MODAL
  $('.show-login').on('click', () => {
    $('#sign-up').hide()
    $('.login').show()
  })

  $('.show-signup').on('click', () => {
    $('.login').hide()
    $('#sign-up').show()
  })

  // $('.listing-index').html('')
  $('.listing-index').show()

  // HIDING
  $('.nav').hide()
  $('#change-pw').hide()
  $('.sign-out').hide()
  $('.listings').show()
  $('#find-listing').show()
  $('.homepage').hide()
  $('#profile').hide()
  $('#create-listing').hide()
  $('#find-user-listing').hide()
  $('.post-patch-delete').hide()
})
