export const fragmentTypes = [
  {
    kind: "UNION",
    name: "StartPageItemObjectGraphType",
    possibleTypes: [
      {
        name: "Product"
      },
      {
        name: "CustomItem"
      }
    ]
  },
  {
    kind: "INTERFACE",
    name: "Filter",
    possibleTypes: [
      {
        name: "ListFilter"
      },
      {
        name: "NumericRangeFilter"
      },
      {
        name: "BooleanFilter"
      },
      {
        name: "MultiListFilter"
      }
    ]
  },
  {
    kind: "INTERFACE",
    name: "Document",
    possibleTypes: [
      {
        name: "Category"
      },
      {
        name: "Product"
      },
      {
        name: "StartPage"
      },
      {
        name: "Page"
      }
    ]
  },
  {
    kind: "INTERFACE",
    name: "CustomField",
    possibleTypes: [
      {
        name: "CustomStringField"
      },
      {
        name: "CustomBoolField"
      },
      {
        name: "CustomHtmlField"
      },
      {
        name: "CustomListField"
      },
      {
        name: "CustomMultiLevelListField"
      }
    ]
  },
  {
    kind: "INTERFACE",
    name: "Customer",
    possibleTypes: [
      {
        name: "PrivateCustomer"
      },
      {
        name: "BusinessCustomer"
      }
    ]
  }
];
