---
feature: login
status: approved
version: 1
generated: 2026-06-26
last_updated: 2026-06-26
layer: ui
source:
  - exploration
---

# Intent

Verify Sauce Demo login accepts valid credentials, rejects invalid and locked-out accounts, validates required fields, and surfaces helpful on-page guidance.

# Acceptance Criteria

- [ ] AC-1: Valid standard user credentials redirect to the inventory page
- [ ] AC-2: Login form displays username, password, and login controls
- [ ] AC-3: Accepted usernames hint is visible on the login page
- [ ] AC-4: Unknown username/password pair shows a mismatch error
- [ ] AC-5: Valid username with wrong password shows a mismatch error
- [ ] AC-6: Locked-out user shows a locked-out error
- [ ] AC-7: Empty username shows username-required error
- [ ] AC-8: Empty password shows password-required error
- [ ] AC-9: Both fields empty shows username-required error
- [ ] AC-10: error_user credentials redirect to the inventory page
- [ ] AC-11: problem_user credentials redirect to the inventory page
- [ ] AC-12: performance_glitch_user credentials redirect to the inventory page

# Scenarios

## Happy Path [AC-1]

- User submits valid standard_user credentials and lands on inventory

## Login Form Display [AC-2]

- User opens login page and sees username, password, and login button

## Login Form Display [AC-3]

- User opens login page and sees accepted-usernames hint

## Invalid Credentials [AC-4]

- User submits credentials that do not match any account

## Wrong Password [AC-5]

- User submits a valid username with an incorrect password

## Locked Out User [AC-6]

- User submits locked_out_user credentials

## Empty Username [AC-7]

- User leaves username blank and submits

## Empty Password [AC-8]

- User leaves password blank and submits

## Both Fields Empty [AC-9]

- User submits with both fields blank

## Alternate Valid Users [AC-10]

- error_user logs in successfully

## Alternate Valid Users [AC-11]

- problem_user logs in successfully

## Alternate Valid Users [AC-12]

- performance_glitch_user logs in successfully

# Out of Scope

- Logout and session persistence
- Cart or checkout flows after login
- visual_user image comparison testing

# Change Log

- 2026-06-26: approved after live login exploration and test generation
