# Anurag University — B.Tech 1st Year Generative AI Tools Portal

Static academic portal for the Department of AIML.

## Repository layout

All website files are intentionally kept at the repository root so they can be copied directly into the repository:

```text
index.html
course.html
experiments.html
resources.html
ai-tools.html
faculty.html
student-guide.html
practice.html
doubts.html
auth.html
admin.html
style.css
main.js
data.js
faculty.js
experiments.js
resources.js
tools.js
firebase-config.js
firestore.rules
firebase.json
```

## Faculty profiles

Edit `faculty.js` and add another object to `facultyProfiles`. Faculty email and mobile are placeholders unless official information is supplied.

Each faculty member appears as one horizontal row in an 88%-width directory. The right-side content is vertically scrollable for long profiles.

## Experiment resources

Each experiment includes:
- `driveLink`
- `pdfLink`
- `pptLink`

Paste the shared resource URL into the matching object in `data.js`.

## Evaluation

The experiment evaluation Google Sheet URL can be entered in `admin.html` for browser-local testing. For a shared production value, set `EVALUATION_SHEET_URL` in `firebase-config.js` or replace the placeholder in the evaluation component.

## Google authentication

The portal is designed for Google sign-in with:
- allowed student/faculty domain: `@anurag.edu.in`
- administrator: `voorellishashankreddy@gmail.com`

Before production use:
1. Create a Firebase web app.
2. Enable Google Authentication.
3. Add the deployed site domain to Firebase Authorized Domains.
4. Replace the placeholders in `firebase-config.js`.
5. Deploy the `firestore.rules` rules to Firestore.
6. Keep the administrator account protected with Firestore rules.

Client-side configuration is not a secret; never place private service-account keys in these files.

## Student doubts

`doubts.html` is a student-facing anonymous doubt form. When Firebase is configured, submissions are written with only:
- topic
- message
- anonymous
- createdAt

The administrator is the only account allowed to read the `studentDoubts` collection under the provided rules.

## Local static test

Open `index.html` through a static server for best results. The site uses relative paths and does not require a build tool.
