# UI and API Automation with Cypress

This repository contains UI and API Test Automation scripts for [Parabank Application](https://parabank.parasoft.com). Parabank is a realistic online banking application that facilitates fund transaction management.

**Note:** If the [Parabank Application](https://parabank.parasoft.com) is not up and running, deploy the pre built parabank app [(github repo for reference)](https://github.com/parasoft/parabank) `parabank-3.0.0-SNAPSHOT.war` located in the root directory using an [Apache Tomcat](https://tomcat.apache.org/download-90.cgi) container.

## Built With

- [Cypress](https://www.cypress.io/) - With Cypress, you can easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds.

## Setup

1. Download and install [Node.js (LTS)](https://nodejs.org/en/download/)
2. Download and install [Visual Studio Code](https://code.visualstudio.com/download)
3. Open Visual Studio Code
4. Clone this project repository
5. Open a new terminal
6. Install all dependencies using `npm install`
7. Run all tests using the command: `npm run code-challenge`
   **Note:** add LOCAL_RUN=true command if parabank app is running locally. `LOCAL_RUN=true npm run test-challenge`

# UI Web Elements Naming Convention

Use the following prefixes when naming UI Web Elements in your application page objects:
| Category | UI Control Type | Prefix | Example |
|----------|----------------------------|--------|------------------|
| Basic | Button | btn | btnExit |
| Basic | Check box | chk | chkReadOnly |
| Basic | Combo box | cbo | cboEnglish |
| Basic | Common dialog | dlg | dlgFileOpen |
| Basic | Date picker | dtp | dtpPublished |
| Basic | Dropdown List / Select tag | ddl | ddlCountry |
| Basic | Form | frm | frmEntry |
| Basic | Frame | fra | fraLanguage |
| Basic | Image | img | imgIcon |
| Basic | Label | lbl | lblHelpMessage |
| Basic | Links/Anchor Tags | lnk | lnkForgotPwd |
| Basic | List box | lst | lstPolicyCodes |
| Basic | Menu | mnu | mnuFileOpen |
| Basic | Radio button / group | rdo | rdoGender |
| Basic | RichTextBox | rtf | rtfReport |
| Basic | Table | tbl | tblCustomer |
| Basic | TabStrip | tab | tabOptions |
| Basic | Text Area | txa | txaDescription |
| Basic | Text box | txt | txtLastName |
| Basic | Header | hdr | hdrCustomerLogin |
| Complex | Chevron | chv | chvProtocol |
| Complex | Data grid | dgd | dgdTitles |
| Complex | Data list | dbl | dblPublisher |
| Complex | Directory list box | dir | dirSource |
| Complex | Drive list box | drv | drvTarget |
| Complex | File list box | fil | filSource |
| Complex | Panel/Fieldset | pnl | pnlGroup |
| Complex | ProgressBar | prg | prgLoadFile |
| Complex | Slider | sld | sldScale |
| Complex | Spinner | spn | spnPages |
| Complex | StatusBar | sta | staDateTime |
| Complex | Timer | tmr | tmrAlarm |
| Complex | Toolbar | tlb | tlbActions |
| Complex | TreeView | tre | treOrganization |
