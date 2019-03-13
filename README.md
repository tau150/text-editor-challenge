## Intro

Imagine that you are involved into development of a data knowledge storing system, like Wiki or Confluence. At some point you need providing users with possibility of advanced text formatting. For this purpose it was decided to build an own component, in order to have possibilities customizing its functionality in the future.

---

## Requirements

The goal is to implement a component, which renders text and has several features for text manipulation and formatting.

---

## Must have

1. We need to see your own code. It is not permitted to apply and configure a ready-to-use component for text formatting. We need to see your own solution. However you can use other handy components and libraries.
2. User should be able to interact with words of text by some action like double-click or some other way, to select a word. When the word is selected, the user should have possibility to apply options for this word. For simplification we expect to select separate words only; it is not expected to support selection for a part of text.
3. Minimal required formatting list is Bold, Italic and Underline.
4. Formatting settings should be persisted into an in-memory model. When the user selects formatted word, the component should indicate, what formatting options are applied. So then a repetetive formatting application removes these styles (i.e. click bold-botton - get bold text, click bold-botton again - return text weight to normal). It should be possible to apply Bold, Italic and Underline to a word at the same time.
5. Besides formatting options, the user should be able to see synonyms for any word. For getting synonyms use https://www.datamuse.com/api/. Synonyms loading should be implemented out of the component and provided into the component in some way.
6. User should be able to replace a word with a synonym, while keeping all formatting settings.
7. The solution must be flexible and extendable, so new functionality can be added in the future.
8. Target completion time is 2 hours. We would rather see what you were able to do in 2 hours, than a full-blown solution you’ve spent days implementing. Note that in addition to quality, time used is also factored into scoring the task.

---

## Nice to have

1. The editor accepts text input, rather than works with a predefined block of text.
2. Word formatting should be extended by color setting.
3. It should be possible to do indentation for a block of text to one or several steps (i.e. tabulation). Take a look to Gmail editor to get the idea.

---

## Expected Deliverables

1. Source code.
2. Readme, with instructions, how to launch your application.

---

## Tips & Hints

1. We've prepared a skeleton application for your convenience. Please find yours below:
   - Angular skeleton
   - React skeleton
   - Vanilla JavaScript skeleton
   - Vue.js skeleton
     Please use the skeleton, to save time. However there is no need to keep our styles. We encourage you to follow styleguid you are used to.
2. It is okay to change application architecture.
3. Font doesn't matter. Select a specific one, if you need.
4. User interface for the text manipulation could be done via popup component, which renders synonyms and has text formatting actions. Also formatting actions could be done via a top panel. It is free to implement any other UI/UX solutions.
