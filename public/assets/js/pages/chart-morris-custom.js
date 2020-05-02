"use strict";
$(document).ready(function () {
  setTimeout(function () {
    // [ Donut-chart ] Start
    var mattersByCategory = Morris.Donut({
      element: "matters-by-category",
      data: [
        {
          value: 3,
          label: "Consulting",
        },
        {
          value: 5,
          label: "Administration",
        },
        {
          value: 6,
          label: "Lawsuits",
        },
        {
          value: 4,
          label: "Litigations",
        },
      ],
      colors: ["#1de9b6", "#A389D4", "#04a9f5", "#1dc4e9"],
      resize: true,
      formatter: function (x) {
        return x + " Matters";
      },
    });
    // Internal vs. External
    var internalExternal = Morris.Donut({
      element: "internal-vs-external",
      data: [
        {
          value: 2,
          label: "Internal",
        },
        {
          value: 1,
          label: "External",
        },
      ],
      colors: ["#1de9b6", "#A389D4", "#04a9f5", "#1dc4e9"],
      resize: true,
      formatter: function (x) {
        return x + " Matters";
      },
    });
    // Matters by department
    var mattersByDepartment = Morris.Donut({
      element: "matters-by-department",
      data: [
        {
          value: 3,
          label: "Marketing",
        },
        {
          value: 5,
          label: "Operations",
        },
        {
          value: 6,
          label: "Human Resources",
        },
        {
          value: 4,
          label: "Product",
        },
      ],
      colors: ["#1de9b6", "#A389D4", "#04a9f5", "#1dc4e9"],
      resize: true,
      formatter: function (x) {
        return x + " Matters";
      },
    });
  }, 700);
});
