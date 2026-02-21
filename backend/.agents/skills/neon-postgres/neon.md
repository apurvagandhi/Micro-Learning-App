# Getting Start with Neon

Neon is a serverless PostGresSQL platform.
Between how collaborators are connected to the database and intuitive graphical user interface, 
I believe using this software will make it much easier to build and scale our app.

## The Setup
1. Go to https://neon.com/ and create an account.
2. Afterwards, open VSCode and download the "Neon - Serverless Postgres" extension.
3. In your email, you should've received an invite to the organization "inSPIRE Program" from me -
   this is where the database, "Micro-Learning-App", is hosted.
4. Return to VSCode and create a `.env` file in the root directory
5. Inside, type `DATABASE_URL` and the corresponding connectivity string I will provide to you.
6. From downloading the Neon extension, you will see a square logo with a little triangle cut-out
   in your activity bar - click on it.
7. From the "Branch Connection" side-bar, click on "All Branches"
8. Select
    Organization: inSPIRE Program
    Project: Micro-Learning-App
    Branch: production
9. Now, you are connected to the database on VSCode.