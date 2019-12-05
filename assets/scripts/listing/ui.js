'use strict'

const store = require('../store')
const showListings = require('../templates/all-listing.handlebars')
const oneListing = require('../templates/show-listing.handlebars')
const oneUserListing = require('../templates/show-user-listing.handlebars')
const showAuthListings = require('../templates/signed-in-listings.handlebars')
const showUserListings = require('../templates/user-listings.handlebars')

const successMessage = function (newText) {
  $('.message').text(newText)
  $('.message').removeClass('failure')
  $('.message').addClass('success')
}

const failureMessage = function (newText) {
  $('.message').text(newText)
  $('.message').removeClass('success')
  $('.message').addClass('failure')
}

const onCreateListingSuccess = function (data) {
  store.listing = data.listing
  successMessage('Can\'t wait for ' + data.listing.listing_name + '!')
  $('form').trigger('reset')
}

const onCreateListingFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onShowListingSuccess = function (data) {
  successMessage('What a stupendous listing! ' + data.listing.listing_name)
  data.listing.date = data.listing.date.split('T')[0]
  const oneListingHTML = oneListing({listing: data.listing})
  $('.listing-index').html('')
  $('.listing-index').html(oneListingHTML)
  $('.create-rsvp').show()
}

const onShowListingFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onShowUserListingSuccess = function (data) {
  successMessage('What a stupendous listing! ' + data.listing.listing_name)
  data.listing.date = data.listing.date.split('T')[0]
  const oneUserListingHTML = oneUserListing({listing: data.listing})
  $('.listing-index').html('')
  $('.listing-index').html(oneUserListingHTML)
  $('.create-rsvp').show()
}

const onShowUserListingFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onUpdateSuccess = function (data) {
  successMessage('Your listing has been updated!')
  $('.listing-index').html('')
}

const onUpdateFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onGetListingsSuccess = (data) => {
  successMessage('Be sure to sign-up to RSVP!')
  $('#find-listing').hide()
  const showListingsHTML = showListings({listings: data.listings})
  $('.listing-index').html('')
  $('.listing-index').html(showListingsHTML)
}

const onGetListingsFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onGetAuthListingsSuccess = (data) => {
  store.listings = data.listings
  successMessage('Check out what\'s happening!')
  $('#find-user-listing').hide()
  const showAuthListingsHTML = showAuthListings({listings: data.listings})
  $('.listing-index').html('')
  $('.listing-index').html(showAuthListingsHTML)
}

const onGetAuthListingsFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onGetUserListingsSuccess = (data) => {
  successMessage('Your listings!')
  const showUserListingsHTML = showUserListings({listings: data.listings})
  $('.listing-index').html(showUserListingsHTML)
}

const onGetUserListingsFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

const onDeleteListingSuccess = function () {
  successMessage('Your event has been destroyed.')
  $('.listing-index').html('')
}

const onDeleteListingFailure = function () {
  failureMessage('Sorry, something went wrong. Please try again.')
}

module.exports = {
  onCreateListingSuccess,
  onCreateListingFailure,
  onShowListingSuccess,
  onShowListingFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onGetListingsSuccess,
  onGetListingsFailure,
  onDeleteListingSuccess,
  onDeleteListingFailure,
  onGetUserListingsSuccess,
  onGetUserListingsFailure,
  onGetAuthListingsSuccess,
  onGetAuthListingsFailure,
  onShowUserListingSuccess,
  onShowUserListingFailure
}
