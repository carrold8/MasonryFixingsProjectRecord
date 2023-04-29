
const Project = {
    id: 1,
    title: 'Test Project',
    completed: false,
    address: {
        line1: 'Branstown',
        line2: 'Dunshaughlin',
        city: 'Dunshaughlin',
        county: {
            id: 1,
            county: 'Meath'
        },
        country: {
            id: 1,
            code: 'IRE',
            country: 'Ireland'
        }
    },
    applicant: 'Facebook',
    architect: {
        id: 2,
        firstName: 'John',
        lastName: 'Doe',
        architectCompany: {
            id: 1,
            company: 'PM Group'
        }
    },
    engineerCompany: {
        id: 1,
        name: 'DBFL',
        office: {
            id: 1,
            address: {
                line1: 'Cork Office',
                line2: 'Bantry',
                city: 'Cork',
                county: {
                    id: 2,
                    county: 'Cork'
                }
            },
        },
        engineers: [
            {
                id: 1,
                firstName: 'David',
                lastName: 'Carroll'
            }
        ]
    },
    engineer: {
        id: 1,
        firstName: 'David',
        lastName: 'Carroll'
    },
    contactedEngineer: false,
    category: {
        id: 2,
        category: 'Civil'
    },
    sector: {
        id: 1,
        sector: 'Sector'
    },
    startDate: 1682790957,
    endDate: 1682790957,
    induction: {
        required: true,
        completed: false,
        dateOfCompletion: 1682790957,
        providedOn: 'Arrival'
    },
    buildingDescription: 'Test note of building description',
    footprint: 15000,
    frameMaterial: {
        id: 1,
        frameMaterial: 'Frame'
    },
    floorMaterial: {
        id: 1,
        floorMaterial: 'Floor'
    },
    envelopeMaterial: {
        id: 1,
        envelopeMaterial: 'Envelope'
    },
    roofMaterial: {
        id: 1,
        roofMaterial: 'Roof'
    },
    partitioningMaterial: {
        id: 1,
        partitioningMaterial: 'Partitioning'
    },
    mainContractor: {
        id: 1,
        name: 'GEM',
        headOffice: {
            id: 1,
            phone: '0872598005',
            address: {
                line1: 'blanch',
                line2: 'dublin',
                city: 'Dubln',
                county: {
                    id: 3,
                    county: 'Dublin'
                }
            },
            accountContacts: [
                {
                    id: 1,
                    firstName: 'Derek',
                    lastName: 'Mayburry',
                    phone: '123456789'
                },
                {
                    id: 2,
                    firstName: 'Mary',
                    lastName: 'Donnnelly',
                    phone: '987654321'
                }
            ]
        }
    },
    accountContact: {
        id: 2,
        firstName: 'Mary',
        lastName: 'Donnnelly',
        phone: '987654321'
    },
    foremanName: 'Bob Builder',
    foremanPhone: '9871234',
    safetyOffice: 'Safeman James',
    safetyOfficePhone: '34556',
    storeManName: 'Happy Gilmore',
    storeManPhone: '0983453',
    anchorTraining: true,
    anchorTrainingDate: 1682790957,

    tasks: [
        {
            id: 1231,
            taskType: {
                id: 1,
                taskType: 'Hoarding',
                stage: {
                    id: 1,
                    stage: 'Stage 1'
                }
            },
            stage: {
                id: 1,
                stage: 'Stage 1'
            },
            startDate: 1682790957,
            endDate: 1682790957,
            approxValue: 0, 
            products: [
                {
                    product: {
                        id: 1,
                        name: 'Bolt',
                        price: 10.00
                    },
                    quantity: 1 
                }
            ]
        },

        {
            id: 1232,
            taskType: {
                id: 2,
                taskType: 'Drylining',
                stage: {
                    id: 2,
                    stage: 'Stage 2'
                }
            },
            stage: {
                id: 2,
                stage: 'Stage 2'
            },
            startDate: 1682790957,
            endDate: 1682790957,
            approxValue: 0, 
            products: [
                {
                    product: {
                        id: 2,
                        name: 'Bolt 2',
                        price: 20.00
                    },
                    quantity: 1 
                }
            ]
        },


        {
            id: 1233,
            taskType: {
                id: 3,
                taskType: 'Balconies',
                stage: {
                    id: 3,
                    stage: 'Stage 3'
                }
            },
            stage: {
                id: 3,
                stage: 'Stage 3'
            },
            startDate: 1682790957,
            endDate: 1682790957,
            approxValue: 0, 
            products: [
                {
                    product: {
                        id: 3,
                        name: 'Bolt 3',
                        price: 30.00
                    },
                    quantity: 1 
                }
            ]
        },


        {
            id: 1234,
            taskType: {
                id: 4,
                taskType: 'Fencing',
                stage: {
                    id: 4,
                    stage: 'Stage 4'
                }
            },
            stage: {
                id: 4,
                stage: 'Stage 4'
            },
            startDate: 1682790957,
            endDate: 1682790957,
            approxValue: 0, 
            products: [
                {
                    product: {
                        id: 4,
                        name: 'Bolt 4',
                        price: 50.00
                    },
                    quantity: 5 
                }
            ]
        }
    ]

}