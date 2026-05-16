# Supabase Setup - Step by Step

Follow these steps to set up your BreMan database:

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in the details:
   - **Organization**: Choose your organization
   - **Name**: `breman` (or `BreMan`)
   - **Database Password**: Create a strong password and **SAVE IT SECURELY**
   - **Region**: Choose `East US (North Virginia)` or closest to Wisconsin
   - **Pricing Plan**: Free tier is fine to start
5. Click "Create new project"
6. Wait 2-3 minutes for the project to provision

## Step 2: Get Your API Credentials

Once your project is ready:

1. Go to **Project Settings** (gear icon in sidebar)
2. Click on **API** in the left menu
3. You'll see:
   - **Project URL** - Copy this
   - **Project API keys**:
     - `anon` `public` - Copy this (this is safe to use in the browser)
     - `service_role` `secret` - Copy this (KEEP THIS SECRET!)

## Step 3: Create Your .env.local File

1. In your BreMan project folder, create a file named `.env.local`
2. Paste the following and replace with YOUR values:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-secret-key-here

# Anthropic API (you can add this later)
ANTHROPIC_API_KEY=

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Important**: Never commit this file to git (it's already in .gitignore)

## Step 4: Run Database Migrations

Now we'll create all the tables:

1. In Supabase dashboard, go to **SQL Editor** (in the left sidebar)
2. Click **New Query** button
3. Copy the contents of `supabase/migrations/20260515_initial_schema.sql` from your project
4. Paste into the SQL Editor
5. Click **Run** (or press Ctrl+Enter)
6. You should see "Success. No rows returned" - this is good!

7. Click **New Query** again
8. Copy the contents of `supabase/migrations/20260516_rls_policies.sql`
9. Paste and **Run**
10. Should also complete successfully

## Step 5: Verify Tables Were Created

1. Go to **Table Editor** in the left sidebar
2. You should see all these tables:
   - `user_profiles`
   - `horses`
   - `heat_observations`
   - `breeding_events`
   - `ultrasound_checks`
   - `semen_shipments`
   - `foaling_events`
   - `foaling_prep_observations`
   - `attachments`
   - `documents`
   - `costs`
   - `breeding_contracts`
   - `stallion_details`
   - `health_events`
   - `alerts`
   - `dictation_log`

## Step 6: Configure Email Auth (Optional but Recommended)

1. Go to **Authentication** → **Providers** in Supabase
2. Make sure **Email** is enabled (it should be by default)
3. Under **Auth Settings** → **Email Templates**, you can customize the signup email if you want

## Step 7: Test Your Connection

1. In your BreMan project folder, run:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

3. You should see the BreMan landing page

4. Click **Create Account** and try signing up with:
   - Display Name: Your name
   - Email: Your email
   - Password: At least 6 characters
   - Role: Owner

5. If signup works, you're connected! 🎉

## Troubleshooting

### "Failed to create user profile"
- Check that both migrations ran successfully
- Verify RLS policies are in place
- Check the browser console for detailed errors

### "Cannot connect to Supabase"
- Verify your `.env.local` has the correct credentials
- Make sure you copied the FULL URLs and keys (they're long!)
- Restart your dev server after adding .env.local

### Project is paused
- Free tier projects auto-pause after inactivity
- Go to Supabase dashboard and click "Restore" if needed

## Next Steps

Once your database is set up and you can sign up:
1. Add your first horse to the system
2. Start tracking breeding events
3. Set up AI dictation (requires Anthropic API key)

## Need Help?

- Check the Supabase logs: **Database** → **Logs** in dashboard
- View RLS policy errors: **Authentication** → **Policies**
- Check migration errors in SQL Editor output
