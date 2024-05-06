---
# try also 'default' to start simple
theme: seriph
background: ''
title: Introduction to Excel and Power BI
#class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
favicon: 'https://bokss.org.hk/content/logo/icon.png'
mdc: true
layout: intro
# author field for exported PDF
author: Ka Long CHAN
# keywords field for exported PDF, comma-delimited.
keywords: excel,powerbi,datascience
download: '/slides-export.pdf'
selectable: true
colorSchema: light
---

# Introduction to Excel and Power BI

<style>
.slidev-layout h1 {
  margin-left: 0rem;
  font-size: 3.5rem
}
p {
  margin-top: 0rem;
  margin-bottom: 0rem;
  margin-left: 0rem;
  margin-right: 0rem;
}
</style>

BOKSS IMHS Internal Training

30-May-2024 @ K83 & Zoom

---
transition: fade-out
layout: section
---

# Chapter 1

Basic Concept of Data Science

---
transition: fade-out
---

# Type of Data Science

- Descriptive (Business Intelligence)
- Predictive (Machine Learning - AI)

---
transition: fade-out
---

# Workflow of Data Science

“R for Data Science” (Wickham and Grolemund 2017)

![Local Image](/data-science.png)

---
transition: fade-out
layout: two-cols-header
---

# Workflow of Data Science

<style>
    .two-cols-header {
    grid-template-rows: repeat(4, 1fr)
  }
</style>

::left::

## Import

- Open the file using one software
  - .csv / .tsv / .txt
  - .xlsx / .xls
  - .json

::right::

## Tidy

- Format in tabular
  - Every column is a variable
  - Every row is an observation
  - Every cell has a single value

![Local Image](/data-science.png)

---
transition: fade-out
layout: two-cols-header
---

# Workflow of Data Science

<style>
    .two-cols-header {
    grid-template-rows: repeat(4, 1fr)
  }
</style>

::left::

## Transform

- Create new column
- Re-group categories
- Filter your sample
- Combine tables
- Handle missing data

::right::

## Visualize

- Get the insight of your data
- Check the data quality
  - Missing (Completeness)
  - Validity / Accuracy

![Local Image](/data-science.png)

---
transition: fade-out
layout: two-cols-header
---

# Workflow of Data Science

<style>
    .two-cols-header {
    grid-template-rows: repeat(4, 1fr)
  }
</style>

::left::

## Modeling

- Out-of-scope


::right::

## Communicate

- Making (interactive) dashboard
  - Excel, Google sheet
  - Power BI, Looker, Tableau
  - R, Python

![Local Image](/data-science.png)
