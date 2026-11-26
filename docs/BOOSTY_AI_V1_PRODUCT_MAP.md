# Boosty AI V1 product map

## Goal
Turn the current solar shopping prototype into a financing-preparation product that helps a customer or installer-referred customer move from initial enquiry to a review-ready solar financing case.

The AI is a guide and preparation layer. It does not approve financing, perform the technical site audit, or make the final engineering decision.

## What we keep from the current repo
- Boosty brand, colours, typography and responsive shell
- Homepage structure and partner/funder pages
- Voice-first entry idea
- Existing React/Vite/Tailwind foundation
- The idea of capturing energy needs conversationally

## What becomes secondary or is retired from the primary journey
- Hard-coded system recommendations
- Hard-coded product catalogue and checkout
- Browser keyword-based voice parsing
- Immediate "pay small-small" checkout
- Pretending financing is approved inside the app
- Fixed installation promises before human review

## V1 customer journey

### 1. Start
Entry points:
- I need solar
- An installer referred me

User can continue by voice or text.

Language modes:
- Nigerian English
- Nigerian English + Pidgin
- Pidgin

### 2. Understand the need
The agent collects only what is needed to start:
- Home or business
- Location
- Current power situation
- What the user wants solar to cover
- Rough budget / whether financing is needed
- Existing installer or quote, if any

The agent can ask follow-up questions naturally instead of forcing the user through a long form.

### 3. Build the case
The conversation is converted into structured project information.

The customer sees:
- What Boosty understood
- Missing information
- Documents or evidence still needed
- Any installer quote or system proposal already provided

Everything must be editable.

### 4. Financing readiness
The customer receives a clear checklist. The exact lender requirements can change by financing partner and customer type, so they should be data-driven rather than hard-coded into the interface.

Status model:
- Started
- Information needed
- Ready for Boosty review
- Under review
- Sent to financing partner
- Financing decision
- Installation coordination

### 5. Human review
Boosty reviews the case before anything is submitted to a lender.

Human/partner-owned steps:
- Technical/site audit
- Final system design and price
- Credit/eligibility decision
- Financing terms
- Disbursement
- Installation
- Final commissioning

### 6. Customer dashboard
The customer can return to:
- Continue the conversation
- Upload missing items
- Review captured information
- See current status
- See the next action

## First build slice
1. New /start journey
2. Direct vs installer-referred entry
3. Nigerian English / Mixed / Pidgin language selector
4. Voice-or-text conversation shell
5. Structured summary panel
6. Financing-readiness checklist shell
7. Saved local draft as a temporary bridge before database integration

## Next technical layers
- PostgreSQL persistence
- Authentication
- File storage
- AI orchestration endpoint
- Production speech-to-text / text-to-speech or realtime voice provider
- Admin/reviewer view
- Financing-partner requirement rules
- Notifications

## AI provider principle
Do not lock the product to one model vendor. Evaluate providers on Nigerian English and Pidgin comprehension, voice naturalness, latency, reliability, privacy and cost. Keep the application layer provider-agnostic where practical.
