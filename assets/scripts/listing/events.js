'use strict'

const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onCreateListing = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createListing(formData)
    .then(ui.onCreateListingSuccess)
    .catch(ui.onCreateListingFailure)
}

const onShowListing = function (event) {
  event.preventDefault()
  const eventId = $(event.target).attr('data-id')
  api.showListing(eventId)
    .then(ui.onShowListingSuccess)
    .catch(ui.onShowListingFailure)
}

const onShowUserListing = function (event) {
  event.preventDefault()
  const eventId = $(event.target).attr('data-id')
  api.showUserListing(eventId)
    .then(ui.onShowUserListingSuccess)
    .catch(ui.onShowUserListingFailure)
}

const onUpdateListing = function (event) {
  event.preventDefault()
  const name = $('#listing-name').val()
  const location = $('#listing-location').val()
  const date = $('#listing-date').val()
  const start_time = $('#listing-start_time').val()
  const end_time = $('#listing-end_time').val()
  const description = $('#listing-description').val()
  const id = $('#listing-id').val()
  api.updateListing(name, location, date, start_time, end_time, description, id)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onGetListings = function (event) {
  event.preventDefault()
  api.getListings()
    .then(ui.onGetListingsSuccess)
    .catch(ui.onGetListingsFailure)
}

const onGetAuthListings = function (event) {
  event.preventDefault()
  api.getAuthListings()
    .then(ui.onGetAuthListingsSuccess)
    .catch(ui.onGetAuthListingsFailure)
}

const onGetUserListings = function (event) {
  event.preventDefault()
  api.getUserListings()
    .then(ui.onGetUserListingsSuccess)
    .catch(ui.onGetUserListingsFailure)
}

const onDeleteListing = function (event) {
  event.preventDefault()
  const id = $('#destroy-listing').val()
  store.listing_id = id
  api.deleteListing(id)
    .then(ui.onDeleteListingSuccess)
    .catch(ui.onDeleteListingFailure)
}

module.exports = {
  onCreateListing,
  onShowListing,
  onUpdateListing,
  onGetListings,
  onDeleteListing,
  onGetUserListings,
  onGetAuthListings,
  onShowUserListing
}
