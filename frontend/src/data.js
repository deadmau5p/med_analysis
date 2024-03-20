const groups = [
    {
        name: "Hematološke preiskave",
        subgroups: [
            {
                name: "K-Hemogram",
                items: [
                    { name: "K-levkociti", unit: "10^9/L", male_min: 4.0, male_max: 10.0, female_min: 4.0, female_max: 10.0 },
                    { name: "K-Eritrociti", unit: "10^12/L", male_min: 4.5, male_max: 5.5, female_min: 3.8, female_max: 4.8 },
                    { name: "K-Hemoglobin", unit: "g/L", male_min: 130, male_max: 170, female_min: 120, female_max: 150 },
                    { name: "K-Hematokrit", unit: "", male_min: 0.400, male_max: 0.500, female_min: 0.360, female_max: 0.460 },
                    { name: "K-MCV", unit: "fl", male_min: 83.0, male_max: 101.0, female_min: 83.0, female_max: 101.0 },
                    { name: "K-MCH", unit: "pg", male_min: 27.0, male_max: 32.0, female_min: 27.0, female_max: 32.0 },
                    { name: "K-MCHC", unit: "g/L", male_min: 315, male_max: 345, female_min: 315, female_max: 345 },
                    { name: "K-RDW", unit: "%", male_min: 11.6, male_max: 14.0, female_min: 11.6, female_max: 14.0 },
                    { name: "K-Trombociti", unit: "10^9/L", male_min: 150, male_max: 410, female_min: 150, female_max: 410 },
                    { name: "K-MPV", unit: "fl", male_min: 7.8, male_max: 11.0, female_min: 7.8, female_max: 11.0 },
                ]
            },
            {
                name: "DKS",
                items: [
                    { name: "K-nevtrofilci seg.", unit: "%", male_min: 40.0, male_max: 75.0, female_min: 40.0, female_max: 75.0 },
                    { name: "K-limfociti", unit: "%", male_min: 20.0, male_max: 50.0, female_min: 20.0, female_max: 50.0 },
                    { name: "K-monociti", unit: "%", male_min: 2.0, male_max: 10.0, female_min: 2.0, female_max: 10.0 },
                    { name: "K-eozinofilci", unit: "%", male_min: 1.0, male_max: 6.0, female_min: 1.0, female_max: 6.0 },
                    { name: "K-bazofilci", unit: "%", male_min: 0.0, male_max: 2.0, female_min: 0.0, female_max: 2.0 },
                    { name: "K-nevtrofilci seg.", unit: "10^9/L", male_min: 1.6, male_max: 7.5, female_min: 1.6, female_max: 7.5 },
                    { name: "K-limfociti", unit: "10^9/L", male_min: 0.8, male_max: 5.0, female_min: 0.8, female_max: 5.0 },
                    { name: "K-monociti", unit: "10^9/L", male_min: 0.1, male_max: 1.0, female_min: 0.1, female_max: 1.0 },
                    { name: "K-eozinofilci", unit: "10^9/L", male_min: 0.1, male_max: 0.6, female_min: 0.1, female_max: 0.6 },
                    { name: "K-bazofilci", unit: "10^9/L", male_min: 0.0, male_max: 0.2, female_min: 0.0, female_max: 0.2 },
                ]

            }
        ]
    },
    {
        name: "Analiza urina",
        subgroups: [
            {
                name: "U-10",
                items: [
                    { name: "U-glukoza", unit: "poE", male_min: 0.0, male_max: 0.0, female_min: 0.0, female_max: 0.0 },
                    { name: "U-bilirubin", unit: "poE", male_min: 0.0, male_max: 0.0, female_min: 0.0, female_max: 0.0 },
                    { name: "U-ketoni", unit: "poE", male_min: 0.0, male_max: 0.0, female_min: 0.0, female_max: 0.0 },
                    { name: "U-relativna gotota", unit: "", male_min: 1.003, male_max: 1.040, female_min: 1.003, female_max: 1.040 },
                    { name: "U-pH", unit: "", male_min: 0.0, male_max: 0.0, female_min: 0.0, female_max: 0.0 },
                    { name: "U-hemoglobin", unit: "poE", male_min: 4.5, male_max: 8.0, female_min: 4.5, female_max: 8.0 },
                    { name: "U-proteini", unit: "poE", male_min: 0.0, male_max: 0.0, female_min: 0.0, female_max: 0.0 },
                    { name: "U-urobilinogen", unit: "poE", male_min: 0.0, male_max: 1.0, female_min: 0.0, female_max: 1.0 },
                    { name: "U-nitriti", unit: "poE", male_min: 0.0, male_max: 0.0, female_min: 0.0, female_max: 0.0 },
                    { name: "U-levkociti", unit: "poE", male_min: 0.0, male_max: 0.0, female_min: 0.0, female_max: 0.0 },
                ]
            }
        ]
    },
    {
        name: "Biokemijske preiskave",
        subgroups: [
            {
                name: "Biokemijske preiskave",
                items: [
                    { name: "S-glukoza", unit: "mmol/L", male_min: 3.6, male_max: 6.1, female_min: 3.6, female_max: 6.1 },
                    { name: "S-AST", unit: "µkat/L", male_min: 0.0, male_max: 0.58, female_min: 0.0, female_max: 0.52 },
                    { name: "S-ALT", unit: "µkat/L", male_min: 0.0, male_max: 0.74, female_min: 0.0, female_max: 0.56 },
                    { name: "S-gamaGT", unit: "µkat/L", male_min: 0.0, male_max: 4.13, female_min: 0.0, female_max: 4.12 },
                    { name: "S-Holesteroli", unit: "mmol/L", male_min: 4.0, male_max: 5.2, female_min: 4.0, female_max: 5.2 },
                    { name: "S-HDL-Holesterol", unit: "mmol/L", male_min: 1.45, male_max: 4.0, female_min: 1.68, female_max: 4.0 },
                    { name: "S-LDL-Holesterol", unit: "mmol/L", male_min: 0.0, male_max: 2.59, female_min: 0.0, female_max: 2.59 },
                    { name: "S-Triglicerid", unit: "mmol/L", male_min: 0.0, male_max: 2.26, female_min: 0.0, female_max: 2.26 },
                ]
            }
        ]
    }

];

export default groups;