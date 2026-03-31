# Twilio Setup Guide

## Step 1 — Create a Twilio Account
Sign up at twilio.com and verify your account.

## Step 2 — Purchase a Phone Number
- Navigate to Phone Numbers → Manage → Buy a Number
- Filter by Voice capability
- Choose a local or toll-free number
- Click Buy

## Step 3 — Configure the Voice Webhook
- Go to Phone Numbers → Manage → Active Numbers
- Click your number
- Under Voice Configuration → A call comes in:
  - Set to: Webhook
  - URL: paste your n8n webhook endpoint URL
  - HTTP Method: POST

## Step 4 — Get Your n8n Webhook URL
- In n8n, open your call handler workflow
- Click the Webhook trigger node
- Copy the production webhook URL
- Paste it into the Twilio voice webhook field above

## Step 5 — Add Twilio Credentials to n8n
- In n8n go to Credentials → Add Credential → Twilio
- Add your Account SID and Auth Token (found in Twilio console dashboard)

## Step 6 — Test the Connection
- Call your Twilio number from any phone
- Confirm the n8n workflow triggers
- Check execution logs in n8n for the incoming call data

## Step 7 — Add ElevenLabs Voice
- Create an ElevenLabs account at elevenlabs.io
- Generate or select a voice
- Copy your API key
- Add ElevenLabs credential in n8n
- Connect the voice generation node after your OpenAI response node

## Notes
- Use Twilio's test credentials during development to avoid charges
- TwiML responses tell Twilio what to do with the call (speak, record, redirect)
- n8n responds to Twilio with TwiML XML to control the call flow
