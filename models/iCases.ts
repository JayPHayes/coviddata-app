export interface CovidCase {
    [x: string]: any;
    caseId:              number;
    states:              string;
    total_cases:         number;
    new_cases_1_day:     number;
    cases_per_1M_people: number;
    deaths:              number;
    caseLocationType:    CaseLocationType;
    caseType:            CaseType;
    newCaseStatus:       NewCaseStatus;
    newCaseStatusColor:  NewCaseStatusColor;
    isNewCases:          boolean;
    casesImportDate:     Date;
}

export enum CaseLocationType {
    State = "State",
}

export enum CaseType {
    Cases = "Cases",
}


export enum NewCaseStatus {
    NewCasesReport = "New Cases Report",
    NoNewCasesReported = "No New Cases Reported",
}

export enum NewCaseStatusColor {
    Fd3333 = "#FD3333",
    The006580 = "#006580",
}
