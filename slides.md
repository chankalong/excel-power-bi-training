---
# try also 'default' to start simple
theme: seriph
background: ''
title: Introduction to Excel and Power BI
lineNumbers: true
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
download: '/excel-power-bi.pdf'
selectable: true
colorSchema: light
exportFilename: excel-power-bi
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

<style>
    h1, p {
    margin-left: 0rem;
  }
</style>

Basic Concept of Data Science

---
transition: fade-out
---

# Data is everywhere

<div style="display: flex;justify-content: center;"><img src="/word-cloud-data.png" style="width: 80%" /></div>

---
transition: fade-out
---

# Type of Data

- Structured Data vs unstructured data
- Quantitative vs. qualitative data

---
transition: fade-out
layout: two-cols-header
---

# Structured vs unstructured data

<style>
    .two-cols-header {
    grid-template-rows: repeat(4, 1fr)
  }
</style>

::left::

## Structured data
  - Organized
  - Tabular format
  - Predefined structure
  - Text and numbers

::right::

## Unstructured data
  - Unorganized
  - No specific format
  - No predefined structure
  - Text, images, audio, video

---
transition: fade-out
layout: two-cols-header
---

# Structured vs unstructured data

<style>
    .two-cols-header {
    grid-template-rows: repeat(4, 1fr)
  }
</style>

::left::

## Structured data
| Name      | Age | Gender |
|-----------|-----|--------|
| James     | 16  | Male   |
| Elizabeth | 14  | Female |
| Thomas    | 17  | Male   |

::right::

## Unstructured data
There are three students named James, Elizabeth, and Thomas. Their respective genders and ages are male 16, female 14, and male 17.

---
transition: fade-out
layout: two-cols-header
---

# Quantitative vs. qualitative data

<style>
    .two-cols-header {
    grid-template-rows: repeat(4, 1fr)
  }
</style>

::left::

## Quantitative data
  - Numberical data
  - Count, measure, percentage

## Examples
  - Age
  - Temperature
  
::right::

## Qualitative data
  - Categorical data
  - Group into categories

## Examples
  - Gender
  - Holiday

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

- Descriptive (Business Intelligence)
- Out-of-scope
  - Predictive (Machine Learning)
  - Interference (Statistic)


::right::

## Communicate

- Making (interactive) dashboard
  - Excel, Google sheet
  - Power BI, Looker, Tableau
  - R, Python

![Local Image](/data-science.png)

---
transition: fade-out
layout: section
---

# Chapter 2

<style>
    h1, p {
    margin-left: 0rem;
  }
</style>

Some Basic Tricks of Excel

---
transition: fade-out
layout: two-cols-header
---

# Edit, Copy and Paste

<style>
    .two-cols-header {
    grid-template-rows: repeat(4, 1fr)
  }
  ul {
    width: 200%
  }
</style>

::left::

## Method 1
1. Select the cell
2. Make your edit, copy, or paste
3. When you are editing, **arrow** keyboard will select other cell

<br>

## Remark
- You can only use the same method to copy and paste

::right::

## Method 2
1. Double click (F2) the cell
2. Make your edit, copy, or paste
3. When you are editing, **arrow** keyboard will be as usual

---
transition: fade-out
layout: two-cols-header
---

# Referencing

<style>
    .two-cols-header {
    grid-template-rows: repeat(4, 1fr)
  }
</style>

::left::

## Absolute referencing
- **constant** when copied to other cell
```ts
=$A$2 / =A$2 / =$A2
```

<SlidevVideo controls style="width: 80%"><source src="/absolute_referencing.mov"></SlidevVideo>

::right::

## Relative referencing
- **change** when copied to other cell
```ts
=A2 / =Sheet1!A2
```

<SlidevVideo controls style="width: 80%"><source src="/relative_referencing.mov"></SlidevVideo>

---
transition: fade-out
---

# Other topic
- Multiple lines in one cell
- Freeze cell
- Custom format
- F4 Hotkey
- Resize width and height
- Paste special

---
transition: fade-out
---

# Multiple lines in one cell
- Press Alt + Enter

<SlidevVideo controls style="height: 60%"><source src="/multi-line.mov"></SlidevVideo>

---
transition: fade-out
---

# Freeze cell
- View ->
	- Freeze Panes (Custom the Freezing behavior)
	- Freeze Top Row
  	- Freeze First Column

![freeze-cell](/freeze.png)

---
transition: fade-out
layout: two-cols
---

# Formatting

- Build-in format
- Custom format
- Using formula

```ts
=TEXT(A2, "[$-404]aaaa")
```

[reference-date-format](https://thomasjao.gitbooks.io/excel/content/entry_data.html)

::right::

<div style="display: flex"><img src="/formatting.png" style="width: 50%" /><img src="/custom-formatting.png" style="height: 60%; width: 60%" /></div>

---
transition: fade-out
layout: two-cols-header
---

# F4 Hotkey

<style>
    .two-cols-header {
    grid-template-rows: repeat(4, 1fr)
  }
</style>


::left::

- Make previous action

<SlidevVideo controls style="height: 60%"><source src="/f4-repeat.mov"></SlidevVideo>

::right::

- Change referencing style

<SlidevVideo controls style="height: 60%"><source src="/f4-change-referencing.mov"></SlidevVideo>

---
transition: fade-out
---

# Resize width and height
1. Select all
2. Double click the height line or width line

<SlidevVideo controls style="height: 60%"><source src="/resize-width-height.mov"></SlidevVideo>

---
transition: fade-out
layout: two-cols
---

# Paste special
- Transpose
- Values

::right::

<div><img src="/paste-special.png" style="width: 95%" /></div>

---
transition: fade-out
layout: section
---

# Chapter 3

<style>
    h1, p {
    margin-left: 0rem;
  }
</style>

Using Table in Excel

---
transition: fade-out
layout: two-cols-header
---

# Feature of Table in Excel

<style>
.two-cols-header {
  grid-template-rows: repeat(4, 1fr)
}
</style>

::left::

- Column header row
  - Unique header name
- Body
- Total row
  - Disable by default
  - Build-in function (SUM / AVERAGE)
  - Custom function

::right::

![excel-table-intro](/excel-table-intro.png)

---
transition: fade-out
---

# Benefit of using Table

## Structured referencing
- Automatically updates as data is added

```ts
=[@colName]
```
<br>

## Data quality
- Automatically add new column
- Build-in filtering and sorting
- Data validation automatically updates
- Re-size table to add or remove data

---
transition: fade-out
layout: section
---

# Chapter 4

<style>
    h1, p {
    margin-left: 0rem;
  }
</style>

Basic Functions in Excel

---
transition: fade-out
layout: two-cols-header
---

# Type of functions in Excel

<style>
.two-cols-header {
  grid-template-rows: repeat(4, 1fr)
}
</style>

::left::

- Command button in Ribbon
  - Data validation
  - Conditional formatting
  - Remove duplicates
  - Flash fill
  - Split text to columns
- Operations

::right::

- Function
  - Aggregate
  - Text
  - Date & Time
  - Maths
  - Logical
  - Lookup

---
transition: fade-out
layout: two-cols-header
---

# Operations

<style>
.two-cols-header {
  grid-template-rows: repeat(4, 1fr)
}
</style>

::left::

| Symbol | Operation                |
|--------|--------------------------|
| +      | Addition                 |
| -      | Subtraction              |
| *      | Multiplication           |
| /      | Division                 |
| ^      | Exponentiation           |

::right::

| Symbol | Operation                |
|--------|--------------------------|
| >      | Greater than             |
| <      | Less than                |
| >=     | Greater than or equal to |
| <=     | Less than or equal to    |
| <>     | Not equal                |
| =      | Equal to                 |

---
transition: fade-out
---

# Aggregate function
```ts
=SUM(A2:A10)
=AVERAGE(A2:A10)
=MAX(A2:A10)
=MIN(A2:A10)
=COUNT(A2:A10)
=COUNTBLANK(A2:A10)
```

---
transition: fade-out
---

# Text function
```ts
=LEFT()
=RIGHT()
=TRIM()
=CLEAN()
=CONCAT()
=CONCATENATE()
=TEXTJOIN()
=TEXTSPLIT()
=UPPER()
=LOWER()
=PROPER()
=LEN()
=REPLACE()
=SUBSTITUTE()
```

---
transition: fade-out
layout: two-cols-header
---

# Date & Time function

<style>
.two-cols-header {
  grid-template-rows: repeat(4, 1fr)
}
</style>

::left::

## Date
```ts
=DATE()
=YEAR()
=MONTH()
=DAY()
=DAYS()
=TODAY()
=WEEKDAY()
=WEEKNUM()
```

::right::

## Time
```ts
=TIME()
=NOW()
=HOUR()
=MINUTE()
=SECOND()
```

---
transition: fade-out
---

# Maths function
```ts
=ROUND()
=ABS()
=INT()
```

---
transition: fade-out
---

# Logical function
```ts
=AND()
=OR()
=NOT()
=ISNUMBER()
=ISERROR()
=ISERR()
=ISBLANK()
=IF()
=IFS()
=IFERROR()
=SWITCH()
```

---
transition: fade-out
layout: two-cols-header
---

# Logical + Aggregate function

<style>
.two-cols-header {
  grid-template-rows: repeat(4, 1fr)
}
</style>

::left::

## \[Aggregate]\[Logical]()
```ts
=COUNTIF()
=COUNTIFS()
=SUMIF()
=SUMIFS()
=AVERAGEIF()
=AVERAGEIFS()
```

::right::

## D\[Aggregate]()
```ts
=DMAX()
=DMIN()
```

---
transition: fade-out
---

# Lookup function
```ts
=VLOOKUP()
=XLOOKUP()
=FILTER()
```

---
transition: fade-out
---

# Array function
## Return more than one cell

```ts
=FILTER()
=SORT()
=SORTBY()
=UNIQUE()
=SEQUENCE()
```

---
transition: fade-out
---

# Other useful function

```ts
=XMATCH()
=INDEX()
=INDIRECT()
=OFFSET()
=LARGE()
=SMALL()
=ROW()
=ROWS()
=COLUMN()
=COLUMNS()
=CHOOSE()
=SEARCH()
=FIND()
```
---
transition: fade-out
layout: two-cols-header
---

# Wildcards in Excel

<style>
.two-cols-header {
  grid-template-rows: repeat(4, 1fr)
}
</style>

::left::

Use to match pattern in function
- Find and Replace
- Conditional Formatting
- Filter
- SEARCH()
- XMATCH()
- \[Aggregate]\[Logical]()

::right::

|  Symbol   | Meaning  |
|  ----  | ----  |
| ?  | 1 character |
| *  | 0 or more character |
| ~  | Escape whilcards |

---
transition: fade-out
---

# Pivot Tables

## Benefit
- Aggregate and organize data in dynamic tables
- Transform rows to columns, or vice versa
- Group, filter, aggregate without need to make changes

---
transition: fade-out
layout: section
---

# Chapter 5

<style>
    h1, p {
    margin-left: 0rem;
  }
</style>

Power Query in Excel

---
transition: fade-out
---

# Big data era

[big-data-etl]

---
transition: fade-out
---

# Benefit of power query

- Combine data from different source
- Keep track of every step in the workflow
- Easy to do every step in workflow
- Update the analytics when the data source update
- Ensure the reproducibility

---
transition: fade-out
---

# Import data

- Single file
- Multiple files with same structure
- Multiple sheets in Excel with same structure
- File from Onedrive Business (BOKSS)

---
transition: fade-out
---

# Transform
- Modify current column
- Add new column

---
transition: fade-out
---

# Load
- Load to excel sheet
- Load to excel connection

---
transition: fade-out
---

# Combine query
- Merge (Join or map)
- Append

---
transition: fade-out
---

# Different type of join
- Full join
- Left join or right join
- Inner join
- Anti join

---
transition: fade-out
---

# Full join

<div><img src="/full-outer-join-operation.png" style="width: 50%" /></div>

---
transition: fade-out
---

# Left join (Right join)

<div><img src="/left-outer-join-operation.png" /></div>

---
transition: fade-out
---

# Inner join

<div><img src="/inner-join-operation.png" /></div>

---
transition: fade-out
---

# Anti join

<div><img src="/left-anti-join-operation.png" /></div>

---
transition: fade-out
layout: statement
---

# Make your decision