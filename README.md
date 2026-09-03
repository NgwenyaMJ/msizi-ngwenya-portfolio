# Msizi Ngwenya Portfolio

A production-ready static portfolio website for **Msizi Ngwenya — Software Developer & Digital Solutions Builder**.

## What is included

- Responsive single-page portfolio
- Professional personal-brand positioning for both recruiters and direct clients
- Professional portrait integration
- Services / capabilities / process sections
- Project roadmap driven from one JavaScript array for easy future updates
- GitHub and LinkedIn links
- Active email, WhatsApp and telephone contact links
- Downloadable CV
- Real contact form powered by FormSubmit (no visitor email app required)
- SEO metadata + Schema.org person data
- Accessible navigation, labels and reduced-motion support
- No build tools or dependencies required

## Deploy to Vercel

1. Create a new GitHub repository for the portfolio.
2. Upload everything in this folder to the repository root.
3. In Vercel, choose **Add New > Project** and import the GitHub repository.
4. Vercel should detect this as a static site. No build command is required.
5. Deploy.

## Activate the contact form

The contact form posts to FormSubmit and sends enquiries to:

`msizijngwenya@gmail.com`

FormSubmit requires a one-time activation for a new email address:

1. After the site is deployed, submit one test enquiry through the form.
2. Open the activation email sent to `msizijngwenya@gmail.com` by FormSubmit.
3. Confirm the form once.
4. Future form enquiries will go directly to the inbox without visitors opening their email app.

If you later prefer a custom serverless email endpoint (Resend, SendGrid, etc.), the form can be swapped without changing the page design.

## Update projects later

Open `app.js` and edit the `projects` array at the top of the file. Each project has:

- `title`
- `status`
- `category`
- `description`
- `stack`
- `preview`

Once a project is live, update its status and add a demo/source link to the card markup.

## Public links currently configured

- GitHub: https://github.com/NgwenyaMJ
- LinkedIn: https://www.linkedin.com/in/msizi-jabu-ngwenya-9b63b5433
- Email: msizijngwenya@gmail.com
- Phone / WhatsApp: +27 71 867 4047
- Location: Johannesburg, South Africa

## CV note

The included CV was created from the professional information currently available. When institution name, qualification dates, certifications or verified experience details are available, update the CV with those details rather than inventing them.
