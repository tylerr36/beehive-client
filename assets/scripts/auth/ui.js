'use strict'

const store = require('../store.js')

const successMessage = function (newText) {
  $('.message').text(newText)
  $('.message').removeClass('failure')
  $('.message').addClass('success')
  // $('form').trigger('reset')
  // setTimeout(function () { successMessage('') }, 8000)
}

const failureMessage = function (newText) {
  $('.message').text(newText)
  $('.message').removeClass('success')
  $('.message').addClass('failure')
  // setTimeout(function () { failureMessage('') }, 4000)
}

// SIGN UP
const onSignUpSuccess = function () {
  successMessage('signed up successfully!')
  $('#sign-up').trigger('reset')
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  $('#sign-up').trigger('reset')
}

// SIGN IN
const onSignInSuccess = function (responseData) {
  successMessage(`You're signed in!`)
  store.user = responseData.user
  homepage()
  $('#profile').hide()
  $('#create-listing').hide()
  $('#change-pw').hide()
  $('.listing-index').html('')
  $('#find-listing').hide()
  $('.post-patch-delete').show()
  $('body').css('height', '130vh')
  $('form').trigger('reset')
}

const onSignInFailure = function () {
  failureMessage('Oh no! Sign In is incorrect. Please try again!')
}

// Change password
const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
  $('form').trigger('reset')
}

// Change password
const onChangePasswordFailure = function () {
  failureMessage('Password change failed.')
}

// SIGN OUT
const onSignOutSuccess = function () {
  successMessage(`Goodbye! Come back soon!`)
  landing()
  $('.listing-index').show()
  $('.listing-index').html('')
  $('#find-listing').show()
  $('#find-user-listing').hide()
  $('.post-patch-delete').hide()
  $('body').css('height', '100vh')
}

const onSignOutFailure = function () {
  failureMessage(`Sign out failed. Please try again!`)
}

const homepage = function () {
  $('.landing').hide()
  $('.nav').show()
  $('.sign-out').show()
  $('.homepage').show()
  $('#change-pw').hide()
  $('#find-user-listing').show()
}

const landing = function () {
  $('.landing').show()
  $('#find-listing').show()
  $('.nav').hide()
  $('.homepage').hide()
  $('.sign-out').hide()
  $('#find-user-listing').hide()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
