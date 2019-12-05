'use strict'

const store = require('../store')
const showRsvps = require('../templates/all-rsvp.handlebars')
const createRsvp = require('../templates/create-rsvp.handlebars')

const successMessage = function (newText) {
  $('.message').text(newText)
  $('.message').removeClass('failure')
  $('.message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('.message').text(newText)
  $('.message').removeClass('success')
  $('.message').addClass('failure')
}

const onCreateRsvpSuccess = function (data) {
  store.rsvp = data.rsvp.listing
  successMessage('You\'re now RSVP\'d to a great event')
  // const oneRsvpHTML = createRsvp({listing: data.rsvp})
  $('.listing-index').html('')
  // $('.listing-index').html(oneRsvpHTML)
}

const onCreateRsvpFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onIndexRsvpSuccess = function (data) {
  store.rsvps = data.rsvps
  successMessage('Your RSVPs')
  const showRsvpsHTML = showRsvps({rsvps: store.rsvps})
  $('.listing-index').html('')
  $('.listing-index').html(showRsvpsHTML)
}

const onIndexRsvpFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onDeleteRsvpSuccess = function () {
  successMessage('Rsvp with id: ' + store.rsvp_id + ' was destroyed.')
}

const onDeleteRsvpFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

module.exports = {
  onCreateRsvpSuccess,
  onCreateRsvpFailure,
  onIndexRsvpSuccess,
  onIndexRsvpFailure,
  onDeleteRsvpSuccess,
  onDeleteRsvpFailure
}
