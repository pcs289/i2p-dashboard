const lawyers = [
  "Ida Jorgensen",
  "Albert Andersen",
  "Silje Larsen",
  "Johannes Gronbach",
  "Christine Leyer",
  "Markus Metzger",
  "Carlos Garcia",
];

const caseTypes = [
  "Lawsuit",
  "Contract Renewal",
  "Contract Negotiation",
  "Consultation",
  "Litigation",
];

const companyNames = [
  "123 Inc.",
  "ABC Corp.",
  "Company XYZ",
  "Internal Matter",
  "TV Station 34",
  "Channel 5",
  "Evil Corp.",
  "Another Company",
  "Sample Company",
  "Tech Company X",
];

const updateTypes = [
  "Confirmed Trial Date",
  "Finished Contract Draft",
  "Waiting for response",
  "Waiting for signed contract",
  "Waiting for settlement",
  "Sent initial proposal",
  "Matter Research",
];

const internalClients = [
  "Marketing",
  "Operations",
  "Product",
  "R&D",
  "Human Resources",
];

export function makeMatters(amount) {
  let matters = [];
  for (let i = 0; i < amount; i++) {
    let matter = {
      company: companyNames[Math.floor(Math.random() * companyNames.length)],
      lawyer: lawyers[Math.floor(Math.random() * lawyers.length)],
      matterType: caseTypes[Math.floor(Math.random() * caseTypes.length)],
      lastUpdate: updateTypes[Math.floor(Math.random() * updateTypes.length)],
      internalClient:
        internalClients[Math.floor(Math.random() * internalClients.length)],
      active: Math.random() > 0.93 ? true : false,
      externalHelp: Math.random() > 0.7 ? true : false,
    };
    matters.push(matter);
  }

  let ongoingMatters = matters.filter((matter) => matter.active === true)
    .length;

  let mattersClosedThisMonth = Math.floor(Math.random() * 20);

  let avgMattersPerLawyer = Math.round(ongoingMatters / lawyers.length);

  let expensesThisMonth =
    "€ " +
    String(Math.floor(Math.random() * 10000) + 4000).replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    );

  let casesWithExternalHelp = matters.filter(
    (matter) => matter.externalHelp === true && matter.active === true
  ).length;

  let timeToClose = String(Math.floor(Math.random() * 30) + 4) + " days";

  let averageSpend =
    "€ " +
    String(Math.floor(Math.random() * 3000) + 1000).replace(
      /\B(?=(\d{3})+(?!\d))/g,
      "."
    );

  let mattersResolved = matters.filter((matter) => matter.active === false)
    .length;

  let KPIList = [
    {
      title: "Ongoing Matters",
      value: ongoingMatters,
    },
    { title: "Matters closed this month", value: mattersClosedThisMonth },
    {
      title: "Avg. Matters per Lawyer",
      value: avgMattersPerLawyer,
    },
    { title: "Expenses this month", value: expensesThisMonth },
    { title: "Active Cases with external help", value: casesWithExternalHelp },
    { title: "Average time to close case", value: timeToClose },
    { title: "Average spend on case", value: averageSpend },
    { title: "Total Matters resolved", value: mattersResolved },
  ];

  let employeeStatus = [];
  for (let lawyer in lawyers) {
    let numberOfMatters = matters.filter(
      (matter) => matter.active === true && matter.lawyer === lawyers[lawyer]
    ).length;
    employeeStatus.push({ name: lawyers[lawyer], matters: numberOfMatters });
  }

  return { matters, KPIList, employeeStatus };
}
