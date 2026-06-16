-- Seed approved FAQs for the website assistant ("Asha").
-- Run AFTER chatbot_faqs.sql, in the same Supabase project.
--
-- ⚠️ REVIEW BEFORE RUNNING. These answers are drafted to be safe — facts that
-- are already in the bot's SYSTEM knowledge base, or, where the policy isn't
-- defined, a warm deferral to the team (never an invented promise). EDIT any
-- answer to match EzyHelpers' real policy before approving. Anything you're
-- unsure about: leave the answer as a "our team will confirm on the call" line.
--
-- The bot rephrases these in its own voice; keep them factual and short.
-- Upsert-safe: re-running updates the answer/keywords instead of erroring.

insert into public.chatbot_faqs (question_key, question, answer, keywords, status, source)
values
  (
    'do you provide weekend or sunday maid service',
    'Do you provide weekend or Sunday maid service?',
    'We can usually arrange help that fits your schedule, including weekends — our team will confirm the exact timing options for your area on a quick call.',
    'weekend weekends sunday saturday holiday off day timing schedule maid',
    'approved', 'manual'
  ),
  (
    'is there an emi or installment option for the fee',
    'Is there an EMI or installment option for the fee?',
    'Our team can walk you through the payment options (UPI, bank transfer, or payment link) and any flexibility on a quick call — share your details and they''ll guide you.',
    'emi installment instalment payment plan monthly pay fee finance flexible',
    'approved', 'manual'
  ),
  (
    'can i choose the language or gender of the helper',
    'Can I choose the language or gender of the helper?',
    'Absolutely — you can share preferences for language, gender, and experience, and we match accordingly.',
    'language gender female male prefer preference kannada hindi tamil telugu match helper',
    'approved', 'manual'
  ),
  (
    'how long does a replacement take',
    'How long does a replacement take if a helper does not work out?',
    'Replacements typically take about 10 to 15 business days. If we can''t find a suitable candidate within 30 business days, you may exit and claim a refund. Free replacements apply on the 3-month (1) and 11-month (3) plans.',
    'replacement replace doesnt work out leaves absconds timeline how long guarantee',
    'approved', 'manual'
  ),
  (
    'do you offer gardener service',
    'Do you offer gardener / gardening service?',
    'Yes — we connect households with gardeners for garden setup and seasonal care. Share your area and our team will arrange a verified professional.',
    'gardener gardening garden mali plants lawn terrace seasonal',
    'approved', 'manual'
  ),
  (
    'do you do house shifting packers and movers',
    'Do you do house shifting / packers and movers?',
    'Yes, house shifting and relocation help is one of our on-demand home services — tell us your area and date and our team will sort it out.',
    'house shifting packers movers relocation move moving shift',
    'approved', 'manual'
  ),
  (
    'do you provide home nursing or medical care',
    'Do you provide home nursing / medical care?',
    'Yes — alongside domestic helpers we offer a full home-care division: nurses, trained attendants, physiotherapy, ICU-at-home, palliative care and medical equipment rental in Bangalore. Care plans are tailored after a free consultation, so our team will share a no-obligation quote on a call.',
    'nurse nursing medical care physiotherapy physio icu ventilator patient attendant caretaker palliative equipment',
    'approved', 'manual'
  ),
  (
    'do you serve my area or pincode',
    'Do you serve my area / pincode?',
    'We serve many Bangalore localities for part-time and full-time help, live-in placements anywhere in Bangalore, and Bareilly — and we''re expanding. Tell me your area and I''ll check, and either way our team can take your details.',
    'area pincode pin code locality serve cover available location my area',
    'approved', 'manual'
  )
on conflict (question_key) do update
  set question = excluded.question,
      answer   = excluded.answer,
      keywords = excluded.keywords,
      status   = excluded.status,
      source   = excluded.source,
      updated_at = now();
