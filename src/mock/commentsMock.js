const commentsMockArray = [
  {
    id: 1,
    note: "This is the way the Axis client works, and we're reusing the support from the Mylyn web service bundle. I'll see if anything can be done.",
    code: null,
    creator: {
      id: 8,
      firstName: "Lorilyn",
      lastName: "Troop",
      email: "ltroop7@europa.eu",
      username: "ltroop7",
    },
  },

  {
    id: 2,
    note: "Try this",
    code: "$result = $mysqli->query('SELECT * FROM students');\nwhile ($row = $result->fetch_assoc()) {\n\techo $row['name'] . '<br>';\n}",
    creator: {
      id: 1,
      firstName: "Viruchith",
      lastName: "Ganesan",
      email: "v@g.com",
      username: "viruchith",
    },
  },

  {
    id: 3,
    note: "\nmpol\n\nmpol\t\n\n2013-11-19 10:50\n\nreporter\t  ~0038592\n\t\n\nYes, we do. But does it cause any serious harm? The current situation forces user to always go to the web interface to set the version to unreleased one.\n\nA preference set by user that actually cannot set the unreleased version would result in error from the server, I assume (unless the SOAP interface just doesn't enforce it, but this would be a very serious bug there).\nBut this is just a case of \"Don't do that then!\". Check on the server if you can really use these versions before changing the preference.\nAnd if the error can be easily recognized the connector could even suggest the user to switch the setting back to off on receiving it.",
    code: null,
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
    note: "Marking as acknowleged to signal that if/when the SOAP API supports it we'll support it as well.",
    code: null,
    creator: {
      id: 8,
      firstName: "Lorilyn",
      lastName: "Troop",
      email: "ltroop7@europa.eu",
      username: "ltroop7",
    },
  },

  {
    id: 5,
    note: "Original note author: jeckyhl\n\nI found why my first correction in Mantis SOAP API didn't worked (see attachment mc_account_api (v2).php.patch). The trick is to return a fake username like 'userXX' where XX is the id of the deleted user (this is done by method user_get_name in user_api.php).\n\nYet I'm not sure this is the right way to fix this issue.",
    code: "if (in_array('David', $names)) {\n\t// item exists\n}",
    creator: {
      id: 1,
      firstName: "Viruchith",
      lastName: "Ganesan",
      email: "v@g.com",
      username: "viruchith",
    },
  },
];

export default commentsMockArray;