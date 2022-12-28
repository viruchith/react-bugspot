const issuesMockArray = [
  {
    id: 1,
    summary: '"Get Started" button is not working in Page Section.',
    description:
      'Step 1: Enter URL "https://www.facebook.com/&quot;\nStep 2: Click on "Create a Page" link\nStep 3 : Goto "Business and Brand" Section.\nStep 4: Click on "Get Started" button.\n\nExpected Result :\nIt should open the "business" page.\n\nActual Result :\nThe "Get Started" button is not clickable.',
    stepsToReproduce:
      'Step 1: Enter URL "https://www.facebook.com/&quot;\nStep 2: Click on "Create a Page" link\nStep 3 : Goto "Business and Brand" Section.\nStep 4: Click on "Get Started" button.\n\nExpected Result :\nIt should open the "business" page.\n\nActual Result :\nThe "Get Started" button is not clickable.',
    additionalInformation: null,
    sourceCode: null,
    category: "TESTS",
    reproducibility: "ALWAYS",
    severity: "FEATURE",
    priority: "LOW",
    productVersion: "NA",
    status: "ACKNOWLEDGED",
    createdAt: "2022-12-15",
    updatedAt: "2022-12-15",
    creator: {
      id: 1,
      firstName: "Viruchith",
      lastName: "Ganesan",
      email: "v@g.com",
      username: "viruchith",
    },
  },

  {
    id: 2,
    summary: " Make time tracking input format clearer",
    description:
      'From euerabi: In the time tracker of mantis, the time is being entered "HH:MM", but in the connector it expects an integer and interprets the value as minutes. Both seems ok to me, but its not obvious to the user that the connector expects minutes only.',
    stepsToReproduce: null,
    additionalInformation: null,
    sourceCode: null,
    category: "CORE",
    reproducibility: "NA",
    severity: "FEATURE",
    priority: "NORMAL",
    productVersion: "0.4.7",
    status: "NEW",
    createdAt: "2022-12-15",
    updatedAt: "2022-12-15",
    creator: {
      id: 8,
      firstName: "Lorilyn",
      lastName: "Troop",
      email: "ltroop7@europa.eu",
      username: "ltroop7",
    },
  },

  {
    id: 3,
    summary: "Double calls to web services with HTTP_AUTH set",
    description:
      "When using HTTP authentication, each web services call is performed twice:\n\n    the first one without authentication headers, so the server replies HTTP 401.\n    the second with headers set, so the server executes it.\n\nThere is no need to duplicate calls: if the header is set before every call, they will be performed only once, which should be the expected behaviour.",
    stepsToReproduce: null,
    additionalInformation: null,
    sourceCode: null,
    category: "CORE",
    reproducibility: "ALWAYS",
    severity: "TWEAK",
    priority: "LOW",
    productVersion: "9.8.4",
    status: "NEW",
    createdAt: "2022-12-15",
    updatedAt: "2022-12-15",
    creator: {
      id: 3,
      firstName: "Stefano",
      lastName: "Wadforth",
      email: "swadforth2@businessweek.com",
      username: "swadforth2",
    },
  },

  {
    id: 4,
    summary:
      "0014940: Anonymous checkbox must be selected to finish setup even with HTTP authentication",
    description:
      "When creating a task repository definition, using HTTP authentication, it is required to select the anonymous checkbox, otherwise the finish button is not activated.\n\nTechnically speaking, I am not performing an anonymous login, I am simply delegating user authentication to the web server.\n\nThe expected behaviour should be to activate the finish button when::\n\n    username and password filled for repository authentication\n    OR\n    'Anonymous' checkbox is selected\n    OR\n    'Enable http authentication' checkbox is selected AND username and password are filled\n",
    stepsToReproduce:
      "When creating a task repository definition, using HTTP authentication, it is required to select the anonymous checkbox, otherwise the finish button is not activated.\n\nTechnically speaking, I am not performing an anonymous login, I am simply delegating user authentication to the web server.\n\nThe expected behaviour should be to activate the finish button when::\n\n    username and password filled for repository authentication\n    OR\n    'Anonymous' checkbox is selected\n    OR\n    'Enable http authentication' checkbox is selected AND username and password are filled\n",
    additionalInformation: null,
    sourceCode: null,
    category: "UI",
    reproducibility: "ALWAYS",
    severity: "FEATURE",
    priority: "LOW",
    productVersion: "7.1.5",
    status: "RESOLVED",
    createdAt: "2022-12-15",
    updatedAt: "2022-12-15",
    creator: {
      id: 1,
      firstName: "Viruchith",
      lastName: "Ganesan",
      email: "v@g.com",
      username: "viruchith",
    },
  },
];

export default issuesMockArray;